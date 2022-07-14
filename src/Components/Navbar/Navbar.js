import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div>
                HardSoft
            </div>
            <div>
                <ul className='navbarUl'>
                    <li>
                        Componentes
                    </li>
                    <li>
                        Equipos Armados
                    </li>
                    <li>
                        Laptops
                    </li>
                    <li>
                        Componentes
                    </li>
                </ul>
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