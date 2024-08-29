import { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaUser, FaBook, FaEnvelope, FaClipboardList, FaUsers, FaClipboardCheck, FaHospital } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import reactimg from '../assets/react.svg';
import Header from '../App'


const Dashboard = () => {
  const [regular, setregular] = useState(0);
  const [remed, setremed] = useState(0);
  const [paidClub, setpaidClub] = useState(0);

  useEffect(() => {
    const fetchData = () => {
      setregular(8);
      setremed(13);
      setpaidClub(0);
    };
    fetchData();
  }, []);

  return (
    <div className="dashboard-container">
      
      <div className="sidebar">
        <div className="brand-logo">
          <img src={reactimg} alt="Logo" />
        </div>
        <div className="menu">
          <div className="menu-item">
            <FaUser className="sidebar-icon" />
            <p>Student Management</p>
          </div>
          <div className="menu-item">
            <FaClipboardList className="sidebar-icon" />
            <p>Financial Management</p>
          </div>
          <div className="menu-item">
            <FaBook className="sidebar-icon" />
            <p>Quality Control</p>
          </div>
          <div className="menu-item">
            <FaEnvelope className="sidebar-icon" />
            <p>Report Delivery</p>
          </div>
          <div className="menu-item">
            <FaUsers className="sidebar-icon" />
            <p>Attendance</p>
          </div>
        </div>
      </div>

      <Container fluid className="main-content">
        <Row>
          {<Header />}
        </Row>

  
        <Container>
          <Row className="mb-4">
            <Col md={4}>
              <Card className="text-center stat-card red-card">
                <Card.Body>
                  <FaUser className="icon" />
                  <Card.Title className="stat-number">{regular}</Card.Title>
                  <Card.Text className="stat-text">Regular Students</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center stat-card purple-card">
                <Card.Body>
                  <FaUser className="icon" />
                  <Card.Title className="stat-number">{remed}</Card.Title>
                  <Card.Text className="stat-text">Remedial Students</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center stat-card green-card">
                <Card.Body>
                  <FaUsers className="icon" />
                  <Card.Title className="stat-number">{paidClub}</Card.Title>
                  <Card.Text className="stat-text">In Paid Clubs</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        
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
        </Container>
      </Container>
    </div>
  );
};

export default Dashboard;
