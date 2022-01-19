import { useState } from "react";

function App() {

  const [formData, setFormData] = useState(
    {
      firstName: "",
      lastName: "",
      email: "",
      comments: "",
      isFriendly: false,
      employment: "",
      favColor: ""
    }
  )

  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    // submitToApi(formData)
    console.log(formData)
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          name="firstName"
          value={formData.firstName}
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          name="lastName"
          value={formData.lastName}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          value={formData.email}
        />
        <textarea
          value={formData.comments}
          placeholder="Comments"
          onChange={handleChange}
          name="comments"
        />
        <div className="checkbox">
          <input
            type="checkbox"
            id="isFriendly"
            checked={formData.isFriendly}
            onChange={handleChange}
            name="isFriendly"
          />
          <label htmlFor="isFriendly">Are you friendly?</label>
        </div>

        <fieldset>
          <legend>Current employment status</legend>
          <div className="radio--button">
            <input
              type="radio"
              id="unemployment"
              name="employment"
              value="unemployment"
              checked={formData.employment === "unemployment"}
              onChange={handleChange}
            />
            <label htmlFor="unemployment">Unemployment</label>
          </div>

          <div className="radio--button">
            <input
              type="radio"
              id="part-time"
              name="employment"
              value="part-time"
              checked={formData.employment === "part-time"}
              onChange={handleChange}
            />
            <label htmlFor="part-time">Part-time</label>
          </div>

          <div className="radio--button">
            <input
              type="radio"
              id="full-time"
              name="employment"
              value="full-time"
              checked={formData.employment === "full-time"}
              onChange={handleChange}
            />
            <label htmlFor="full-time">Full-time</label>
          </div>
        </fieldset>
        <br />

        <label>What is your favorite color?</label>
        <br />
        <select id="favColor" value={formData.favColor} onChange={handleChange} name="favColor">
          <option value="">--Choose--</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="yellow">Yellow</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
        </select>
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
