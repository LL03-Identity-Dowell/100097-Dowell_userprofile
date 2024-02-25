import React, { useState, useEffect } from "react";
import { ListGroup, Row, Col } from "react-bootstrap";

const MyProfileView = (viewData) => {
	console.log("userviewData", viewData);
	const [object, setObject] = useState(null);
	const data = viewData.data;
	useEffect(() => {
		setObject(data);
	}, [viewData]);
	return (
		<div>
			{object ? (
				<ListGroup as="ul">
					<ListGroup.Item as="li">
						<div className="ms-2 me-auto">
							<Row>
								<Col xl={3} sm={12} className="fw-bold">
									Email
								</Col>
								<Col xl={9} sm={12}>{object.Email}</Col>
							</Row>
						</div>
					</ListGroup.Item>
					<ListGroup.Item as="li">
						<div className="ms-2 me-auto">
							<Row>
								<Col xl={3} sm={12} className="fw-bold">
									First Name
								</Col>
								<Col xl={9} sm={12}>{object.Firstname}</Col>
							</Row>
						</div>
					</ListGroup.Item>
					<ListGroup.Item as="li">
						<div className="ms-2 me-auto">
							<Row>
								<Col xl={3} sm={12} className="fw-bold">
									Last Name
								</Col>
								<Col xl={9} sm={12}>{object.Lastname}</Col>
							</Row>
						</div>
					</ListGroup.Item>
					<ListGroup.Item as="li">
						<div className="ms-2 me-auto">
							<Row>
								<Col xl={3} sm={12} className="fw-bold">
									Password
								</Col>
								<Col xl={9} sm={12} className="password"></Col>
							</Row>
						</div>
					</ListGroup.Item>
					<ListGroup.Item as="li">
						<div className="ms-2 me-auto">
							<Row>
								<Col xl={3} sm={12} className="fw-bold">
									Phone
								</Col>
								<Col xl={9} sm={12}>{object.Phone}</Col>
							</Row>
						</div>
					</ListGroup.Item>
					<ListGroup.Item as="li">
						<div className="ms-2 me-auto">
							<Row>
								<Col xl={3} sm={12} className="fw-bold">
									Role
								</Col>
								<Col xl={9} sm={12}>{object.Role}</Col>
							</Row>
						</div>
					</ListGroup.Item>
					<ListGroup.Item as="li">
						<div className="ms-2 me-auto">
							<Row>
								<Col xl={3} sm={12} className="fw-bold">
									Team Code
								</Col>
								<Col xl={9} sm={12}>{object.Team_Code}</Col>
							</Row>
						</div>
					</ListGroup.Item>
					<ListGroup.Item as="li">
						<div className="ms-2 me-auto">
							<Row>
								<Col xl={3} sm={12} className="fw-bold">
									User Type
								</Col>
								<Col xl={9} sm={12}>{object.User_type}</Col>
							</Row>
						</div>
					</ListGroup.Item>
					<ListGroup.Item as="li">
						<div className="ms-2 me-auto">
							<Row>
								<Col xl={3} sm={12} className="fw-bold">
									User name
								</Col>
								<Col xl={9} sm={12}>{object.Username}</Col>
							</Row>
						</div>
					</ListGroup.Item>
					<ListGroup.Item as="li">
						<div className="ms-2 me-auto">
							<Row>
								<Col xl={3} sm={12} className="fw-bold">
									Client Admin Id
								</Col>
								<Col xl={9} sm={12}>{object.client_admin_id}</Col>
							</Row>
						</div>
					</ListGroup.Item>
					<ListGroup.Item as="li">
						<div className="ms-2 me-auto">
							<Row>
								<Col xl={3} sm={12} className="fw-bold">
									Company Id
								</Col>
								<Col xl={9} sm={12}>{object.company_id}</Col>
							</Row>
						</div>
					</ListGroup.Item>
					<ListGroup.Item as="li">
						<div className="ms-2 me-auto">
							<Row>
								<Col xl={3} sm={12} className="fw-bold">
									Payment Status
								</Col>
								<Col xl={9} sm={12}>{object.payment_status}</Col>
							</Row>
						</div>
					</ListGroup.Item>
					<ListGroup.Item as="li">
						<div className="ms-2 me-auto">
							<Row>
								<Col xl={3} sm={12} className="fw-bold">
									Phone code
								</Col>
								<Col xl={9} sm={12}>{object.phonecode}</Col>
							</Row>
						</div>
					</ListGroup.Item>
					<ListGroup.Item as="li">
						<div className="ms-2 me-auto">
							<Row>
								<Col xl={3} sm={12} className="fw-bold">
									Profile Id
								</Col>
								<Col xl={9} sm={12}>{object.profile_id}</Col>
							</Row>
						</div>
					</ListGroup.Item>
					<ListGroup.Item as="li">
						<div className="ms-2 me-auto">
							<Row>
								<Col xl={3} sm={12} className="fw-bold">
									User Id
								</Col>
								<Col xl={9} sm={12}>{object.user_id}</Col>
							</Row>
						</div>
					</ListGroup.Item>
					<ListGroup.Item as="li">
						<div className="ms-2 me-auto">
							<Row>
								<Col xl={3} sm={12} className="fw-bold">
									Id
								</Col>
								<Col xl={9} sm={12}>{object._id}</Col>
							</Row>
						</div>
					</ListGroup.Item>
				</ListGroup>
			) : (
				"Loading"
			)}
		</div>
	);
};

export default MyProfileView;
