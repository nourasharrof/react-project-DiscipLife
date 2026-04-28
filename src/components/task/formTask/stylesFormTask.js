import styled from "styled-components";

export const Styles = styled.div`
  width: 100%;
  padding: 6px;

  .task-card-container {
    width: 100%;
    max-width: 420px;
    margin: 0 auto;

    background: #fff;
    border-radius: 12px;

    padding: 18px 16px;

    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 255, 0, 0.2);
  }

  .card-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #00ff00;
    margin-bottom: 10px;
  }

  .card-title h2 {
    font-size: 18px;
    margin: 0;
  }

  .card-title img {
    width: 40px;
  }

  /* ================= FORM ================= */
  .task-form {
    display: flex;
    flex-direction: column;
    gap: 6px; /* 🔥 أقل spacing */
  }

  .task-form label {
    font-size: 12px;
    font-weight: 600;
    margin-top: 4px;
  }

  .task-form input,
  .task-form textarea,
  .task-form select {
    width: 100%;
    padding: 8px 10px;
    border-radius: 8px;

    border: 1px solid #ddd;
    font-size: 13px;

    outline: none;
  }

  .task-form textarea {
    min-height: 60px;
    resize: none;
  }

  .task-form input:focus,
  .task-form textarea:focus,
  .task-form select:focus {
    border-color: #00ff00;
  }

  .buttons {
    display: flex;
    gap: 8px;
    margin-top: 10px;
  }

  .add-btn,
  .cancel-btn {
    flex: 1;
    padding: 8px 10px;
    border-radius: 8px;

    font-size: 12px;
    font-weight: 600;

    border: none;
    cursor: pointer;
  }

  .add-btn {
    background: #00ff00;
    color: #000;
  }

  .add-btn:hover {
    background: #eaffea;
  }

  .cancel-btn {
    background: #f44336;
    color: #fff;
  }

  .cancel-btn:hover {
    background: #ff6b6b;
  }

  .react-datepicker-wrapper {
    width: 100%;
  }

  .react-datepicker__input-container input {
    width: 100%;
    padding: 8px 10px;
    font-size: 13px;
    border-radius: 8px;
  }

  @media (max-width: 480px) {
    .task-card-container {
      max-width: 95%;
      padding: 14px;
    }

    .card-title h2 {
      font-size: 16px;
    }
  }
`;
