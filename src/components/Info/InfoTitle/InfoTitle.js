import React from 'react';
import styles from './InfoTitle.module.css'

const InfoTitle = (props) => {
    return (
        <div className={styles.InfoTitle}>
            <h1 className={styles.golden_text_img}>{props.children}</h1>
        </div>
    )
}

export default InfoTitle;