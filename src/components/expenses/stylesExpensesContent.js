import styled from "styled-components";

export const Styles = styled.div`
  .contain---all {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 12px;
  }

  .top h2 {
    font-size: 2.2rem;
    background: linear-gradient(45deg, #00ff00, #00ff00);
    -webkit-background-clip: text;
    color: transparent;
    font-family: "Luckiest Guy", sans-serif;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }

  .top p {
    opacity: 0.7;
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
    white-space: nowrap;
  }

  .button:hover {
    background: #fff;
    color: #000;
    transform: translateY(-2px);
  }

  .modal {
    position: fixed;
    inset: 0;
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
    padding: 6px 10px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 14px;
    transition: 0.2s ease;
  }

  .close-modal:hover {
    background-color: #e53935;
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 14px;
  }

  .expenses-item {
    background: #ffffff;
    border-radius: 12px;
    padding: 12px 14px;
    border: 1px solid #eef0f5;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
    transition: 0.2s ease;
  }

  .expenses-item:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  }

  .heder {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }

  .body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
  }

  .left {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }

  .amount-text {
    font-size: 13px;
    color: #555;
    display: flex;
    align-items: center;
    gap: 4px;
    margin: 0;
    flex-wrap: wrap;
  }

  .amont {
    font-weight: 700;
    color: #1f8f3a;
  }

  .dolar {
    color: #1f8f3a;
  }

  .category {
    display: flex;
    align-items: center;
    gap: 5px;
    background: #f2f4f8;
    padding: 3px 8px;
    border-radius: 999px;
    font-size: 11px;
    color: #444;
    white-space: nowrap;
  }

  .date {
    font-size: 11px;
    color: #999;
    white-space: nowrap;
  }

  .delete {
    border: none;
    background: white;
    color: #f44336;
    border-radius: 8px;
    padding: 4px 8px;
    cursor: pointer;
    transition: 0.2s;
  }

  .delete:hover {
    background: #f44336;
    color: white;
  }

  @media (max-width: 768px) {
    .top {
      flex-direction: column;
      align-items: flex-start;
    }

    .body {
      flex-direction: column;
      align-items: flex-start;
    }

    .heder {
      width: 100%;
    }

    .date {
      align-self: flex-end;
    }
  }

  @media (max-width: 480px) {
    .expenses-item {
      padding: 10px;
    }

    .button {
      width: 100%;
      text-align: center;
    }
  }
`;
