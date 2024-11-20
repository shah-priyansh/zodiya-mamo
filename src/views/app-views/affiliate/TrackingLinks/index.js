import Tracking from "./Tracking";
import "./Tracking.css"; // Main Styles

const TrackingLinksPage = () => {
  const trackingLinks = [
    { name: "Spring Campaign", clicks: 500, conversions: 50 },
    { name: "Summer Sale", clicks: 745, conversions: 70 },
    { name: "Black Friday Deal", clicks: 300, conversions: 35 },
    { name: "Holiday Special", clicks: 1200, conversions: 150 },
  ];

  return (
    <div className="tracking-links-page">
      <h1>Tracking Links Management</h1>
      <div className="add-new-link">
        <button>Add New Link</button>
      </div>
      <Tracking links={trackingLinks} />
    </div>
  );
};

export default TrackingLinksPage;
