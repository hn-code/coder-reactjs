import './Navbar.css'
import './Helpers/navbarOptions'
import { navbarOptions } from './Helpers/navbarOptions'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="brand">
                <img src="imgs/logo.png" alt="logo-HS"/>
            </div>
            <div>
                <ul className='navbarUl'>
                    <li>
                        {navbarOptions[0].category}
                    </li>
                    <li>
                        {navbarOptions[1].category}
                    </li>
                    <li>
                        {navbarOptions[2].category}
                    </li>
                    <li>
                        {navbarOptions[3].category}
                    </li> 
                </ul>
            </div>
                <CartWidget/>
            <div>
                <input type="search" placeholder='Que buscas?'>
                </input>
                <button type="submit"> Buscar
                </button>
            </div>
        </nav>
    )
}

export default Navbar