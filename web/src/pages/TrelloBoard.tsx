import React, { FormEvent, useState } from "react";
import { useHistory } from "react-router";
import Select from "react-select";
import api from "../service/api";

import '../styles/pages/trelloboard.css'

export default function TrelloBoard() {

  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [color, setColor] = useState('');
  const [text, setText] = useState('');
  const [dropdown, setDropdown] = useState('');


  const options = [
    { value: "blue", label: "Blue" },
    { value: "red", label: "Red" },
    { value: "green", label: "Green" },
  ]

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = new FormData()

    data.append('name', name);
    data.append('email', email);
    data.append('color', color);
    data.append('text', text);
    data.append('dropdown', dropdown);

    await api.post(`https://api.trello.com/1/boards/${process.env.REACT_APP_TRELLO_ID}/labels?key=${process.env.REACT_APP_TRELLO_KEY}&token=${process.env.REACT_APP_TRELLO_TOKEN}&name=${name}&color=${color}`, data)

    history.push('/')

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
                id="name"
                required
                value={name}
                onChange={event => setName(event.target.value)} />
            </div>
            <div className="item">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={event => setEmail(event.target.value)} />
            </div>
            <div className="item">
              <textarea
                name="text"
                placeholder="Type Something..."
                value={text}
                onChange={event => setText(event.target.value)} />
            </div>
          </div>
          <div className="container_2">
            <div className="item checkbox">
              <label className="checkbox">
                <span className="checkbox__input">
                  <input type="checkbox" id="color" value="azul" />
                  <span className="checkbox__control">
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                      <path fill='none' stroke='currentColor' stroke-width='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
                  </span>
                </span>
                <span className="radio__label">Option 1</span>
              </label>
              <label className="checkbox">
                <span className="checkbox__input">
                  <input type="checkbox" id="color" value="red" />
                  <span className="checkbox__control">
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                      <path fill='none' stroke='currentColor' stroke-width='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
                  </span>
                </span>
                <span className="radio__label">Option 2</span>
              </label>
              <label className="checkbox">
                <span className="checkbox__input">
                  <input type="checkbox" id="color" value="green" />
                  <span className="checkbox__control">
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                      <path fill='none' stroke='currentColor' stroke-width='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
                  </span>
                </span>
                <span className="radio__label">Option 3</span>
              </label>
            </div>


            <div className="item">
              <Select options={options} id="dropdown" />
            </div>
            <div className="item">
              <div className="tags"></div>
            </div>
            <button className="confirm-button" type="submit">Send</button>
          </div>
        </form>
      </main>
    </div>
  )
}