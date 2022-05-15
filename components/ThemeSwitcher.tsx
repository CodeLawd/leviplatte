import { useTheme } from 'next-themes'
import Toggler from './Toggler'
import { useState, useEffect } from 'react'

const ThemeSwitcher = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const currentTheme = theme === 'system' ? systemTheme : theme

  if (currentTheme === 'dark') {
    return <Toggler onClick={() => setTheme('dark')} />
  } else {
    return (
      <Toggler onClick={() => setTheme('light')} />
      //   <MoonIcon
    )
  }
}

export default ThemeSwitcher
