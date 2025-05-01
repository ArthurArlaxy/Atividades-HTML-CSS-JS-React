import { useState } from 'react'
import { Title } from './components/Title'
import { Subtitle } from './components/Subtitle'
import { Status } from './components/Status'
import styles from "./App.module.css"


export function App() {
  return (
    <main className={styles.app}>
      <Title/>
      <Subtitle/>
      <Status/>
    </main>
  )
}

export default App
