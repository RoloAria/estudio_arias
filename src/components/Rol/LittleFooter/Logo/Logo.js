import React from 'react';
import styles from './Logo.module.css';
import logo from '../../img/LogoMini.png';

const Logo = (props) =>{
    return(
        <div className={styles.Logo}>
            <img src={logo} alt='logo Rol'/>
        </div>
    )
}

export default Logo;