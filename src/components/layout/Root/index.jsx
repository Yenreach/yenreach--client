import React from 'react'
import Header from '/src/components/Header'
import BottomNav from '/src/components/BottomNav'
import { useParams } from 'react-router-dom'


const index = ({ children }) => {
  const { id } = useParams()
  // console.log("dashboard business id", id)
  return (
      <>
        <Header />
        {children}
        <BottomNav />
      </>
  )
}

export default index