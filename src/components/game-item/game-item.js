import React from 'react'
import './game-item.css'
import { GameCover } from '../game-cover/game-cover'
import { GameBuy } from '../game-buy/game-buy'
import { GameGenre } from '../game-genre/game-genre'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import {setCurrentGame} from '../../store/games/reducer'
const GameItem = ({ game }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const handleClick = () =>{
      dispatch(setCurrentGame(game))
      navigate(`/app/${game.title}`)
  }
  return (
    <div className='game-item' >
        <GameCover img={game.image} onClick={handleClick}/>
      <div className="game-item__details" >
        <span className="game-item__title"onClick={handleClick}>{game.title}</span>
        <div className="game-item__genre" onClick={handleClick}>
          {game.genres.map((genre) => <GameGenre genre={genre} key={genre}/>)}
        </div>
      </div>
        <div className="game-item__buy">
          <GameBuy game={game}/>
        </div>
    </div>
  )
}
export default GameItem