// libs
import { render } from '@testing-library/react'

import { RegisterUserForm } from './component'

describe('Tests for RegisterUserForm', () => {
  it('should render a RegisterUserForm component', () => {
    const screen = render(<RegisterUserForm />)

    const component = screen.getByTestId('test-registerUserForm')

    expect(component).toBeInTheDocument()
  })
})
