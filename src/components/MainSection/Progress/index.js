import React from 'react';
import {Col, ProgressBar, Row} from "react-bootstrap";

const ProgressList = ({data}) => {
	return data.map(({id, title, count, delta, progress}) => {
		return (
			<Col key={id.$oid}>
				<h6>{title}</h6>
				<h5 className="m-b-30 f-w-700">{count}<span className="text-c-green m-l-10">+{delta}%</span></h5>
				<ProgressBar now={progress}/>
			</Col>
		)
	})
}

const Progress = ({data}) => {
	return (
		<Row>
			<Col>
				<div className={'card'}>
					<div className={'card-block'}>
						<Row>
							<ProgressList data={data} />
						</Row>
					</div>
				</div>
			</Col>
		</Row>
)
}

export default Progress;