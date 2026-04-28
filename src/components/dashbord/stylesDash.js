import styled from "styled-components";

export const Styles = styled.div`
  .page-title {
    background: linear-gradient(45deg, #00ff00, #00ff00);
    -webkit-background-clip: text;
    color: transparent;
    font-family: "Luckiest Guy", sans-serif;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    word-break: break-word;
  }

  p {
    opacity: 0.7;
    margin-bottom: 20px;
    font-size: clamp(13px, 2vw, 16px);
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px;
  }

  @media (max-width: 992px) {
    .grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 600px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }

  .card,
  .budget-card,
  .wallet {
    border-radius: 14px;
    padding: clamp(12px, 2vw, 18px);
    backdrop-filter: blur(10px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
    transition: 0.25s ease;
    overflow: hidden;
  }

  .card:hover,
  .budget-card:hover,
  .wallet:hover {
    transform: translateY(-4px);
  }

  h3,
  h4 {
    margin-bottom: 10px;
    font-size: clamp(14px, 2vw, 18px);
  }

  .task {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 8px 0;
    flex-wrap: wrap;
  }

  .task span {
    flex: 1;
    min-width: 120px;
  }

  .task-card {
    background: #e8f1ff;
    color: #1f2937;
  }

  .task.done {
    opacity: 0.5;
    text-decoration: line-through;
    color: #16a34a;
  }

  .badge {
    padding: 3px 10px;
    border-radius: 20px;
    font-size: 12px;
    white-space: nowrap;
  }

  .medium {
    background: #f59e0b;
    color: #000;
  }

  .high {
    background: #ef4444;
  }

  .low {
    background: #22c55e;
  }

  .progress-bar {
    width: 100%;
    height: 8px;
    background: #334155;
    border-radius: 10px;
    overflow: hidden;
    margin: 10px 0;
  }

  .progress-filled {
    height: 100%;
    transition: 0.4s;
  }

  .budget-card {
    background: linear-gradient(
      135deg,
      rgba(139, 92, 246, 0.5),
      rgba(0, 0, 0, 0.05)
    );
  }

  .saving-card {
    background: linear-gradient(
      135deg,
      rgba(0, 255, 0, 0.5),
      rgba(0, 255, 0, 0.05)
    );
  }

  .quick-card {
    background: linear-gradient(
      135deg,
      rgba(245, 158, 11, 0.5),
      rgba(0, 0, 0, 0.05)
    );
  }

  .action {
    display: block;
    padding: 10px;
    margin: 10px 0;
    border-radius: 10px;
    text-decoration: none;
    font-weight: bold;
    transition: 0.3s;
    color: #fff;
    text-align: center;
  }

  .action:hover {
    transform: scale(1.03);
  }

  .green {
    background: #22c55e;
  }

  .blue {
    background: #3b82f6;
  }

  .purple {
    background: #a855f7;
  }

  .span-2 {
    grid-column: span 2;
  }

  @media (max-width: 768px) {
    .span-2 {
      grid-column: span 1;
    }
  }

  @media (max-width: 480px) {
    .task {
      flex-direction: column;
      align-items: flex-start;
    }

    .badge {
      align-self: flex-start;
    }
  }
  .achievement-badge {
    background: linear-gradient(90deg, #f59e0b, #ef4444);
    padding: 10px;
    border-radius: 12px;
    margin-bottom: 15px;
    font-weight: bold;
    text-align: center;
  }
`;
