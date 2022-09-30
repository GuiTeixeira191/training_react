import React from 'react'
import { useState, useReducer, useRef } from 'react'
import styles from '../styles/Home.module.css'

const Home = () => {
  const [ person, setPerson] = useState("Who am I?")
  const [ check, setCheck] = useReducer( (check) => !check, false)

  const [ color, setColor] = useState("#000000")
  const [ title, setTitle] = useState("")
  const submit = (e) => {
    e.preventDefault()
    alert(` ${title}, ${color} `)
    setTitle ("")
    setColor ("#000000")
  }

  return (
    <>
    <div>
      <form onSubmit={submit}>
        <input value={title} onChange={(event) => setTitle(event.target.value)} type="text" placeholder="color" />
        <input value={color} onChange={(event) => setColor(event.target.value)} type="color" />
        <button type='submit'>Add Color</button>
      </form>
    </div>
    
    <div>
      <input type='checkbox' value={check} onChange={setCheck}></input>
      <label>{check ? "Checked" : "Not Checked"}</label>
    </div>

    <div>
      <h1 className={styles.h1}>{person} </h1>
    </div>

      <div className={styles.button_container}>
        <button className={styles.button} onClick={ () => setPerson("I'm Guilherme!")}>Person 1</button>
        <button className={styles.button} onClick={ () => setPerson("I'm João!")}>Person 2</button>
        <button className={styles.button} onClick={ () => setPerson("I'm Maria!")}>Person 3</button>
      </div>
    </>
  )
}

export default Home