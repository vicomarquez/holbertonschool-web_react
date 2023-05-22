import React from 'react';
import './Notifications.css';
import close from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import propTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';



function Notifications({ displayDrawer, listNotifications }) {

    return (
        <>
            <div className="menuItem">
				<p>Your notifications</p>
            </div>
            { displayDrawer && 
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
                        {
                            listNotifications.length === 0 &&
                            (<NotificationItem value="No new notification for now"/>)
                        }
                        {
                            listNotifications && listNotifications.map((newNote) => (
                                <NotificationItem
                                    key={newNote.id}
                                    html={newNote.html}
                                    type={newNote.type}
                                    value={newNote.value}
                                />
                            ))
                        }
                    </ul>
                </div>
            }  
        </>
    )
}

Notifications.propTypes = {
	displayDrawer: propTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
	displayDrawer: false,
    listNotifications: []

};

export default Notifications;