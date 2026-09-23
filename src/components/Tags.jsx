export default function Tags({ tags }) {
  return (
    <div className="tags">
      {tags && tags.map((t, idx) => (
        <span key={`${t}-${idx}`} className="tag">#{t}</span>
      ))}
    </div>
  )
}
