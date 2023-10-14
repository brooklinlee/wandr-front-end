// css
import styles from './RecCard.module.css'

const RecCard = ({ recommendation, author, user, handleDeleteRec}) => {
// if (!recommendation) return <h4>Write a recommendation!</h4>

  return ( 
    <article>
    <header>
      {/* author */}
    </header>
      <h4>{recommendation.name}</h4>
      <p>{recommendation.activity}</p>
      <p>{recommendation.time}</p>
      <p>{recommendation.rating}</p>
      {author === user.profile._id &&  <button onClick={() => handleDeleteRec(recommendation._id)}>Delete</button>}
    </article>
  )
}

export default RecCard