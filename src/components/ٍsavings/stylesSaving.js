import styled from "styled-components";

export const Styles = styled.div`
  .header h1 {
    font-size: clamp(22px, 3vw, 32px);
    background: linear-gradient(45deg, #00ff00, #00ff00);
    -webkit-background-clip: text;
    color: transparent;
    font-family: "Poppins", sans-serif;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    font-family: "Luckiest Guy", sans-serif;
  }

  .header p {
    opacity: 0.7;
    margin-bottom: 20px;
  }

  .cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
  }

  .card {
    position: relative;
    overflow: hidden;

    border-radius: 14px;
    padding: 16px;

    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);

    transition: 0.25s ease;
  }

  .card:hover {
    transform: translateY(-6px) scale(1.02);
  }

  .card h4 {
    font-size: 1rem;
    margin-bottom: 10px;
    color: #000;
  }

  .card.total {
    border-left: 4px solid #3b82f6;
    background: linear-gradient(
      135deg,
      rgba(0, 102, 255, 0.18),
      rgba(0, 102, 255, 0.05)
    );
  }

  .card.highlight {
    border-left: 4px solid #00ff00;
    background: linear-gradient(
      135deg,
      rgba(0, 255, 0, 0.18),
      rgba(0, 255, 0, 0.05)
    );
  }

  .card.total h2 {
    color: #3b82f6;
    font-size: 2rem;
    font-weight: bold;
  }

  .card.highlight h2 {
    color: #00ff00;
    font-size: 2rem;
    font-weight: bold;
  }

  /* shine effect */
  .card::after {
    content: "";
    position: absolute;
    width: 200%;
    height: 200%;

    background: rgba(255, 255, 255, 0.1);

    top: -50%;
    left: -50%;

    transform: rotate(25deg);
    pointer-events: none;
  }

  .banner {
    margin: 20px 0;

    background: rgb(230, 241, 162);
    padding: 16px;

    border-radius: 12px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    flex-wrap: wrap;
    gap: 12px;

    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }

  .banner h3 {
    color: #00ff00;
  }

  .close-btn {
    background: #00ff00;
    color: white;

    border: none;
    padding: 10px 16px;

    border-radius: 8px;
    cursor: pointer;

    transition: 0.3s;
    white-space: nowrap;
  }

  .close-btn:hover {
    background: #fff;
    color: #000;
  }

  .saving-table {
    background: white;
    padding: 18px;

    border-radius: 16px;

    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);

    overflow-x: auto;
  }
  .saving-table h3 {
    color: #00ff00;
  }

  table {
    width: 100%;
    border-collapse: collapse;

    min-width: 600px;
  }

  th {
    background: #f3f4f6;
    padding: 12px;

    font-size: 14px;
    text-align: center;
  }

  td {
    padding: 12px;
    text-align: center;
    font-size: 14px;
  }

  tr:nth-child(even) {
    background: #fafafa;
  }

  .delete-btn {
    color: #ee0f0f;
    background: #fff;

    font-weight: 600;
    border: none;

    cursor: pointer;
  }

  .delete-btn:hover {
    color: #000;
  }

  .modal {
    position: fixed;
    inset: 0;

    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, 0.5);

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 10px;
    z-index: 9999;
  }

  .close-modal {
    position: absolute;
    top: 10px;
    right: 10px;

    background-color: #f44336;
    color: white;

    border: none;
    border-radius: 50%;

    padding: 6px 10px;
    font-size: 14px;

    cursor: pointer;
  }

  @media (max-width: 768px) {
    .cards-container {
      grid-template-columns: 1fr;
    }

    .banner {
      flex-direction: column;
      align-items: flex-start;
    }

    .close-btn {
      width: 100%;
    }

    table {
      font-size: 12px;
    }

    th,
    td {
      padding: 10px;
    }
  }

  @media (max-width: 480px) {
    .card h2 {
      font-size: 1.5rem;
    }

    .banner {
      text-align: left;
    }
  }
`;
