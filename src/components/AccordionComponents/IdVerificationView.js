import React from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const IDVerification = () => {
	const allidverifications = useSelector((state) => state.idverify);

	return (
		<>
			<ListGroup as="ul">
				{Object.entries(allidverifications).map(
					([idVerifyKey, idverifyValue], index) => (
						<ListGroup.Item as="li" key={index}>
							<div className="ms-2 me-auto">
								<Row className="align-items-center">
									<Col sm={4} className="fw-bold">
										{idVerifyKey}
									</Col>
									<Col sm={8}>
										{idverifyValue}
									</Col>
								</Row>
							</div>
						</ListGroup.Item>
					)
				)}
			</ListGroup>
		</>
	);
};

export default IDVerification;
