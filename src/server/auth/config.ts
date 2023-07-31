export const AuthConfig = {
  secret: String(process.env.API_KEY || ''),
  expiresIn: '7d'
}
