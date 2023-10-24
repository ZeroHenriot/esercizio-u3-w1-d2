import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar'
import Welcome from './components/Welcome'
import AllTheBooks from './components/AllTheBooks'

function App() {
  return (
    <div>
      <Welcome welcomeMessage="Ciao, benvenuto nel mio shop" />
      <MyNavbar />
      <AllTheBooks />
    </div>
  )
}

export default App
