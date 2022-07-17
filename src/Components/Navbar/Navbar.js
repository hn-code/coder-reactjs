import './Navbar.css'
import './Helpers/navbarOptions'
import { navbarOptions } from './Helpers/navbarOptions'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {

    const nbOpts = navbarOptions.map((navbarOption) => {
        return (
            <li key={navbarOption.id}>{navbarOption.category}</li>
        )
    });

    return (
        <nav className='navbar'>
            <div className="brand">
                <img src="imgs/logo.png" alt="logo-HS"/>
            </div>
            <div>
                <ul className='navbarUl'>
                    {nbOpts}
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