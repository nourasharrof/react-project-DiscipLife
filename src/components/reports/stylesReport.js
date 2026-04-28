import styled from "styled-components";

export const Styles = styled.div`
  .reports-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .reports-container h1 {
    font-size: 2.2rem;
    background: linear-gradient(45deg, #00ff00, #00ff00);
    -webkit-background-clip: text;
    color: transparent;
    font-family: "Poppins", sans-serif;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    font-family: "Luckiest Guy", sans-serif;
  }

  .reports-container p {
    opacity: 0.7;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
  }

  .stat-card {
    border-radius: 14px;
    padding: 18px;
    backdrop-filter: blur(8px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
    transition: 0.25s ease;
  }

  .stat-card.salary {
    background: linear-gradient(
      135deg,
      rgba(0, 255, 0, 0.18),
      rgba(0, 255, 0, 0.05)
    );
  }
  .stat-card.salary p {
    color: #00ff00;
  }

  .stat-card.expenses {
    background: linear-gradient(
      135deg,
      rgba(255, 0, 0, 0.18),
      rgba(255, 0, 0, 0.05)
    );
  }
  .stat-card.expenses p {
    color: #ff3b30;
  }
  .stat-card.remining {
    background: linear-gradient(
      135deg,
      rgba(255, 215, 0, 0.18),
      rgba(255, 215, 0, 0.05)
    );
  }
  .stat-card.remining p {
    color: #ffcc00;
  }

  .stat-card:hover {
    transform: translateY(-3px);
  }

  .stat-card h3 {
    font-size: 14px;
    color: #666;
    margin-bottom: 8px;
  }

  .stat-card p {
    font-size: 22px;
    font-weight: bold;
  }

  .charts {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  .chart-box {
    background: #fff;
    padding: 15px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  .chart-box h3 {
    margin-bottom: 10px;
    font-size: 16px;
    color: #00ff00;
  }

  @media (max-width: 992px) {
    .stats-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .charts {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 600px) {
    .stats-grid {
      grid-template-columns: 1fr;
    }

    .reports-container {
      padding: 10px;
    }

    .stat-card p {
      font-size: 18px;
    }

    .chart-box {
      padding: 10px;
    }
  }
`;
