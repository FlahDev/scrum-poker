// libs
import { render } from '@testing-library/react'

import { RoomScreen } from './component'

describe('Tests for RoomScreen', () => {
  it('should render a RoomScreen component', () => {
    const screen = render(<RoomScreen />)

    const component = screen.getByTestId('test-roomScreen')

    expect(component).toBeInTheDocument()
  })
})
