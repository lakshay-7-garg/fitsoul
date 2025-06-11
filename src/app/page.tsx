// import React from 'react'
import { SignOutButton, SignedIn } from '@clerk/nextjs';

const HomePage = () => {
  return (
    <div>
      HomePage
      <SignedIn >
        <SignOutButton />
      </SignedIn>
    </div>  
  )
}

export default HomePage