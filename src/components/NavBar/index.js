import './styles.css';
import MenuIcon from '../../assets/icons/menu-icon.png';
import { useState } from 'react';

export default function NavBar() {
    const [sidebar, setSidebar] = useState(false);

    const handleSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <div className='nav-icon'>
                <img src={MenuIcon} alt='menu icon' onClick={handleSidebar} />
            </div>

            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <span onClick={handleSidebar}>x</span>
                <ul className='nav-menu-items' onClick={handleSidebar}>

                    <li>
                        <a href='#main'>Home</a>
                    </li>
                    <li>
                        <a href='#about-us' >About Us</a>
                    </li>
                    <li>
                        <a href='#projects' >Projects</a>
                    </li>
                    <li>
                        <a href='#contacts' >Contacts</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}