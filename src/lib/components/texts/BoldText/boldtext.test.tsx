// libs
import { render } from '@testing-library/react'

import { BoldText } from './component'

describe('Tests for BoldText', () => {
  it('should render a BoldText component', () => {
    const screen = render(<BoldText bold="world" text="hello world" />)

    const component = screen.getByTestId('test-boldText')

    expect(component).toBeInTheDocument()
  })
})
