import React from 'react';
import './CourseList.css';
import propTypes from 'prop-types';

function CourseListRow({ isHeader=false, textFirstCell="", textSecondCell=null }) {

    if (isHeader === true) {
        if (textSecondCell === null) {
            return <tr><th colSpan="2">{textFirstCell}</th></tr>;
		} else {
			return <tr><th>{textFirstCell}</th><th>{textSecondCell}</th></tr>;
		}
	}
	return <tr><td>{textFirstCell}</td><td>{textSecondCell}</td></tr>;
}

CourseListRow.propTypes = {
	isHeader: propTypes.bool,
	textFirstCell: propTypes.string.isRequired,
	textSecondCell: propTypes.string,
};

CourseListRow.defaultProps = {
	isHeader: false,
	textSecondCell: null,
};

export default CourseListRow;