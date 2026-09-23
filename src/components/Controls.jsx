export default function Controls({ onNext, quote }) {
  function handleCopy() {
    if (quote) {
      navigator.clipboard.writeText(`“${quote.text}” — ${quote.author}`)
    }
  }

  return (
    <div className="controls">
      <button className="btn btn-primary" onClick={onNext}>New quote</button>
      <button className="btn btn-primary" id="copy-btn" onClick={handleCopy}>Copy</button>
    </div>
  )
}
