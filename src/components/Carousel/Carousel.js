import React, { Component } from 'react';
import styles from './Carousel.module.css';
import CarouselItem from './CarouselItem/CarouselItem';
import image1 from './imagesCarousel/ImagenEstudio1.jpg';
import image2 from './imagesCarousel/ImagenEstudio2.jpg';
import image3 from './imagesCarousel/ImagenEstudio3.jpg'

class Carousel extends Component {
    state = {
        items: [
            image1,
            image2,
            image3
        ],
        activeItem: 1,
        totalCounter: 1 //este counter sirve para hacer dos aniamciones diferentes dependiendo si es par o imar (cada vez que cambia un item hacemos counter++)
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            //console.log("PASAMOS POR SET INTERVAL");
            let counter = this.state.activeItem;
            let totalCounter = this.state.totalCounter;
            if (counter === this.state.items.length) {
                counter = 1;
            } else {
                counter++;
            }
            this.setState({ activeItem: counter , totalCounter: totalCounter+1});

        }, 9000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        //const itemCounter = Object.keys(this.state.items).length;
        //console.log("Cantidad de items= ",itemCounter);

        let items = this.state.items
            .map((key, index) => {
                //console.log("index= ",index);
                return (
                    <CarouselItem
                        key={index + 1}
                        id={index + 1}
                        image={this.state.items[index]}
                        active={this.state.activeItem === index + 1}
                        actualEffect={(this.state.totalCounter % 2) + 1} />
                )
            });



        return (
            <div className={styles.Carousel}>
                {items}
            </div>
        )
    }
}

export default Carousel;