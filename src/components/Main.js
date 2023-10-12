import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SideBar from './SideBar';
import SideContent from './SideContent';
function ResponsiveAutoExample() {
  return (
    <Container fluid>
      <Row>
        {/* Column 1 (Blue on Mobile) */}
        <Col xs={{span:12, order:2}} lg={{order:1, span:4}} md={{ span: 6, order: 2 }}>
          <SideBar/>
        </Col>

        {/* Column 2 */}
        <Col xs={{span:12, order:1}} lg={{order:2,span:8}} md={{ span: 6, order: 1 }}>
          <SideContent/>
        </Col>
      </Row>
    </Container>
  );
}

export default ResponsiveAutoExample;