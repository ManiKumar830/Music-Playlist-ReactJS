import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const MovieItem = props => {
  const {MovieDetails, onClickDeleteItem} = props
  const {id, imageUrl, name, genre, duration} = MovieDetails

  const onClickButton = () => {
    onClickDeleteItem(id)
  }

  return (
    <li className="list-items">
      <div className="items-container">
        <img className="image" alt="track" src={imageUrl} />
        <div className="name-container">
          <p className="name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>

      <div className="delete-container">
        <p className="duration">{duration}</p>
        <button
          data-testid="delete"
          onClick={onClickButton}
          className="delete-button"
          type="button"
        >
          <AiOutlineDelete className="delete" />
        </button>
      </div>
    </li>
  )
}
export default MovieItem
