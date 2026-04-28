import React from "react";

const Features = () => {
  const features = [
    {
      title: "Real-Time Crypto Prices",
      description:
        "Track live cryptocurrency prices with accurate and up-to-date market data.",
    },
    {
      title: "Portfolio Tracking",
      description:
        "Monitor your investments and analyze your crypto portfolio performance.",
    },
    {
      title: "Secure Authentication",
      description:
        "Your account is protected with JWT-based secure authentication.",
    },
    {
      title: "Multi-Currency Support",
      description: "View prices in USD, EUR, and INR instantly.",
    },
    {
      title: "Market Trends",
      description:
        "Analyze price charts and identify trends for better decisions.",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>Features</h2>

      {features.map((item, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            margin: "10px",
            borderRadius: "8px",
          }}
        >
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
