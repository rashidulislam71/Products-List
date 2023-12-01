import { useState } from 'react'
import ProductsList from '../ProductsList/ProductsList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <ProductsList />
      </div>
    </>
  )
}

export default App
