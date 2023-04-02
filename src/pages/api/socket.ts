import { Server } from "socket.io";

let amount = 0;

const SocketHandler = (req: any, res: any) => {
	if (res.socket.server.io) {
		console.log("Socket is already running");
	} else {
		console.log("Socket is initializing");
		const io = new Server(res.socket.server);
		res.socket.server.io = io;

		io.on("connection", (socket) => {
			++amount;
			console.log(`a new user has connected, current amount: ${amount}`);

			socket.on("input-change", (msg) => {
				socket.broadcast.emit("update-input", msg);
			});
		});
	}

	res.end();
};

export default SocketHandler;
