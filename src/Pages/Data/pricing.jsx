import React from "react";

const Pricing = () => {
  const plans = [
    {
      name: "Free Plan",
      price: "$0/month",
      features: [
        "Basic price tracking",
        "Limited API access",
        "Community support",
      ],
    },
    {
      name: "Pro Plan",
      price: "$9/month",
      features: ["Real-time updates", "Portfolio tracking", "Advanced charts"],
    },
    {
      name: "Premium Plan",
      price: "$19/month",
      features: ["All Pro features", "Priority support", "Unlimited access"],
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>Pricing</h2>

      {plans.map((plan, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            margin: "10px",
            borderRadius: "8px",
          }}
        >
          <h3>{plan.name}</h3>
          <p>{plan.price}</p>

          <ul>
            {plan.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Pricing;
