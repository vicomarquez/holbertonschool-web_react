import React from 'react';
import './Notifications.css';
import propTypes from 'prop-types';

function NotificationItem({ type, html, value }) {
	if (value) {
		return (<li data-notification-type={type}>{value}</li>)
	} else {
		return (<li dangerouslySetInnerHTML={html} data-notification-type={type}></li>)
	}
}

NotificationItem.propTypes = {
	type: propTypes.string,
	value: propTypes.string,
	html: propTypes.shape({
		__html: propTypes.string
	})
};

NotificationItem.defaultProps = {
	type: 'default',
	value: '',
	html: {}
};

export default NotificationItem;