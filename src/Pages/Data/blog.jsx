import React from "react";

const Blog = () => {
  const blogs = [
    {
      title: "What is Cryptocurrency?",
      content:
        "Cryptocurrency is a digital currency secured by cryptography that operates on blockchain technology.",
    },
    {
      title: "Top 5 Cryptos to Watch",
      content:
        "Bitcoin, Ethereum, Solana, Cardano, and Polkadot are among the most popular cryptocurrencies today.",
    },
    {
      title: "How to Invest Safely",
      content:
        "Always research before investing and never invest more than you can afford to lose.",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>Blog</h2>

      {blogs.map((blog, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            margin: "10px",
            borderRadius: "8px",
          }}
        >
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
