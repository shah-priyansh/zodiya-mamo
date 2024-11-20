import React from "react";
import "./AffiliateStats.css"; // Main Styles

const AffiliateStatsPage = () => {
  // Sample affiliate stats data
  const affiliateStats = {
    conversionRate: "9.6%",
    topPerformingLink: "Summer Sale",
    totalEarnings: "$2,340",
    clicks: 1245,
    conversions: 120,
  };

  const affiliateDetails = [
    { metric: "Total Earnings", value: "$2,340" },
    { metric: "Clicks", value: "1,245" },
    { metric: "Conversions", value: "120" },
    { metric: "Conversion Rate", value: affiliateStats.conversionRate },
    { metric: "Top Performing Link", value: affiliateStats.topPerformingLink },
  ];

  return (
    <div className="affiliate-stats-page">
      <div className="affiliate-stats-header">
        <h1>Affiliate Stats</h1>
      </div>

      <div className="stats-cards">
        {affiliateDetails.map((detail, index) => (
          <div className="stat-card" key={index}>
            <h3>{detail.metric}</h3>
            <p>{detail.value}</p>
          </div>
        ))}
      </div>

      <div className="section stats-table">
        <h2>Affiliate Stats Table</h2>
        <table>
          <thead>
            <tr>
              <th>Metric</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Total Earnings</td>
              <td>{affiliateStats.totalEarnings}</td>
            </tr>
            <tr>
              <td>Clicks</td>
              <td>{affiliateStats.clicks}</td>
            </tr>
            <tr>
              <td>Conversions</td>
              <td>{affiliateStats.conversions}</td>
            </tr>
            <tr>
              <td>Conversion Rate</td>
              <td>{affiliateStats.conversionRate}</td>
            </tr>
            <tr>
              <td>Top Performing Link</td>
              <td>{affiliateStats.topPerformingLink}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AffiliateStatsPage;
