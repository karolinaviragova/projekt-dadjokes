import "./Joke.css"
import { useState } from "react";

export const Joke = ({userAvatar, userName, text, likes, dislikes}) => {
  const [upLikes, setUpLikes] = useState(likes);
  const [downLikes, setDownLikes] = useState(dislikes)

  const handleClickLikesUp = () => {
    setUpLikes(upLikes + 1)
  }

  const handleClickLikesDown = () => {
    setDownLikes(downLikes + 1)
  }

  return(
    <div className="container">
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img className="user-avatar" src={userAvatar} />
            <p className="user-name">{userName}</p>
          </div>

          <p className="joke__text">{text}</p>
        </div>
        <div className="joke__likes">
          <button onClick={handleClickLikesUp} id="btn-up" className="btn-like btn-like--up"></button>
          <span id="likes-up" className="likes-count likes-count--up">{upLikes}</span>
          <button onClick={handleClickLikesDown} id="btn-down" className="btn-like btn-like--down"></button>
          <span id="likes-down" className="likes-count likes-count--down">{downLikes}</span>
        </div>
      </div>
    </div>
  )
}
