export default function Person({ fullName, age, phone }) {
  return (
    <li>
      <h1>{fullName}</h1>
      <div>{age} years old</div>
      {phone ? (
        <p>
          <span>contact</span>: {phone}{' '}
        </p>
      ) : (
        <span>is not available for contact</span>
      )}
    </li>
  )
}
