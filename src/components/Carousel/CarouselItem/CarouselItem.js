import React from 'react';
import styles from './CarouselItem.module.css';

const CarouselItem = (props) =>{

    let active = null;

    //si el item es el active
    if(props.active){
        //Si elefecto actual es el 1
        if(props.actualEffect === 1){
            active = styles.Item_active_1;
        }else{
            //si el efecto actual es el 2
            if(props.actualEffect === 2){
                active = styles.Item_active_2;
            }
        }
    }else{//si no es el item activo
        active = styles.Item_inactive;
    }

    return (
        <div className={styles.CarouselItem+' '+  active} style={{backgroundImage: `url(${props.image})`}}>
        </div>
    )

}

export default CarouselItem;