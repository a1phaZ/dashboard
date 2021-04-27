import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar, faDesktop, faEnvelopeOpen, faServer, faTable} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
	return(
		<div className="sidebar">
			<ul>
				<li><a href="#"><i className={'fa'}><FontAwesomeIcon icon={faDesktop} /></i><span>Desktop</span></a></li>
				<li><a href="#"><i className={'fa'}><FontAwesomeIcon icon={faServer} /></i><span>Server</span></a></li>
				<li><a href="#"><i className={'fa'}><FontAwesomeIcon icon={faCalendar} /></i><span>Calendar</span></a></li>
				<li><a href="#"><i className={'fa'}><FontAwesomeIcon icon={faEnvelopeOpen} /></i><span>Messages</span></a></li>
				<li><a href="#"><i className={'fa'}><FontAwesomeIcon icon={faTable} /></i><span>Data Table</span></a></li>
			</ul>
		</div>
	)
}

export default Sidebar;