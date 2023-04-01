import React from 'react'

interface Props {
  title: string;
  date: string;
}

const FeedItem: React.FC<Props> = ({title, date}) => {
  return (
    <div className='hover:bg-gray-100 p-1 rounded-sm hover:scale-105 duration-200 transition-transform'>
        <h2 className='text-2xl'>{title}</h2>
        <p className='text-sm text-gray-600'>{date}</p>
        <p>This is going to be the intro random text. How long will it go? Whos to know but me well here we go yea lets go</p>
    </div>
  )
}

export default FeedItem