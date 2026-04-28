import styled from "styled-components";

export const Styles = styled.div`
  width: 100%;
  .expense-card-container {
    width: 90%;
    max-width: 540px;
    margin: 0 auto;
    z-index: 1000;
    max-width: 540px;
    padding: 40px 30px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    border: 1px solid #00ff00;
    background: #fff;
  }

  .card-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .card-title img {
    width: 10em;
  }

  .expenses-form {
    display: flex;
    flex-direction: column;
  }

  .expenses-form label {
    margin-top: 10px;
    font-weight: 500;
  }

  .expenses-form input,
  .expenses-form select {
    margin-top: 5px;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #ddd;
    outline: none;
    transition: 0.2s;
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
  }

  .cancel-btn {
    background: #e5e7eb;
    border: none;
    padding: 10px 15px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 10px;
  }
  .add-btn {
    background-color: #00ff00;
    padding: 10px 15px;
    color: white;
    border-radius: 8px;
    font-size: 10px;
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
`;
