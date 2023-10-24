import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar'
import Welcome from './components/Welcome'
import AllTheBooks from './components/AllTheBooks'
import Footer from './components/MyFooter'

function App() {
  return (
    <div>
      <MyNavbar />
      <Welcome welcomeMessage="Ciao, benvenuto nel mio shop" />
      <AllTheBooks />
      <Footer />
    </div>
  )
}

export default App
