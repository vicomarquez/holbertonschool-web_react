import React from 'react';
import './Notifications.css';
import close from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';


function Notifications() {
    return (
        <>
        <div className='Notifications'>
        <button style={{
                float: 'right',
                position:'absolute',
                top:'14px',
                right:'10px',
                border: 'none'}}
                aria-label='close'
                onClick={() => console.log('Close button has been clicked')}>
                <img src={close} alt='close-icon' style={{width: '10px'}}/>
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <NotificationItem type="default" value={'New course available'} />
                <NotificationItem type="urgent" value= {'New resume available'} />
                <NotificationItem type="urgent" html= {{ __html: getLatestNotification() }} />
            </ul>
        </div>
        </>
    )
}

export default Notifications;