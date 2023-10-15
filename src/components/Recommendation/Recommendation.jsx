// npm modules
import { useState } from "react"

const Recommendation = (props) => {

  const [rec, setRec] = useState({
    name: '',
    activity: '',
    time: '30 min',
    rating: 5,
    text: ''
  })

  const handleChange = (e) => {
    setRec({...rec, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddRec(rec)
    setRec({name: '',
    activity: '',
    time: '30 min',
    rating: 5,
    text: ''})
  }

  return (  
    <>
      <h1>Add a Recommended Activtiy Here</h1>
      <main>
      <form onSubmit={handleSubmit}>
      <label htmlFor="name-input">Name:</label>
        <input
          required
          type="text"
          name="name"
          id="name-input"
          value={rec.name}
          placeholder="Name"
          onChange={handleChange}
        />
        <label htmlFor="activityName-input">Activity:</label>
        <select
          required
          name="activity"
          id="activityName-input"
          value={rec.activity}
          onChange={handleChange}
        >
          <option value="Hiking">Hiking</option>
          <option value="Star Gazing">Star Gazing</option>
          <option value="Cycling & Mountain Biking">Cycling & Mountain Biking</option>
          <option value="Whitewater Rafting">Whitewater Rafting</option>
          <option value="Camping">Camping</option>
          <option value="Restaurant">Restaurant</option>
          <option value="Museum">Museum</option>
          <option value="Nightlife">Nightlife</option>
          <option value="Shopping">Shopping</option>
          <option value="Art and Music">Art and Music</option>
          <option value="Family-Friendly">Family-Friendly</option>
          <option value="Scenic Views">Scenic Views</option>
        </select>
        <label htmlFor="time-input">How Long:</label>
        <select
          required
          name="time"
          id="time-input"
          value={rec.time}
          onChange={handleChange}
        >
          <option value="30 min">30 min</option>
          <option value="1 hour">1 hour</option>
          <option value="Several Hours">Several Hours</option>
          <option value="All Day">All Day</option>
          <option value="Weekend Trip">Weekend Trip</option>
        </select>
        <label htmlFor="rating-input">Rating:</label>
        <select
          required
          type="number"
          name="rating"
          id="rating-input"
          value={rec.rating}
          min="1"
          max="5"
          step="1"
          onChange={handleChange}
        >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        </select>
        <label htmlFor="text-input">Tell us about it:</label>
        <textarea
          required
          name="text"
          id="text-input"
          value={rec.text}
          placeholder="I loved this activity because ..."
          onChange={handleChange}
          rows={4}
          cols={30}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
    </>
  )
}

export default Recommendation