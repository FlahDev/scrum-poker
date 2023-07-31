// config
import { loadEnvs } from 'config'

export const ResolveApiFileLink = (fileId: string) => {
  return `${loadEnvs('API_URL')}/api/file/${fileId}`
}

export const ResolveFileLink = (fileId: string) => {
  return `${loadEnvs('PORTAL_URL')}/api/file/${fileId}`
}

export function DownloadFileById(fileId: string) {
  const url = ResolveFileLink(fileId)

  const evt = window.open(url, '_blank')

  if (evt?.focus) evt.focus()

  return evt
}
