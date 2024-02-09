import React from "react";
import { Col, Image, ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const Sectionview = (props) => {
    const allsections = useSelector((state) => state.sections);
	return (
		<>
			{/* <ListGroup as="ul">
				<ListGroup.Item as="li">
					<div className="ms-2 me-auto">
						<Row className="align-items-center">
							<Col sm={3} className="fw-bold">
								Voice ID
							</Col>
							<Col sm={9}>
								{props.data.voiceID !== "" ? (
									<audio src={props.data.voiceID} controls />
								) : (
									<Image
										className="img-fluid mb-4"
										src="/images/samanta.webp"
										alt="faceid"
										width={300}
										height={200}
									/>
								)}
							</Col>
						</Row>
					</div>
				</ListGroup.Item>
				
			</ListGroup> */}
		</>
	);
};

export default Sectionview;
