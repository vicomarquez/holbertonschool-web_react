import React from 'react';
import './Notifications.css'

function NotificationItem({ type, html, value }) {
	if (value) {
		return (<li data-notification-type={type}>{value}</li>)
	} else {
		return (<li dangerouslySetInnerHTML={html} data-notification-type={type}></li>)
	}
}

export default NotificationItem;