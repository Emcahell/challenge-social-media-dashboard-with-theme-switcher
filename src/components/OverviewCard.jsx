import React from 'react'
import facebookIcon from '/src/assets/icon-facebook.svg';
import twitterIcon from '/src/assets/icon-twitter.svg';
import instagramIcon from '/src/assets/icon-instagram.svg';
import youtubeIcon from '/src/assets/icon-youtube.svg';

function OverviewCard({ data }) {
  const { title, network, count, percentage } = data

  let iconPath = ''
  switch (network) {
    case 'facebook':
      iconPath = facebookIcon
      break
    case 'twitter':
      iconPath = twitterIcon
      break
    case 'instagram':
      iconPath = instagramIcon
      break
    case 'youtube':
      iconPath = youtubeIcon
      break
    default:
      iconPath = ''
  }

  const isPositive = percentage >= 0
  const percentageColor = isPositive ? 'text-Lime-Green' : 'text-Bright-Red'
  const percentageIcon = isPositive ? '▲' : '▼'

  return (
    <div
      className="font-bold bg-lightGrayishBlueCard dark:bg-darkDesaturatedBlue rounded-md p-4 hover:bg-gray-200 hover:dark:bg-darkBlueHover transition-colors duration-300"
    >
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm text-gray-500 dark:text-desaturatedBlue">{title}</p>
        <img src={iconPath} alt={`${network} icon`} className="w-5 h-5" />
      </div>
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold">{count}</h3>
        <div className={`flex items-center ${percentageColor}`}>
          <span className="mr-1">{percentageIcon}</span>
          <span className="text-sm">{Math.abs(percentage)}%</span>
        </div>
      </div>
    </div>
  )
}

export default OverviewCard