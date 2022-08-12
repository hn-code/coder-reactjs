import './Navbar.css'
import './Helpers/navbarOptions'
import { navbarOptions } from './Helpers/navbarOptions'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

const Navbar = () => {

    const nbOpts = navbarOptions.map((navbarOption) => {
        return (
            <Link to={`/category/${navbarOption.id}`} key={navbarOption.id}>{navbarOption.category}</Link>
        )
    });

    const {cartOff} = useContext(CartContext);

    const cartWidgetStyle = cartOff() ? 'navbar__cartWidget cartWidgetDisabled' : 'navbar__cartWidget';

    return (
        <nav className='navbar'>
            <div className="brand">
                <Link to="/" ><img src="./imgs/logo.png" alt="logo-HS"/></Link>
            </div>
            <div>
                <ul className='navbarUl'>
                    {nbOpts}
                </ul>
            </div>
            <div className={cartWidgetStyle}>
                <Link to="/cart"><CartWidget/></Link>
            </div>
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