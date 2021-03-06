import React from 'react';
import {Col, ProgressBar, Row} from "react-bootstrap";
import Progress from "./Progress";
import Timeline from "./Timeline";

const MainSection = ({progressData, timelineData}) => {
	return (
		<div className="main">
			<Progress data={progressData}/>
			<Row>
				<Timeline data={timelineData}/>
			</Row>
			<div className="">
				<div className="jumbotron">
					<h1>Hello, world!<a className="anchorjs-link" href="#hello,-world!"><span className="anchorjs-icon"></span></a>
					</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur quisquam necessitatibus nesciunt
						nihil quod tenetur quas laudantium. Impedit, soluta tempore saepe voluptatibus officia quos sunt cum,
						veritatis laudantium mollitia sequi.</p>
					
					<p><a className="btn btn-primary" href="#" role="button">Learn more</a></p>
				</div>
				<div className="bs-callout bs-callout-danger">
					<h4>Danger</h4>
					Something horribad happened.
				</div>
				<p>FRENCH SAILOR. Hist, boys! let's have a jig or two before we ride to anchor in Blanket Bay. What say ye?
					There comes the other watch. Stand by all legs! Pip! little Pip! hurrah with your tambourine!</p>
				
				<p>PIP. (SULKY AND SLEEPY) Don't know where it is.</p>
				
				<p>FRENCH SAILOR. Beat thy belly, then, and wag thy ears. Jig it, men, I say; merry's the word; hurrah! Damn
					me, won't you dance? Form, now, Indian-file, and gallop into the double-shuffle? Throw yourselves! Legs!
					legs!</p>
				<table className="table table-bordered table-striped">
					<thead>
					<tr>
						<th>#</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Username</th>
					</tr>
					</thead>
					<tbody>
					<tr>
						<th scope="row">1</th>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<th scope="row">2</th>
						<td>Jacob</td>
						<td>Thornton</td>
						<td>@fat</td>
					</tr>
					<tr>
						<th scope="row">3</th>
						<td>Larry</td>
						<td>the Bird</td>
						<td>@twitter</td>
					</tr>
					</tbody>
				</table>
				<p>Hoo-Hoo began to laugh.</p>
				
				<p>
					"The woodtick sucks the blood of the dog, but the germ, being so very small, goes right into the blood of
					the body, and there it has many children. In those days there would be as many as a billion&mdash;a
					crab-shell, please&mdash;as many as that crab-shell in one man's body. We called germs micro-organisms.
					When a few million, or a billion, of them were in a man, in all the blood of a man, he was sick. These
					germs were a disease. There were many different kinds of them&mdash;more different kinds than there are
					grains of sand on this beach. We knew only a few of the kinds. The micro-organic world was an invisible
					world, a world we could not see, and we knew very little about it. Yet we did know something. There was
					the bacillus anthracis; there was the micrococcus; there was the Bacterium termo, and the Bacterium
					lactis&mdash;that's what turns the goat milk sour even to this day, Hare-Lip; and there were Schizomycetes
					without end. And there were many others...."
				</p>
			
			</div>
		</div>
	)
}

export default MainSection;