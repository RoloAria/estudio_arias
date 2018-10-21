import React from 'react';
import styles from './VisionMisionValores.module.css';

const VisionMisionValores = (props) => {
    return (
        <div className={styles.VisionMisionValores}>

            <div style={{margin: '0vw 3vw 0vw 0vw '}}>
                <h4>VISION: </h4>
                <p>ser reconocidos por la excelencia, atención personalizada  y calidad de los servicios. Brindar seguridad, soluciones y respuestas confiables a nuestros clientes. </p>
            </div>

            <div style={{margin: '0vw 3vw 0vw 0vw '}}>
                <h4>MISION: </h4>
                <p>
                    Brindar servicios de alto nivel profesional.
                    <br /><br />
                    Ofrecer soluciones concretas e integrales.
                    <br /><br />
                    Generar valor, acompañar a nuestros clientes en su crecimiento y desarrollo.
                    <br /><br />
                    Búsqueda permanente de la satisfacción de nuestros clientes.
                </p>
            </div>

            <div>
                <h4>VALORES: </h4>
                <p>
                    •	Compromiso
                    <br /><br />
                    •	Responsabilidad
                    <br /><br />
                    •	Profesionalismo
                    <br /><br />
                    •	Vocación de servicio
                    <br /><br />
                    •	Ética, honestidad, transparencia
                    <br /><br />
                    •	Confidencialidad
                </p>
            </div>

        </div>
    )
}

export default VisionMisionValores;