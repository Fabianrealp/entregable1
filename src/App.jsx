import './App.css'
import quotes from './db/quote.json'
import { useState } from 'react'
import { getRandon } from './utils/ramdom'
import QuoteBox from './componets/Quotebox'


const listPlanet=['planet1','planet2','planet3','planet4']
function App() {
  const [quote, setQuote] = useState(getRandon(quotes))
 const [currentPlanet, setCurrentPlanet] = useState(getRandon(listPlanet))

 const handleChangeQuote=()=>{
  setQuote(getRandon(quotes))
setCurrentPlanet(getRandon(listPlanet))
}

  return (
    <main className={`App ${currentPlanet}`}>
 <QuoteBox handleChangeQuote={handleChangeQuote} quote={quote} />
    </main>
  )
  }

export default App
