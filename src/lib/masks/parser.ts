import { MaskMapType } from './resolve'

import { MaskApplier } from './applier'

export const MaskParser = (pattern: MaskMapType, value: string): string => {
  return MaskApplier(value, pattern)
}
