import React, { useState } from 'react'
import './Settings.css'

const Settings = () => {
  const [theme, setTheme] = useState('light')

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className={`settings ${theme}`}>
      <h1>Settings</h1>
      <button onClick={handleThemeChange}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>

      <form>
        <h3>Change Password</h3>
        <input type="password" placeholder="Current Password" />
        <input type="password" placeholder="New Password" />
        <button>Update Password</button>
      </form>
    </div>
  )
}

export default Settings