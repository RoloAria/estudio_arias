import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import navArrow from '../../../../img/nav_arrow.png';
import styles from './NavItem.module.css';

class NavItem extends Component {
    state = {
        opacity: 1
    }

    mouseEnterHandler = () => {
        console.log("Entro el mouse wacho!!");
        this.setState({ opacity: 1 });
    }
    mouseLeaveHandler = () => {
        console.log("Salio el mouse wacho!!");
        if (!this.props.active && this.props.mouseEnteredList) {
            this.setState({ opacity: 0.6 });
        }
    }

    render() {
        let arrowStyle = styles.ArrowInactive;
        let itemStyle = styles.NavItemInactive;

        if (this.props.active) {
            itemStyle = styles.NavItemActive;
            arrowStyle = styles.ArrowActive;
        }
        let entered =styles.enteredItemActive;
        if (this.props.mouseEnteredList) {
            if (this.props.active) {
                entered = styles.enteredItemActive
            } else {
                entered = styles.enteredItemInactive
            }
        } else {
            
        }

        return (
            <div
                onMouseEnter={this.mouseEnterHandler}
                onMouseLeave={this.mouseLeaveHandler}
                className={ ' ' }
            >
                <li className={styles.NavItem + ' ' + itemStyle+ ' '+ entered}>
                    <div className={styles.Arrow + ' ' + arrowStyle}>
                        <img src={navArrow} alt='navarrow' />
                    </div>
                    <NavLink
                        onClick={this.props.click}
                        to={this.props.to}
                        exact>
                        {this.props.children}
                    </NavLink>
                </li>
            </div>

        )
    }
}

export default NavItem;