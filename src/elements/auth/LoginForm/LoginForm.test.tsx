// libs
import { render } from '@testing-library/react'

import { LoginForm } from './component'

describe('Tests for LoginForm', () => {
  it('should render a LoginForm component', () => {
    const screen = render(<LoginForm />)

    const component = screen.getByTestId('test-loginForm')

    expect(component).toBeInTheDocument()
  })
})
