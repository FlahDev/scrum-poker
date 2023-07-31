// libs
import { render } from '@testing-library/react'

import { HomeScreen } from './component'

describe('Tests for HomeScreen', () => {
  it('should render a HomeScreen component', () => {
    const screen = render(<HomeScreen />)

    const component = screen.getByTestId('test-homeScreen')

    expect(component).toBeInTheDocument()
  })
})
