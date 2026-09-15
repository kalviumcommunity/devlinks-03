export default function Header() {
  return (
    <header>
      {/* BUG (issue #6): quote icon image is missing alt text */}
      <img className="mark" src="/quote.png" />
      {/* BUG (issue #1): "Quote" should be "Quote" */}
      <h1>Quote of the moment</h1>
    </header>
  )
}
