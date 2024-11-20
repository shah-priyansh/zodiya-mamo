import React from "react";
import "./AffiliateDashboard.css"; // Import the CSS file

const AffiliateDashboard = () => {
  const trackingLinks = [
    { name: "Spring Campaign", clicks: 500, conversions: 50 },
    { name: "Summer Sale", clicks: 745, conversions: 70 },
  ];

  return (
    <div className="affiliate-dashboard">
      <div className="dashboard-header">
        <h1>Affiliate Dashboard</h1>
      </div>

      <div className="metrics">
        <div className="metric-card">
          <h3>Total Earnings</h3>
          <p>$2,340</p>
        </div>
        <div className="metric-card">
          <h3>Clicks</h3>
          <p>1,245</p>
        </div>
        <div className="metric-card">
          <h3>Conversions</h3>
          <p>120</p>
        </div>
      </div>

      <div className="section tracking-links">
        <h2>Tracking Links</h2>
        <table>
          <thead>
            <tr>
              <th>Link Name</th>
              <th>Clicks</th>
              <th>Conversions</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {trackingLinks.map((link, index) => (
              <tr key={index}>
                <td>{link.name}</td>
                <td>{link.clicks}</td>
                <td>{link.conversions}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="section stats">
        <h2>Affiliate Stats</h2>
        <p>
          <strong>Conversion Rate:</strong> 9.6%
        </p>
        <p>
          <strong>Top Performing Link:</strong> Summer Sale
        </p>
      </div>
    </div>
  );
};

export default AffiliateDashboard;
