import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
	return (
		<div className="header">
			<a href="#" id="menu-action">
				<i className={'fa'}><FontAwesomeIcon icon={faBars} /></i>
				<span>Close</span>
			</a>
			<div className="logo">
				Admin Panel
			</div>
		</div>
	)
}

export default Header;