import React from 'react'
import './game-cover.css'
export const GameCover = ({img = '', onClick}) => {
 
  return (
    <div className='game-cover' style={{backgroundImage:`url(${img})`}} onClick={onClick}/>
  )
}
