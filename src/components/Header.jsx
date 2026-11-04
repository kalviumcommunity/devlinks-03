export default function Header() {
  return (
    <header>
      {/* BUG (issue #6): quote icon image is missing alt text */}
      <img className="mark" src="/quote.png" alt="Quote icon" />
      {/* BUG (issue #1): "Qoute" should be "Quote" */}
      <h1>Qoute of the moment</h1>
    </header>
  )
}
