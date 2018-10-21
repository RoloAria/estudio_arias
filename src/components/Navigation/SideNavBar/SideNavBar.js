import React from 'react';
import styles from './SideNavBar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import LittleFooter from '../../Rol/LittleFooter/LittleFooter';

const SideNavBar = (props) => {

    let show = props.show ? styles.slide : null;
    return (
        <header className={styles.SideNavBar + ' ' + show}>
            <h1>LOGO</h1>
            <nav>
                <NavigationItems
                    itemClicked={props.itemClicked}/>
            </nav>
            <LittleFooter/>
        </header>
    )
}

export default SideNavBar;