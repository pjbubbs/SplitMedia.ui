import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './css/iconfont.css'
import './css/slick/slick.css'
import './css/slick/slick-theme.css'
import './css/font-awesome.min.css'
import './css/jquery.fancybox.css'
import './css/bootstrap.css'
import './css/bootstrap.min.css'
import './css/magnific-popup.css'
import './css/plugins.css'
import './css/style.css'
import './css/responsive.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Split Media</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        This is the start of the Journey
      </p>
    </>
  )
}

export default App
