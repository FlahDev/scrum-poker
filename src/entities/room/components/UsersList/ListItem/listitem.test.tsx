// libs
import { render } from '@testing-library/react'

import { ListItem } from './component'

describe('Tests for ListItem', () => {
  it('should render a ListItem component', () => {
    const screen = render(<ListItem />)

    const component = screen.getByTestId('test-listItem')

    expect(component).toBeInTheDocument()
  })
})
