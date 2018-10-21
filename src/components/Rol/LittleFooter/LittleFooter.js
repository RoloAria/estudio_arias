import React from 'react';
import Logo from './Logo/Logo';
import styles from './LittleFooter.module.css';

const LittleFooter = (props) =>{
    return(
        <div className={styles.LittleFooter}>
            <p>Website developed by</p>
            <Logo></Logo>
        </div>
    )
    
}

export default LittleFooter;