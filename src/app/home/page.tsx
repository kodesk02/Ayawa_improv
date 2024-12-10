import{ Navigation } from '@/components/nav/Navigation'
import React from 'react'
import AboutPage from '../about/aboutpage'

const HomePage = () => {
  return (
    <div>
      <Navigation />
      <AboutPage/>
    </div>
  )
}

export default HomePage