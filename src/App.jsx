import React from 'react'
import Login from './Login/Login'
import Main from './Main/Main'
function App() {
  const [a, b] = React.useState(false)
  console.log(a);
  return (
    <div>

      <Main />
      {/* {
        a == false ? <Login item={b} /> : <Main />
      } */}
    </div>
  )
}

export default App