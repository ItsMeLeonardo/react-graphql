export default function NotifyError({ message }) {
  console.log(message)
  return (
    <div>
      <p style={{ color: 'red' }}>{message}</p>
    </div>
  )
}
