import styled from "styled-components";

export const Styles = styled.div`
  width: 100%;
  padding: 10px;

  .expense-card-container {
    width: 100%;
    max-width: 540px;
    margin: 0 auto;
    z-index: 1000;
    padding: 30px 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    border: 1px solid #00ff00;
    background: #fff;
  }

  .card-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }

  .card-title img {
    width: 50px;
  }

  .expenses-form {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .expenses-form label {
    margin-top: 8px;
    font-weight: 500;
    font-size: 14px;
  }

  .expenses-form input,
  .expenses-form select {
    margin-top: 4px;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #ddd;
    outline: none;
    transition: 0.2s;
    font-size: 14px;
  }

  .expenses-form input:focus,
  .expenses-form select:focus {
    border-color: #00ff00;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 15px;
    flex-wrap: wrap;
  }

  .add-btn,
  .cancel-btn {
    flex: 1;
    min-width: 120px;
    padding: 10px;
    border-radius: 8px;
    font-size: 12px;
    border: none;
    cursor: pointer;
  }

  .add-btn {
    background-color: #00ff00;
    color: white;
  }

  .add-btn:hover {
    background-color: #fff;
    color: #000;
  }

  .cancel-btn {
    background-color: #f44336;
    color: white;
  }

  .cancel-btn:hover {
    background-color: #ee8985;
  }

  @media (max-width: 600px) {
    .expense-card-container {
      padding: 20px 15px;
    }

    .card-title {
      flex-direction: column;
      align-items: flex-start;
    }

    .card-title img {
      width: 45px;
      align-self: flex-end;
    }

    .buttons {
      flex-direction: column;
    }

    .add-btn,
    .cancel-btn {
      width: 100%;
    }
  }
`;
