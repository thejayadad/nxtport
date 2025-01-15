import { CollaborativeApp } from '@/components/frontend/collaborativeapp'
import Editor from '@/components/frontend/editor'
import { Room } from '@/components/frontend/room'
import React from 'react'

const RoomPage = () => {
  return (
   <div className='mt-24'>
     <Room>
     <CollaborativeApp />
        <Editor />
    </Room>
   </div>
  )
}

export default RoomPage