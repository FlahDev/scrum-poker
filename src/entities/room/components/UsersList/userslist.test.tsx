// libs
import { render } from '@testing-library/react'

import { UsersList } from './component'

describe('Tests for UsersList', () => {
  it('should render a UsersList component', () => {
    const screen = render(<UsersList />)

    const component = screen.getByTestId('test-usersList')

    expect(component).toBeInTheDocument()
  })
})
