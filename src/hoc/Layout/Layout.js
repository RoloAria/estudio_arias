import React, { Component } from 'react';
import styles from './Layout.module.css';
import SideNavBar from '../../components/Navigation/SideNavBar/SideNavBar';
import ButtonDrawer from '../../components/UI/ButtonDrawer/ButtonDrawer';
import Backdrop from '../../components/UI/Backdrop/Backdrop';


class Layout extends Component {
    state = {
        showSideNavBar: false
    }

    buttonDrawerHandler = () =>{
        console.log("clickee")
        let slide = !this.state.showSideNavBar;
        this.setState({showSideNavBar: slide})
    }

    render() {
        return (
            <div className={styles.Layout}>
                <ButtonDrawer
                    flip={this.state.showSideNavBar}
                    clicked={this.buttonDrawerHandler}/>
                <Backdrop
                    show={this.state.showSideNavBar}
                    clicked={this.buttonDrawerHandler}/>
                <SideNavBar
                    show={this.state.showSideNavBar}
                    itemClicked={this.buttonDrawerHandler}/>
                <main className={styles.Main}>
                    {this.props.children}
                </main>
            </div>

        );
    }
}



export default Layout;