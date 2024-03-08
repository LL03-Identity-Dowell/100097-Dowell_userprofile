import React from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const Sectionview = () => {
	const allSections = useSelector((state) => state.sections);



// Check if all sections have all properties (except Section_Name) set to false
  const allFalse = Object.values(allSections).every((sectionData) =>
    Object.entries(sectionData).filter(([key]) => key !== 'Section_Name').every(([key, value]) => value === false)
  );
	return (
		<>
			{
				allFalse?(<div>
           Section Permission Information is not available, update this to view
    </div>):(<>
			<ListGroup as="ul">
				{Object.entries(allSections).map(
					([sectionName, sectionData], index) => (
						<ListGroup.Item as="li" key={index}>
							<div className="ms-2 me-auto">
								<Row className="align-items-center">
									<Col xl={3} sm={12} className="fw-bold">
										{sectionName}
									</Col>
									<Col xl={9} sm={12}>
										{Object.entries(sectionData).map(
											([key, value]) =>
												value &&
												(key != "Section_Name" ? (
													<span key={key} className="d-block me-2">
														{key}
													</span>
												) : (
													""
												))
										)}
									</Col>
								</Row>
							</div>
						</ListGroup.Item>
					)
				)}
			</ListGroup>
		</>)
			}
		</>
	);
};

export default Sectionview;
