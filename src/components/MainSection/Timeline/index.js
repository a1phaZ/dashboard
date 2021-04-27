import React from 'react';
import {Col} from "react-bootstrap";

import './styles.css';

const TimeLineItem = ({item}) => {
	const { dt, description, title, status } = item;
	return (
		<div className={'vertical-timeline-item vertical-timeline-element'}>
			<span className={'vertical-timeline-element-icon bounce-in'}>
				<i className={`badge badge-dot badge-dot-xl badge-${status}`}> </i>
			</span>
			<div className={'vertical-timeline-element-content bounce-in'}>
				<h6 className={'timeline-title'}>{title}</h6>
				<p>{description}</p>
				<span className={'vertical-timeline-element-date'}>{new Date(dt).toDateString()}</span>
			</div>
		</div>
	)
}

const TimeLineList = ({data}) => {
	return data.map(item => <TimeLineItem item={item} key={item.id.$oid}/>);
}

const Timeline = ({data}) => {
	console.log(data);
	return(
		<Col>
			<div className="card latest-update-card">
				<div className={'card-header'}>
					<h6> A day in my 'sleepy' life 😅</h6>
				</div>
				<div className={'card-block'}>
					<div className="vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
						<TimeLineList data={data} />
					</div>
				</div>
			</div>
		</Col>
	)
}

export default Timeline;