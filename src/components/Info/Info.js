import React, { Fragment } from 'react';
import InfoTitle from './InfoTitle/InfoTitle';
import InfoBody from './InfoBody/InfoBody';
import styles from './Info.module.css';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import VisionMisionValores from './Content/VisionMisionValores/VisionMisionValores';
import ServiciosProfesionales from './Content/ServiciosProfesionales/ServiciosProfesionales';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './infoEffects.css'


const Info = (props) => {
    return (
        <div className={styles.Info}>
            <TransitionGroup>
                <CSSTransition
                    key={props.location.key}
                    timeout={1000}
                    classNames="fade">
                    
                    <Switch location={props.location}>
                        <Route path='/Bienvenidos' render={() => {
                            return (
                                <div>
                                    <InfoTitle>
                                        {'Bienvenidos'}
                                    </InfoTitle>
                                    <InfoBody>
                                        <p>
                                            Mediante esta página queremos que nos conozcan y puedan interiorizarse en los servicios profesionales que en forma integral y personalizada brindamos.
                                            <br /><br />
                                            Asesoramos a pequeñas y medianas empresas en temas impositivos, contables, de recursos humanos y en todo lo inherente a la constitución,  administración y gerenciamiento de las mismas.
                                            <br /><br />
                                            Tenemos una amplia trayectoria en el asesoramiento y auditoría de Cooperativas de todo tipo.
                                            <br /><br />
                                            La atención de los profesionales que formamos parte de Estudio Arias es personalizada, con respuestas inmediatas a sus consultas y sin burocracias que entorpezcan la relación.
                                        </p>
                                    </InfoBody>
                                </div>
                            )
                        }} />

                        <Route path='/VisionMisionValores' render={() => {
                            return (
                                <div>
                                    <InfoTitle>
                                        {'Vision, Mision y Valores'}
                                    </InfoTitle>
                                    <InfoBody>
                                        <p>
                                            Somos un Estudio de Profesionales, Contadores Públicos, con más de 20 años de trayectoria en el mercado, con una muy amplia experiencia en la atención de pequeñas y medianas empresas.
                                            <br /><br />
                                            Nuestro principal objetivo es construir relaciones de largo plazo con nuestros clientes, las que tratamos trasciendan a la atención profesional, para ello mantenemos una atención proactiva, brindando atención personalizada, la que consideramos fundamental en nuestro servicio, buscando la eficiencia en las soluciones aportadas.
                                        </p>
                                        <VisionMisionValores />
                                    </InfoBody>
                                </div>
                            )
                        }} />

                        <Route path='/ServiciosProfesionales' render={() => {
                            return (
                                <div>
                                    <InfoTitle>
                                        {'Servicios Profesionales'}
                                    </InfoTitle>
                                    <InfoBody>
                                        <ServiciosProfesionales/>
                                    </InfoBody>
                                </div>
                            )
                        }} />

                        <Route path='/Contacto' render={() => {
                            return (
                                <div>
                                    <InfoTitle>
                                        {'Contacto'}
                                    </InfoTitle>
                                    <InfoBody>
                                        {'Parrafo Contacto:'}
                                    </InfoBody>
                                </div>
                            )
                        }} />
                        <Redirect from='/' to='/Bienvenidos'></Redirect>

                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </div>
    )
}


export default withRouter(Info);