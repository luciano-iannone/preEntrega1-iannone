import './App.css'
import Navbar from './components/navbar/navbar'
import ItemListContainer from './components/itemListContainer/itemListContainer'

function App () {
  const greeting ='Welcome USPS user'

  return (
    <>
      <Navbar></Navbar>
      <ItemListContainer greeting={greeting} />
    </>
  )
}

export default App
