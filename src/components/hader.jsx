import { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaUser, FaBook, FaEnvelope, FaClipboardList, FaUsers, FaClipboardCheck, FaHospital } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import reactimg from '../assets/react.svg';


const Dashboard = () => {
  const [regularStudents, setRegularStudents] = useState(0);
  const [remedialStudents, setRemedialStudents] = useState(0);
  const [paidClubStudents, setPaidClubStudents] = useState(0);

  useEffect(() => {
    const fetchData = () => {
      setRegularStudents(8);
      setRemedialStudents(13);
      setPaidClubStudents(0);
    };
    fetchData();
  }, []);

  return (
  );
};

export default Dashboard;
