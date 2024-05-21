import Footer from "./components/Footer.jsx"
import Navbar from "./components/Navbar.jsx"
import Card from "./components/Card.jsx"
function App() {

  return (
    <>
      <Navbar />
      <Footer />
      <div className="content">

        <Card p="THE MYSTERIOUS PLACES" />
        <Card p="THE MYSTERIOUS PLACES" />
        <Card p="THE MYSTERIOUS PLACES" />
      </div>
    </>
  )
}

export default App
