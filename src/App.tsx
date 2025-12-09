
import './App.css'
import { Header } from './components/header/Header'
import { AboutMe } from './pages/aboutMe/AboutMe'
import { Contact} from './pages/contact/Contact'
import { Home } from './pages/home/Home'
import { Project } from './pages/project/Project'

function App() {

  return (
    <div className="App">
      <div className='container-App'>
        <Header /> 
        <Home /> 
        <AboutMe />
        <Project /> 
        <Contact/>
      </div>
      
    </div>
  )
}

export default App
