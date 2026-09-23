export default function Tags({ tags }) {
  return (
    <div className="tags">
      {tags.map((t) => (
        // BUG (issue #5): missing "key" prop on the mapped tag.
      <span className="tag" key={t}>#{t}</span>
      ))}
    </div>
  )
}
