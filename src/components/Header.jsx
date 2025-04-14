import React from 'react'
import ToggleDarkMode from './ToggleDarkMode'

function Header({ darkMode, onToggleDarkMode }) {
  return (
    <header className="font-bold bg-lightGrayishBlueBg dark:bg-veryDarkBlueTopBg dark:border-b dark:border-darkDesaturatedBlue transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Social Media Dashboard</h1>
          <p className="text-sm text-gray-500">Total Followers: 23,004</p>
        </div>
        
        <div className="mt-4 sm:mt-0 flex items-center">
          <span className="text-sm font-semibold mr-2">Dark Mode</span>
          <ToggleDarkMode darkMode={darkMode} onToggleDarkMode={onToggleDarkMode} />
        </div>
      </div>
    </header>
  )
}

export default Header