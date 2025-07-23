import React from "react";
import {
  FaUsers,
  FaQuestionCircle,
  FaChartLine,
  FaUserShield,
} from "react-icons/fa";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="profile">
          <img
            src="https://randomuser.me/api/portraits/men/45.jpg"
            alt="Admin"
          />
          <h2>Admin Name</h2>
          <p>Administrator</p>
        </div>

        <ul className="nav-links">
          <li>
            <a href="#manage-users">
              <FaUsers />
              Manage Users
            </a>
          </li>
          <li>
            <a href="#manage-questions">
              <FaQuestionCircle />
              Manage Questions
            </a>
          </li>
          <li>
            <a href="#analytics">
              <FaChartLine />
              View Analytics
            </a>
          </li>
          <li>
            <a href="#update-status">
              <FaUserShield />
              Update Status
            </a>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main">
        <h1>Admin Dashboard</h1>

        {/* Quick Stats */}
        <div className="stats">
          <div className="stat-card">
            <h3>150</h3>
            <p>Total Users</p>
          </div>
          <div className="stat-card">
            <h3>1200</h3>
            <p>Questions</p>
          </div>
          <div className="stat-card">
            <h3>75%</h3>
            <p>Average Pass Rate</p>
          </div>
          <div className="stat-card">
            <h3>24</h3>
            <p>Pending Updates</p>
          </div>
        </div>

        {/* Section: Manage Users */}
        <div className="section" id="manage-users">
          <h2>Manage Users</h2>
          <p>
            View, edit or delete users. Approve new accounts and assign roles.
          </p>
        </div>

        {/* Section: Manage Questions */}
        <div className="section" id="manage-questions">
          <h2>Manage Questions</h2>
          <p>
            Add or update test questions in the system with difficulty modes.
          </p>
        </div>

        {/* Section: View Analytics */}
        <div className="section" id="analytics">
          <h2>View Analytics</h2>
          <p>Analyze results, performance, and question accuracy.</p>
        </div>

        {/* Section: Update Status */}
        <div className="section" id="update-status">
          <h2>Update Status</h2>
          <p>Approve, reject, or modify test progress and student status.</p>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
