import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from"./components/card.jsx";
import Header from "./components/header.jsx";
import yutaImg from './assets/Yuta.jpg'
import itachiImg from './assets/itachi.jpg'
import usuiImg from './assets/usui.jpg'

function App(){
  return (
    <div className="container">
      <Header />
      <main className="cards-grid">
        <Card name="Yuuta Okkotsu" role="Front-end Developer" bio="No rispek no life" avatar={yutaImg}/>
        <br></br>
        <Card name="Itachi Uchiha" role="Back-end Developer" bio="Ikan sepat ikan tongkol, gudnait oll" avatar={itachiImg}/>
        <br></br>
        <Card name="Usui Takumi" role="Fullstack Developer" bio="Diajarin tengil sama yang paling tengil" avatar={usuiImg}/>
      </main>
    </div>
  )
}

export default App
