export default function Controls({ onNext, quote }) {
  function handleCopy() {
    if (!quote) return

    const textToCopy = `“${quote.text}” — ${quote.author}`

    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(textToCopy)
    }
  }

  return (
    <div className="controls">
      <button className="btn btn-primary" onClick={onNext}>New quote</button>
      <button className="btn btn-primary" id="copy-btn" onClick={handleCopy}>Copy</button>
    </div>
  )
}
