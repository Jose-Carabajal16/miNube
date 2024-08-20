import './navBar.css'
export function NavBar(){
    return (
        <div className="navBar">
            <p className='titulo'>AFRODITA</p>
            <nav>
                <ul className="navLinks">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Acerca de</a></li>
                </ul>
            </nav>
            <a href="" className="btn"><button>Contacto</button></a>

        </div>
    )
}