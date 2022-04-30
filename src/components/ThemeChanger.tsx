import { useTheme } from "next-themes"
import Image from "next/image"
import { useState, useEffect } from "react";

export const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false)
  

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])
  const { theme, setTheme } = useTheme()
  if (!mounted) {
    return null
  }
  
  if(theme === 'dark'){
    return (
      <button className="theme-changer_button" onClick={() => setTheme('light')}>
        <Image
          src="/icons/lightmode.svg"
          alt={`ライトテーマに切り替える`}
          width={30}
          height={30}
        />
      </button>
    )
  }

  return (
    <button className="theme-changer_button" onClick={() => setTheme('dark')}>
      <Image
        src="/icons/darkmode.svg"
        alt={`ダークモードに切り替える`}
        width={30}
        height={30}
      />
    </button>
  )
}