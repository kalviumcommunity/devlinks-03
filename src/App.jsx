import { useState } from 'react'
import Header from './components/Header.jsx'
import Quote from './components/Quote.jsx'
import Controls from './components/Controls.jsx'
import Tags from './components/Tags.jsx'
import Footer from './components/Footer.jsx'

const QUOTES = [
  { text: 'Programs must be written for people to read.', author: 'Harold Abelson', tags: ['code', 'clarity'] },
  { text: 'Simplicity is the soul of efficiency.', author: 'Austin Freeman', tags: ['design', 'focus'] },
  { text: 'First, solve the problem. Then, write the code.', author: 'John Johnson', tags: ['process'] },
  { text: 'Talk is cheap. Show me the code.', author: 'Linus Torvalds', tags: ['code'] },
]

export default function App() {
  const [index, setIndex] = useState(0)

  function next() {
    if (!QUOTES || QUOTES.length === 0) return
    if (QUOTES.length === 1) return
    let nextIndex
    do {
      nextIndex = Math.floor(Math.random() * QUOTES.length)
    } while (nextIndex === index)
    setIndex(nextIndex)
  }

  const current = QUOTES && QUOTES.length > 0 ? QUOTES[index] : null

  if (!current) {
    return (
      <main className="card">
        <Header />
        <p>No quotes available.</p>
        <Footer />
      </main>
    )
  }

  return (
    <main className="card">
      <Header />
      <Quote text={current.text} author={current.author} />
      <Tags tags={current.tags} />
      <Controls onNext={next} quote={current} />
      <Footer />
    </main>
  )
}
