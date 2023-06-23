// libs
import { render } from '@testing-library/react'

import { RegisterUserScreen } from './component'

describe('Tests for RegisterUserScreen', () => {
  it('should render a RegisterUserScreen component', () => {
    const screen = render(<RegisterUserScreen />)

    const component = screen.getByTestId('test-registerUserScreen')

    expect(component).toBeInTheDocument()
  })
})
