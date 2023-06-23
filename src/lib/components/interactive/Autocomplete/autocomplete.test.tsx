// libs
import { render } from '@testing-library/react'

import { Autocomplete } from './component'

describe('Tests for Autocomplete', () => {
  it('should render a Autocomplete component', () => {
    const screen = render(<Autocomplete name="Hello world" selectItems={[]} />)

    const component = screen.getByTestId('test-autocomplete')

    expect(component).toBeInTheDocument()
  })
})
