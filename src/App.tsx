import React, { FormEvent, useState } from "react";
import * as dotenv from "dotenv";

import './styles/pages/trelloboard.css'

dotenv.config()


const url = `https://api.trello.com/1/cards?key=${process.env.REACT_APP_TRELLO_KEY}&token=${process.env.REACT_APP_TRELLO_TOKEN}&idList=${process.env.REACT_APP_TRELLO_ID_LIST}`




function App() {
  const dt = Date.now()
  const initialValue = {
    name: "",
    email: "",
    desc: "",
    idLabels: "",
    due: date(dt).oneHour,
  }
  const [values, setValues] = useState(initialValue)
 

  function onChange(event: any) {
    const { name, value} = event.target
   
    setValues({ ...values, [name]: value })
    console.log(values)

  }

  function date(timestamp: any){
    const date = new Date(timestamp)

    const oneHour = date.setHours(date.getHours()  + 1)
    const threeHour = date.setHours(date.getHours()  + 2)
    const sixHour = date.setHours(date.getHours()  + 3)


    return {
      oneHour,
      threeHour,
      sixHour,
    }
  }

  const options = [
    { value: date(dt).oneHour},
    { value: date(dt).threeHour},
    { value: date(dt).sixHour}
  ]

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
   
    const jason = JSON.stringify(values)
    


    await fetch(url, {
      method: 'POST',
      body: jason,
      headers: {
        'Content-Type': 'application/json',

      }
    })
      .then(response => {
        console.log(
          `Response: ${response.status} ${response.statusText}`
        );
        return response.text();
      })
      .then(text => console.log(text))
      .catch(err => console.error(err));

      alert("Form Sended")

      window.location.reload();

  }

  return (
    <div>
      <main>
        <form onSubmit={handleSubmit}>
          <div className="container_1">
            <div className="item">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                required
                onChange={onChange}
                placeholder="Card name" />
            </div>
            <div className="item">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                required
                placeholder="Your email"
                onChange={onChange} />
            </div>
            <div className="item">
              <label htmlFor="desc"></label>
              <textarea
                name="desc"
                placeholder="Type Something..."
                onChange={onChange} />
            </div>
          </div>

          <div className="container_2">
            <div className="item checkbox">
              <label className="checkbox">
                <span className="checkbox__input">
                  <input type="radio" name="idLabels" onChange={onChange} value="605e18e3184d2c731b95b3ac" />
                  <span className="checkbox__control">
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                      <path fill='none' stroke='currentColor' stroke-width='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
                  </span>
                </span>
                <span className="radio__label">Green</span>
              </label>
              <label className="checkbox">
                <span className="checkbox__input">
                  <input type="radio" name="idLabels" onChange={onChange} value="605e18e3184d2c731b95b3b3" />
                  <span className="checkbox__control">
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                      <path fill='none' stroke='currentColor' stroke-width='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
                  </span>
                </span>
                <span className="radio__label">Red</span>
              </label>
              <label className="checkbox">
                <span className="checkbox__input">
                  <input type="radio" name="idLabels" onChange={onChange} value="605e18e3184d2c731b95b3b6" />
                  <span className="checkbox__control">
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                      <path fill='none' stroke='currentColor' stroke-width='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
                  </span>
                </span>
                <span className="radio__label">Blue</span>
              </label>
            </div>


            <div className="item">
              <label htmlFor="due"></label>
              <select className="due" name="due" onChange={onChange}>
                  <option value={options[0].value}>+1 Hour</option>
                  <option value={options[1].value}>+3 Hours</option>
                  <option value={options[2].value}>+6 Hours</option>
              </select>

            </div>
            <div className="item">
              <div className="tags">
              </div>
            </div>
            <button className="confirm-button" type="submit">Send</button>
          </div>
        </form>
      </main>
    </div>
  )
}

export default App