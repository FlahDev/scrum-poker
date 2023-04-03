// lib
import { useCallback } from 'react'

import { VoteProps } from './types'

export function useCompose({
  value,
  onClick
}: Pick<VoteProps, 'value' | 'onClick'>) {
  const handleClick = useCallback(() => {
    if (onClick) onClick(value)
  }, [value])

  return { handleClick }
}
