import { useState } from 'react';

import { MenuItems } from "./MenuItems";
import { MenuDetail } from "./MenuDetail";
import { Button } from "../Button";

import Logo from '../../assets/logo-branco.svg';

import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom';
import { useOpenModal } from '../../hooks/useOpenModal';

import './styles.scss';


export function PageMenu() {

    const {handleOpenModal} = useOpenModal();
    const [clicked, setClicked] = useState(false);

    function handleClickMenu() {
        setClicked(!clicked);
    }

    return (
        <div className="header-menu-container">

            <div className="logo-container">
                <img src={Logo}></img>
            </div>


            <nav className="NavBarItems">

                <div className="menu-icon" onClick={handleClickMenu}>
                    <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                <div className="links-container">
                    <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                        {MenuItems.map((item, index) => {
                            return (
                                <Link key={index}
                                    activeClass="active"
                                    to={item.title}
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >
                                    <li key={index}>
                                        <NavLink to={item.url} className={item.cName} href={item.url}>
                                            {item.title}
                                        </NavLink>
                                    </li>
                                </Link>
                            )
                        })}

                        <div><Button text="CONTATO" link="/contato"/></div>

                    </ul>
                </div>

            </nav>

            <MenuDetail />


        </div>
    );

}