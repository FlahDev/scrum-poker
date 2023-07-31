// libs
import { render } from '@testing-library/react'

import { Link } from './component'

describe('Tests for Link', () => {
  it('should render a Link component', () => {
    const screen = render(<Link />)

    const component = screen.getByTestId('test-link')

    expect(component).toBeInTheDocument()
  })
})
