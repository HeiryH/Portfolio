import React from 'react'

const footer = () => {

  const currentYear = (new Date().getFullYear())
  const yearTxt = currentYear === 2022 ? "2022" : "2022 - " + currentYear

  return (
    <footer class="h-[10vh] font-fahkwang
    flex flex-row items-center justify-center">
      © {yearTxt} Service - Developed by HelmyHeiry
    </footer>
  )

}

export default footer