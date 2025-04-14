import React, { useState } from 'react'
import Header from './components/Header'
import Card from './components/Card'
import OverviewCard from './components/OverviewCard'

const topCardsData = [
  {
    id: 1,
    username: '@nathanf',
    network: 'facebook',
    followers: 1987,
    today: 12
  },
  {
    id: 2,
    username: '@nathanf',
    network: 'twitter',
    followers: 1044,
    today: 99
  },
  {
    id: 3,
    username: '@realnathanf',
    network: 'instagram',
    followers: '11k',
    today: 1099
  },
  {
    id: 4,
    username: 'Nathan F.',
    network: 'youtube',
    followers: 8239,
    today: -144
  }
]

const overviewData = [
  {
    id: 1,
    title: 'Page Views',
    network: 'facebook',
    count: 87,
    percentage: 3
  },
  {
    id: 2,
    title: 'Likes',
    network: 'facebook',
    count: 52,
    percentage: -2
  },
  {
    id: 3,
    title: 'Likes',
    network: 'instagram',
    count: 5462,
    percentage: 2257
  },
  {
    id: 4,
    title: 'Profile Views',
    network: 'instagram',
    count: '52k',
    percentage: 1375
  },
  {
    id: 5,
    title: 'Retweets',
    network: 'twitter',
    count: 117,
    percentage: 303
  },
  {
    id: 6,
    title: 'Likes',
    network: 'twitter',
    count: 507,
    percentage: 553
  },
  {
    id: 7,
    title: 'Likes',
    network: 'youtube',
    count: 107,
    percentage: -19
  },
  {
    id: 8,
    title: 'Total Views',
    network: 'youtube',
    count: 1407,
    percentage: -12
  }
]

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const handleToggle = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <div className="font-inter min-h-screen bg-white dark:bg-darkBlueBackground text-darkBlueBackground dark:text-white transition-colors duration-300">

    <Header darkMode={darkMode} onToggleDarkMode={handleToggle} />

    <section className="max-w-6xl mx-auto px-4 pt-8">

      <div className="grid gap-6 md:grid-cols-4 mb-8">
        {topCardsData.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>

      <h2 className="text-xl text-gray-600 dark:text-gray-200 font-bold mb-4">Overview - Today</h2>
      <div className="grid gap-6 md:grid-cols-4">
        {overviewData.map((item) => (
          <OverviewCard key={item.id} data={item} />
        ))}
      </div>
    </section>
  </div>
  )

}

export default App
