// libs
import { render } from '@testing-library/react'

import { Vote } from './component'

describe('Tests for Vote', () => {
  it('should render a Vote component', () => {
    const screen = render(<Vote />)

    const component = screen.getByTestId('test-vote')

    expect(component).toBeInTheDocument()
  })
})
