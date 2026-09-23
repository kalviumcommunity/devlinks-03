export default function Controls({ onNext, quote }) {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(quote);
  };

  return (
    <div className="controls">
      <button
        className="btn btn-primary"
        onClick={onNext}
      >
        New quote
      </button>

      <button
        className="btn btn-primary"
        id="copy-btn"
        onClick={handleCopy}
      >
        Copy
      </button>
    </div>
  );
}