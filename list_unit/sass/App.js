import Button from "./components/Button"

function App() {
  console.log("abc");
  return (
    <div style={{ padding: '32px' }}>
      <Button/>
      <Button primary/>
      <Button primary disable/>
    </div>
  )
}

export default App