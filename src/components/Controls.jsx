import { useState } from 'react'

export default function Controls({ onNext, quote }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    if (!quote) return

    let textToCopy = ''
    if (typeof quote === 'string') {
      textToCopy = quote
    } else if (quote.text && quote.author) {
      textToCopy = `"${quote.text}" — ${quote.author}`
    } else if (quote.text) {
      textToCopy = quote.text
    }

    if (!textToCopy) return

    let success = false

    if (navigator?.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(textToCopy)
        success = true
      } catch {
        // Fallback to execCommand if writeText fails (e.g. permission/focus)
      }
    }

    if (!success) {
      try {
        const textArea = document.createElement('textarea')
        textArea.value = textToCopy
        textArea.style.position = 'fixed'
        textArea.style.left = '-9999px'
        textArea.style.top = '-9999px'
        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()
        success = document.execCommand('copy')
        document.body.removeChild(textArea)
      } catch (err) {
        console.error('Failed to copy to clipboard:', err)
      }
    }

    if (success) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="controls">
      <button className="btn btn-primary" onClick={onNext}>New quote</button>
      <button className="btn btn-primary" id="copy-btn" onClick={handleCopy}>
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  )
}


