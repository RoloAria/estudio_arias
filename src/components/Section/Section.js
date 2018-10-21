import React from 'react';
import Info from '../Info/Info';
import styles from './Section.module.css';
import { Route } from 'react-router-dom';
import SideSection from '../SideSection/SideSection';
import { Timeline } from 'react-twitter-widgets';
import InfoTitle from '../Info/InfoTitle/InfoTitle';

const Section = (props) => {
    return (
        <div className={styles.Section}>
            <Route path='/' component={Info} />
            <SideSection>
                <Timeline
                    dataSource={{
                        sourceType: 'profile',
                        screenName: 'AFIPComunica'
                    }}
                    options={{
                        username: 'AFIPComunica',
                        height: '600'
                    }}
                    onLoad={() => console.log('Timeline is loaded')}
                />
            </SideSection>
        </div>
    )
}

export default Section;