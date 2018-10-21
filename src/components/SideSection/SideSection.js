import React from 'react';
import styles from './SideSection.module.css';

const SideSection = (props) =>{
    return(
        <div className={styles.SideSection}>
            {props.children}
        </div>)
}

export default SideSection;