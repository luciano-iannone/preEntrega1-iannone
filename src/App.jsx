import './App.css'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import Navbar from './components/navbar/navbar'

function App () {
  const greeting = "Welcome USPS user"
  return (
    <>
      <Navbar></Navbar>
      <ItemListContainer greeting={greeting}></ItemListContainer>
    </>
  )
}

export default App
