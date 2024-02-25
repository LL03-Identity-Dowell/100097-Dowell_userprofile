import React from "react";
import { Col, Image, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ReferenceView = (props) => {
	return (
		<>
			<ListGroup as="ul">
				<ListGroup.Item as="li">
					<div className="ms-2 me-auto">
						<Row className="align-items-center">
							<Col xl={3} sm={12} className="fw-bold">
								Facebook Profile
							</Col>
							<Col xl={9} sm={12}>
								{props.data.Facebook_profile !== "" ? (
									<Link
										to={props.data.Facebook_profile}
										className="text-black-50"
									>
										{props.data.Facebook_profile}
									</Link>
								) : (
									<span> You Don't have Profile Link</span>
								)}
							</Col>
						</Row>
					</div>
				</ListGroup.Item>
				<ListGroup.Item as="li">
					<div className="ms-2 me-auto">
						<Row className="align-items-center">
							<Col xl={3} sm={12} className="fw-bold">
								Discord Profile
							</Col>
							<Col xl={9} sm={12}>
								{props.data.Discord !== "" ? (
									<Link to={props.data.Discord} className="text-black-50">
										{props.data.Discord}
									</Link>
								) : (
									<span> You Don't have Profile Link</span>
								)}
							</Col>
						</Row>
					</div>
				</ListGroup.Item>
				<ListGroup.Item as="li">
					<div className="ms-2 me-auto">
						<Row className="align-items-center">
							<Col xl={3} sm={12} className="fw-bold">
								Instagram Profile
							</Col>
							<Col xl={9} sm={12}>
								{props.data.Instagram !== "" ? (
									<Link to={props.data.Instagram} className="text-black-50">
										{props.data.Instagram}
									</Link>
								) : (
									<span> You Don't have Profile Link</span>
								)}
							</Col>
						</Row>
					</div>
				</ListGroup.Item>
				<ListGroup.Item as="li">
					<div className="ms-2 me-auto">
						<Row className="align-items-center">
							<Col xl={3} sm={12} className="fw-bold">
								Linkedin Profile
							</Col>
							<Col xl={9} sm={12}>
								{props.data.Linkedin !== "" ? (
									<Link to={props.data.Linkedin} className="text-black-50">
										{props.data.Linkedin}
									</Link>
								) : (
									<span> You Don't have Profile Link</span>
								)}
							</Col>
						</Row>
					</div>
				</ListGroup.Item>
				<ListGroup.Item as="li">
					<div className="ms-2 me-auto">
						<Row className="align-items-center">
							<Col xl={3} sm={12} className="fw-bold">
								Pinterest Profile
							</Col>
							<Col xl={9} sm={12}>
								{props.data.Pinterest !== "" ? (
									<Link to={props.data.Pinterest} className="text-black-50">
										{props.data.Pinterest}
									</Link>
								) : (
									<span> You Don't have Profile Link</span>
								)}
							</Col>
						</Row>
					</div>
				</ListGroup.Item>
				<ListGroup.Item as="li">
					<div className="ms-2 me-auto">
						<Row className="align-items-center">
							<Col xl={3} sm={12} className="fw-bold">
								Reddit Profile
							</Col>
							<Col xl={9} sm={12}>
								{props.data.Reddit !== "" ? (
									<Link to={props.data.Reddit} className="text-black-50">
										{props.data.Reddit}
									</Link>
								) : (
									<span> You Don't have Profile Link</span>
								)}
							</Col>
						</Row>
					</div>
				</ListGroup.Item>
				<ListGroup.Item as="li">
					<div className="ms-2 me-auto">
						<Row className="align-items-center">
							<Col xl={3} sm={12} className="fw-bold">
								Snapchat Profile
							</Col>
							<Col xl={9} sm={12}>
								{props.data.Snapchat !== "" ? (
									<Link to={props.data.Snapchat} className="text-black-50">
										{props.data.Snapchat}
									</Link>
								) : (
									<span> You Don't have Profile Link</span>
								)}
							</Col>
						</Row>
					</div>
				</ListGroup.Item>
				<ListGroup.Item as="li">
					<div className="ms-2 me-auto">
						<Row className="align-items-center">
							<Col xl={3} sm={12} className="fw-bold">
								Tiktok Profile
							</Col>
							<Col xl={9} sm={12}>
								{props.data.Tiktok !== "" ? (
									<Link to={props.data.Tiktok} className="text-black-50">
										{props.data.Tiktok}
									</Link>
								) : (
									<span> You Don't have Profile Link</span>
								)}
							</Col>
						</Row>
					</div>
				</ListGroup.Item>
				<ListGroup.Item as="li">
					<div className="ms-2 me-auto">
						<Row className="align-items-center">
							<Col xl={3} sm={12} className="fw-bold">
								Tumbir Profile
							</Col>
							<Col xl={9} sm={12}>
								{props.data.Tumbir !== "" ? (
									<Link to={props.data.Tumbir} className="text-black-50">
										{props.data.Tumbir}
									</Link>
								) : (
									<span> You Don't have Profile Link</span>
								)}
							</Col>
						</Row>
					</div>
				</ListGroup.Item>
				<ListGroup.Item as="li">
					<div className="ms-2 me-auto">
						<Row className="align-items-center">
							<Col xl={3} sm={12} className="fw-bold">
								Twitter Profile
							</Col>
							<Col xl={9} sm={12}>
								{props.data.Twitter !== "" ? (
									<Link to={props.data.Twitter} className="text-black-50">
										{props.data.Twitter}
									</Link>
								) : (
									<span> You Don't have Profile Link</span>
								)}
							</Col>
						</Row>
					</div>
				</ListGroup.Item>
				<ListGroup.Item as="li">
					<div className="ms-2 me-auto">
						<Row className="align-items-center">
							<Col xl={3} sm={12} className="fw-bold">
								Whatsapp Profile
							</Col>
							<Col xl={9} sm={12}>
								{props.data.Whatsapp !== "" ? (
									<Link to={props.data.Whatsapp} className="text-black-50">
										{props.data.Whatsapp}
									</Link>
								) : (
									<span> You Don't have Profile Link</span>
								)}
							</Col>
						</Row>
					</div>
				</ListGroup.Item>
				<ListGroup.Item as="li">
					<div className="ms-2 me-auto">
						<Row className="align-items-center">
							<Col xl={3} sm={12} className="fw-bold">
								Youtube Profile
							</Col>
							<Col xl={9} sm={12}>
								{props.data.Youtube !== "" ? (
									<Link to={props.data.Youtube} className="text-black-50">
										{props.data.Youtube}
									</Link>
								) : (
									<span> You Don't have Profile Link</span>
								)}
							</Col>
						</Row>
					</div>
				</ListGroup.Item>
				<ListGroup.Item as="li">
					<div className="ms-2 me-auto">
						<Row className="align-items-center">
							<Col xl={3} sm={12} className="fw-bold">
								Academia Profile
							</Col>
							<Col xl={9} sm={12}>
								{props.data.academia_profile !== "" ? (
									<Link
										to={props.data.academia_profile}
										className="text-black-50"
									>
										{props.data.academia_profile}
									</Link>
								) : (
									<span> You Don't have Profile Link</span>
								)}
							</Col>
						</Row>
					</div>
				</ListGroup.Item>
				<ListGroup.Item as="li">
					<div className="ms-2 me-auto">
						<Row className="align-items-center">
							<Col xl={3} sm={12} className="fw-bold">
								Personal Reference 1
							</Col>
							<Col xl={9} sm={12}>
								{props.data.personal_reference_1 !== "" ? (
									<Link
										to={props.data.personal_reference_1}
										className="text-black-50"
									>
										{props.data.personal_reference_1}
									</Link>
								) : (
									<span> You Don't have Profile Link</span>
								)}
							</Col>
						</Row>
					</div>
				</ListGroup.Item>

				<ListGroup.Item as="li">
					<div className="ms-2 me-auto">
						<Row className="align-items-center">
							<Col xl={3} sm={12} className="fw-bold">
								Personal Reference 2
							</Col>
							<Col xl={9} sm={12}>
								{props.data.personal_reference_2 !== "" ? (
									<Link
										to={props.data.personal_reference_2}
										className="text-black-50"
									>
										{props.data.personal_reference_2}
									</Link>
								) : (
									<span> You Don't have Profile Link</span>
								)}
							</Col>
						</Row>
					</div>
				</ListGroup.Item>
				<ListGroup.Item as="li">
					<div className="ms-2 me-auto">
						<Row className="align-items-center">
							<Col xl={3} sm={12} className="fw-bold">
								Personal Reference 3
							</Col>
							<Col xl={9} sm={12}>
								{props.data.personal_reference_3 !== "" ? (
									<Link
										to={props.data.personal_reference_3}
										className="text-black-50"
									>
										{props.data.personal_reference_3}
									</Link>
								) : (
									<span> You Don't have Profile Link</span>
								)}
							</Col>
						</Row>
					</div>
				</ListGroup.Item>
				<ListGroup.Item as="li">
					<div className="ms-2 me-auto">
						<Row className="align-items-center">
							<Col xl={3} sm={12} className="fw-bold">
								Personal Reference 4
							</Col>
							<Col xl={9} sm={12}>
								{props.data.personal_reference_4 !== "" ? (
									<Link
										to={props.data.personal_reference_4}
										className="text-black-50"
									>
										{props.data.personal_reference_4}
									</Link>
								) : (
									<span> You Don't have Profile Link</span>
								)}
							</Col>
						</Row>
					</div>
				</ListGroup.Item>

				<ListGroup.Item as="li">
					<div className="ms-2 me-auto">
						<Row className="align-items-center">
							<Col xl={3} sm={12} className="fw-bold">
								Personal Reference 5
							</Col>
							<Col xl={9} sm={12}>
								{props.data.personal_reference_5 !== "" ? (
									<Link
										to={props.data.personal_reference_5}
										className="text-black-50"
									>
										{props.data.personal_reference_5}
									</Link>
								) : (
									<span> You Don't have Profile Link</span>
								)}
							</Col>
						</Row>
					</div>
				</ListGroup.Item>

				<ListGroup.Item as="li">
					<div className="ms-2 me-auto">
						<Row className="align-items-center">
							<Col xl={3} sm={12} className="fw-bold">
								Xing Profile
							</Col>
							<Col xl={9} sm={12}>
								{props.data.xing_profile !== "" ? (
									<Link to={props.data.xing_profile} className="text-black-50">
										{props.data.xing_profile}
									</Link>
								) : (
									<span> You Don't have Profile Link</span>
								)}
							</Col>
						</Row>
					</div>
				</ListGroup.Item>
			</ListGroup>
		</>
	);
};

export default ReferenceView;
