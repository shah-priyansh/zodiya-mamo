import React from "react";

const Tracking = ({ links }) => {
  return (
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
          {links.map((link, index) => (
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
  );
};

export default Tracking;
