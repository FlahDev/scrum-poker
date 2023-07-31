import { DownloadFileById } from './compose'

describe('Tests for DownloadFIleById', () => {
  it('should render a DownloadFIleById component', () => {
    expect(DownloadFileById('123')).toBeDefined()
  })
})
