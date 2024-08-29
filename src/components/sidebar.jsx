import { FaUser, FaBook, FaEnvelope, FaClipboardList, FaUsers } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import reactimg from '../assets/react.svg';
const Sidebar=()=>{
    return(
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
        </div>)
}
export default Sidebar

