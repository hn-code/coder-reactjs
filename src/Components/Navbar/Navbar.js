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

    const { cartOff } = useContext(CartContext);

    return (
        <nav className='navbar'>
            <div className="brand">
                <Link to="/" ><img src="/imgs/logo.png" alt="logo-HS"/></Link>
            </div>
            <div>
                <ul className='navbarUl'>
                    {nbOpts}
                </ul>
            </div>
            {
                cartOff
                ?   <div className='navbar__cartWidget'>
                    <div><CartWidget/></div>
                    </div>
                :   <div className='navbar__cartWidget'>
                    <Link to="/cart"><CartWidget/></Link>
                    </div>
                
            }
            

        </nav>
    )
}

export default Navbar