// libs
import { render } from '@testing-library/react'

import { Field } from './component'

describe('Tests for Field', () => {
  it('should render a Field component', () => {
    const screen = render(<Field />)

    const component = screen.getByTestId('test-field')

    expect(component).toBeInTheDocument()
  })
})
