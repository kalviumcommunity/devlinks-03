export default function Controls({ onNext, quote }) {
  function copyQuote() {
    if (quote?.text) {
      navigator.clipboard.writeText(quote.text)
    }
  }

  return (
    <div className="controls">
      <button className="btn btn-primary" onClick={onNext}>New quote</button>
      {/* BUG (issue #9): the copy button has no onClick handler wired, so it does nothing. */}
      <button className="btn btn-primary" id="copy-btn" onClick={copyQuote}>Copy</button>
    </div>
  )
}
