function FeedbackCard({ title, items, type }) {
  return (
    <div className="card">
      <h2 className={type === "strength" ? "greenTitle" : "orangeTitle"}>
        {title}
      </h2>

      <ul className="list">
        {items?.length ? (
          items.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <li>No feedback available yet.</li>
        )}
      </ul>
    </div>
  );
}

export default FeedbackCard;