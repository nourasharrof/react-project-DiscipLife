import styled from "styled-components";

export const Styles = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 15px;
    flex-wrap: wrap;

    margin-bottom: 25px;
  }

  .title {
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

  .buttons {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  .button {
    padding: 10px 16px;
    border-radius: 10px;
    border: none;

    background: #00ff00;
    color: #fff;

    font-size: 14px;
    font-weight: 600;

    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  .button:hover {
    background: #fff;
    color: #000;
    transform: translateY(-2px);
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

    z-index: 9999;
    padding: 10px;
  }

  .close-modal {
    position: absolute;
    top: 10px;
    right: 10px;

    background-color: #f44336;
    color: white;

    border: none;
    border-radius: 50%;

    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 6px 10px;
    font-size: 14px;
  }

  .grid-cards {
    display: grid;

    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 18px;

    margin-bottom: 25px;
  }

  .card {
    padding: 18px;
    border-radius: 16px;

    font-weight: 600;

    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);

    transition: 0.3s;
  }

  .card:hover,
  .cardProgress:hover {
    transform: translateY(-6px);
  }

  .income,
  .expense,
  .remaining {
    background: #fff;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }

  .income p,
  .expense p,
  .remaining p {
    color: #000;
  }

  .expense h2 {
    color: red;
  }

  .income h2 {
    color: #16a34a;
  }

  .income {
    border-left: 4px solid #22c55e;
  }

  .expense {
    border-left: 4px solid #ef4444;
  }

  .remaining {
    border-left: 4px solid #3b82f6;
  }

  .progress-wrapper {
    background: white;
    padding: 22px;
    border-radius: 16px;

    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);

    margin-bottom: 25px;
  }

  .header-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 12px;

    margin-bottom: 15px;
  }

  .cardProgress {
    background: linear-gradient(135deg, #fff6c2, #f7e7a1, #d4af37);

    padding: 14px;
    border-radius: 12px;

    text-align: center;
    font-weight: 600;

    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);

    transition: 0.25s ease;
  }

  .cardProgress p {
    color: #065f46;
    font-size: 13px;
    margin-bottom: 6px;
  }

  .progress-header {
    display: flex;
    justify-content: space-between;

    font-weight: 600;
    font-size: 14px;

    margin-bottom: 10px;

    flex-wrap: wrap;
    gap: 6px;
  }

  .progress-bar {
    height: 12px;
    background: #e5e7eb;
    border-radius: 999px;

    overflow: hidden;
  }

  .progress-bar.small {
    height: 8px;
  }

  .progress-fill {
    height: 100%;
    transition: width 0.4s ease;
  }

  .budget-warning {
    margin-top: 12px;
    padding: 12px;

    border-radius: 10px;
    background: #fee2e2;

    color: #b91c1c;
    font-weight: 700;
    text-align: center;
  }

  .section {
    background: white;
    padding: 22px;

    border-radius: 16px;

    margin-bottom: 25px;

    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }

  .category-item {
    margin-bottom: 16px;
  }

  .category-header {
    display: flex;
    justify-content: space-between;

    font-weight: 500;
    margin-bottom: 6px;

    flex-wrap: wrap;
    gap: 6px;
  }

  .budget-table {
    background: white;
    padding: 22px;

    border-radius: 16px;

    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);

    overflow-x: auto;
  }

  table {
    width: 100%;
    border-collapse: collapse;

    margin-top: 12px;

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

  @media (max-width: 900px) {
    .header {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  @media (max-width: 768px) {
    .progress-header {
      flex-direction: column;
      gap: 6px;
    }

    th,
    td {
      padding: 10px;
      font-size: 12px;
    }
  }

  @media (max-width: 480px) {
    .button {
      width: 100%;
    }

    .buttons {
      width: 100%;
    }
  }

  .head-category {
    color: #00ff00;
  }

  .budget-table h3 {
    color: #00ff00;
  }
`;
