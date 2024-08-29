import { Container, Row, Col, Card } from "react-bootstrap";
import { FaUser, FaBook, FaEnvelope, FaClipboardList, FaUsers, FaClipboardCheck, FaHospital } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
const menu =()=>{ 
    return(
    <Container>
      <Row className="mb-4">
        <Col md={4}>
          <Card className="text-center menu-card">
            <Card.Body>
              <FaUser className="icon" />
              <Card.Text className="menu-text">Regular Enrollment</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center menu-card">
            <Card.Body>
              <FaBook className="icon" />
              <Card.Text className="menu-text">Remedial Enrollment</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center menu-card">
            <Card.Body>
              <FaUsers className="icon" />
              <Card.Text className="menu-text">Club Management</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={4}>
          <Card className="text-center menu-card">
            <Card.Body>
              <FaClipboardList className="icon" />
              <Card.Text className="menu-text">Classroom Management</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center menu-card">
            <Card.Body>
              <FaEnvelope className="icon" />
              <Card.Text className="menu-text">SMS / Email</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      <Col md={4}>
          <Card className="text-center menu-card">
            <Card.Body>
            <FaClipboardCheck className="icon" />
            <Card.Text className="menu-text">Attendance</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-4">
      <Col md={4}>
        <Card className="text-center menu-card">
          <Card.Body>
          
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="text-center menu-card">
          <Card.Body>
            <FaHospital className="icon" />
            <Card.Text className="menu-text">Clinic</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="text-center menu-card">
          <Card.Body>
            
          </Card.Body>
        </Card>
      </Col>
      </Row>
    </Container>);}

export default menu
