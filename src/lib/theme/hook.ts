// libs
import { useContext, useMemo } from 'react'

import { ThemeContext } from './context'

export const useTheme = () => {
  const ctxProps = useContext(ThemeContext)

  const memoizedTheme = useMemo(() => {
    return {
      changeTheme: ctxProps.changeTheme,
      colors: ctxProps.colors,
      currentTheme: ctxProps.currentTheme,
      font: ctxProps.font
    }
  }, [ctxProps])

  return { ...memoizedTheme }
}
