import React from 'react'
// import Navbar from './Navbar'
import Footer from './Footer'
import BusinessStartCard from './BusinessStartCard';
import StarsCanvas from './sub/StarBackGround';

const MainPage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <StarsCanvas />
      <main className="flex-grow">
        <BusinessStartCard />
      </main>
      <Footer />
    </div>
  )
}

export default MainPage
