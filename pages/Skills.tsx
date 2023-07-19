'use client'

import { Player,} from '@lottiefiles/react-lottie-player'
import React from 'react'
import Skillcard from '@/components/Skillcard'

type Props = {}

export default function Skills({ }: Props) {
  return (
    <div className='h-screen snap-center bg-gradient-radial from-[rgb(54,54,54)] from-5% to-[rgb(36,36,36)] to-70%'>
      {/* Lottie animation */}
      <div className='h-full flex flex-col items-center justify-center'>     
        <Player
          autoplay
          loop
          src="developer_lottie.json"
          style={{ height: "300px", width: "300px" }} 
        ></Player>
        <Skillcard />
      </div>
    </div>
  )
}