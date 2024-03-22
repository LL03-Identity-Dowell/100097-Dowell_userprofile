import React from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";


const IDVerification = () => {
	const allidverifications = useSelector((state) => state.idverify);

	return (
		<>
			{!Object.values(allidverifications).every(
				(value) => value === "Not_Started"
			) ? (
				<>
					<ListGroup as="ul">
						{Object.entries(allidverifications).map(
							([idVerifyKey, idverifyValue], index) => (
								<ListGroup.Item as="li" key={index}>
									<div className="ms-2 me-auto">
										<Row className="align-items-center">
											<Col xl={4} sm={12} className="fw-bold">
												{idVerifyKey}
											</Col>
											<Col xl={8} sm={12}>
												{idverifyValue}
											</Col>
										</Row>
									</div>
								</ListGroup.Item>
							)
						)}
					</ListGroup>
				</>
			) : (
				<div>
					Your Id Verification information is not available, update this to view
				</div>
			)}
		</>
	);
};

export default IDVerification;
