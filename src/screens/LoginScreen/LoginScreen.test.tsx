// libs
import { render } from '@testing-library/react'

import { LoginScreen } from './component'

describe('Tests for LoginScreen', () => {
  it('should render a LoginScreen component', () => {
    const screen = render(<LoginScreen />)

    const component = screen.getByTestId('test-loginScreen')

    expect(component).toBeInTheDocument()
  })
})
