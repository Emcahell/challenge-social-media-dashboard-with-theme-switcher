import React from 'react'

function Card({ data }) {
  // Extraemos la información
  const { username, network, followers, today } = data

  // Mapea la red social al ícono y color de borde superior
  let iconPath = ''
  let borderColor = ''
  switch (network) {
    case 'facebook':
      iconPath = '/src/assets/icon-facebook.svg' 
      borderColor = 'border-Facebook'
      break
    case 'twitter':
      iconPath = '/src/assets/icon-twitter.svg'
      borderColor = 'border-Twitter'
      break
    case 'instagram':
      iconPath = '/src/assets/icon-instagram.svg'
      borderColor = 'border-Instagram-Gradient-2'
      break
    case 'youtube':
      iconPath = '/src/assets/icon-youtube.svg'
      borderColor = 'border-YouTube'
      break
    default:
      iconPath = ''
      borderColor = 'border-gray-400'
  }

  const positive = today >= 0
  const todayTextColor = positive ? 'text-Lime-Green' : 'text-Bright-Red'
  const todayIcon = positive ? '▲' : '▼' 

  return (
    <div
      className={`bg-lightGrayishBlueCard dark:bg-darkDesaturatedBlue 
        rounded-md overflow-hidden pt-1 border-t-4 ${borderColor} 
      hover:bg-gray-200 hover:dark:bg-darkBlueHover transition-colors duration-300`}
    >
      <div className="p-6 flex flex-col items-center">

        <div className="flex items-center space-x-2">
          <img src={iconPath} alt={`${network} icon`} className="w-5 h-5" />
          <p className="text-sm font-bold text-gray-500 dark:text-desaturatedBlue">{username}</p>
        </div>
        <h2 className="text-5xl font-bold mt-4">{followers}</h2>
        <p className="text-xs text-gray-400 tracking-[0.3em] uppercase">Followers</p>

        <div className={`flex items-center mt-4 ${todayTextColor}`}>
          <span className="mr-1">{todayIcon}</span>
          <span className="text-sm">{Math.abs(today)} Today</span>
        </div>
      </div>
    </div>
  )
}

export default Card