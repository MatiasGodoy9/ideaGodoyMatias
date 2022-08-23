import './styles.css';

const NavBar = () => {
    return (
        <div className='navbar-container'>
            <div>
                <p>La nueva Don Yoryo</p>
            </div>
            <div>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Pedidos</a>
                    </li>
                    <li>
                        <a href="#">Lugar</a>
                    </li>
                </ul>
            </div>
            <div>
                <button>Login</button>
            </div>
        </div>
    )
}

export default NavBar;