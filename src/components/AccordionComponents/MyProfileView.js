import React, { useState, useEffect } from "react";
import { ListGroup, Row, Col, Image, Button } from "react-bootstrap";
import Alert from 'react-bootstrap/Alert';
import { ToastContainer, toast } from "react-toastify";

const MyProfileView = (viewData) => {
	console.log("userviewData", viewData);
	const [object, setObject] = useState(null);
	const data = viewData.data;
	console.log(data)
	useEffect(() => {
		setObject(data);
	}, [viewData]);
	const handleCreateQrCode = async () => {
		const qr_code_payload=	{        
			user_id:data.user_id,
			email: data.Email,
			admin_id:data.client_admin_id,
			username:data.Username,
			lattitude:"34",
			country:"pakistan",
			longtitude:"67",        
		}
		try {
			const response = await fetch(
				"https://100093.pythonanywhere.com/api/createqrcode",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(qr_code_payload),
				}
			);
		  toast.success("QR code created successfully")
  		  sessionStorage.removeItem('session_id');
  		  window.location.href = ('https://100014.pythonanywhere.com/sign-out');
		} catch (error) {
		  console.error('Error creating QR Code:', error);
		  toast.error("Error Creating QR code")
		}
	  };
	  const download = (url) => {
		var element = document.createElement("a");
		var file = new Blob(
		  [
			url
		  ],
		  { type: "image/*" }
		);
		element.href = URL.createObjectURL(file);
		element.download = "qr-code-image.jpg";
		element.click();
	  };
	return (
		<div>
			<ToastContainer position="top-right" />

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
					<ListGroup.Item as="li">
						<div className="ms-2 me-auto">
							<Row>
								<Col xl={3} sm={12} className="fw-bold">
									Qr Code Id
								</Col>
								<Col xl={9} sm={12}>{object.qrid ? 
								// 	<div>
								// <Col xl={9} sm={12}>{object.qrid}</Col>
								// 		<Col xl={9} sm={12}>
								// 			<Image
								// 				className="img-fluid mb-4 view-wrapper"
								// 				src={object.qrurl}
								// 				alt="qr logo"
								// 				width={300}
								// 				height={200}
								// 			/>
								// 		</Col>	
								// 		<Col xl={9} sm={12}>
								// 		<Button
								// 			variant="dark"
								// 			className="w-50 btn mb-5"
								// 			onClick={() => download(object.qrurl)}
								// 		>Download Qr Code</Button>
								// 		</Col>
								// 	</div>
									<p><Alert variant="primary">Your QR Code hasn't been created yet. Please click<a href="#" onClick={handleCreateQrCode}>here</a> to generate one.</Alert></p>
									
									: 

									// <p><Alert variant="primary">Your QR Code hasn't been created yet. Please click<a href="#" onClick={handleCreateQrCode}>here</a> to generate one.</Alert></p>
									<div>
								<Col xl={9} sm={12}>{object.qrid}</Col>
										<Col xl={9} sm={12}>
											<Image
												className="img-fluid mb-4 view-wrapper"
												src={object.qrurl}
												alt="qr logo"
												width={300}
												height={200}
											/>
										</Col>	
										<Col xl={9} sm={12}>
										<Button
											variant="dark"
											className="w-50 btn mb-5"
											onClick={() => download(object.qrurl)}
										>Download Qr Code</Button>
										</Col>
									</div>
									}
								</Col>
								
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
