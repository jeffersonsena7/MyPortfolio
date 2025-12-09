
import './HeaderStyle.css'
import { MenuButton } from '../menuButton/MenuButton';



export const Header = () => {


  return (
    <div className="container">
      <div className='container-title'>
        <h1>Jefferson Sena</h1>
      </div>
      <div className='container-button'>
        <MenuButton/>
      </div>   
      
    </div>
    
  )
}