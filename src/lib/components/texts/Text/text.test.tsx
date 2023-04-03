// libs
import { render } from '@testing-library/react'

import { Text } from './component'

describe('Tests for Text', () => {
  it('should render a Text component', () => {
    const screen = render(<Text />)

    const component = screen.getByTestId('test-text')

    expect(component).toBeInTheDocument()
  })
})
