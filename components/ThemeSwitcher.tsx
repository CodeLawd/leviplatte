import { useTheme } from 'next-themes'
import Toggler from './Toggler'
import { useState, useEffect } from 'react'
import { SunIcon } from '@heroicons/react/outline'
import { MoonIcon } from '@heroicons/react/solid'

const ThemeSwitcher = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const renderThemeChanger = () => {
    if (!mounted) return null

    const currentTheme = theme === 'system' ? systemTheme : theme

    if (currentTheme === 'dark') {
      return (
        <SunIcon
          className="h-8 w-8 text-yellow-500"
          role="button"
          onClick={() => setTheme('light')}
        />
      )
    } else {
      return (
        <MoonIcon
          className="h-8 w-8 text-leviplatte"
          role="button"
          onClick={() => setTheme('dark')}
        />
      )
    }
  }

  return <span className="pl-4">{renderThemeChanger()}</span>
}

export default ThemeSwitcher
