import React from 'react';
import styles from './InfoBody.module.css';

const InfoBody = (props) =>{
    return(<div className={styles.InfoBody}>{props.children}</div>)
}

export default InfoBody;