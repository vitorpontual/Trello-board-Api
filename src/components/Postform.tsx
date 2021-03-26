import React from "react";
import Select from "react-select";

import "../styles/pages/trelloboard.css"


export default function PostForm() {

  const options = [
    { value: "blue", label: "Blue" },
    { value: "red", label: "Red" },
    { value: "green", label: "Green" },
  ]

  return (
    <div>
      <main>
        <form>
          <div className="container_1">
            <div className="item">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" required />
            </div>
            <div className="item">
              <label htmlFor="email">E-mail</label>
              <input type="email" name="email" required />
            </div>
            <div className="item">
              <textarea name="text" placeholder="Type Something..." />
            </div>
          </div>
          <div className="container_2">
            <div className="item checkbox">
              <label className="checkbox">
                <span className="checkbox__input">
                  <input type="checkbox" name="checkbox" value="op1" />
                  <span className="checkbox__control">
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                      <path fill='none' stroke='currentColor' stroke-width='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
                  </span>
                </span>
                <span className="radio__label">Option 1</span>
              </label>
              <label className="checkbox">
                <span className="checkbox__input">
                  <input type="checkbox" name="checkbox" value="op2" />
                  <span className="checkbox__control">
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                      <path fill='none' stroke='currentColor' stroke-width='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
                  </span>
                </span>
                <span className="radio__label">Option 2</span>
              </label>
              <label className="checkbox">
                <span className="checkbox__input">
                  <input type="checkbox" name="checkbox" value="op3" />
                  <span className="checkbox__control">
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                      <path fill='none' stroke='currentColor' stroke-width='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
                  </span>
                </span>
                <span className="radio__label">Option 3</span>
              </label>
            </div>


            <div className="item">
              <Select options={options} className="dropdown" />
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