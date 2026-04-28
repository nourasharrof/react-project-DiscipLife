import styled from "styled-components";

export const Styles = styled.div`
  .modal-overlay {
    position: fixed;
    inset: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 16px;
    background: rgba(0, 0, 0, 0.5);
  }

  .modal-card {
    width: min(380px, 95vw);
    max-height: 90vh;
    overflow-y: auto;

    background: #fff;
    border-radius: 16px;
    padding: 20px;

    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);

    text-align: center;
  }

  .title {
    font-size: clamp(20px, 3vw, 30px);
    font-weight: 700;
    margin-bottom: 8px;
  }

  .calendar-icon {
    font-size: 26px;
    margin-bottom: 10px;
  }

  .subtitle {
    color: #777;
    font-size: 14px;
    margin-bottom: 20px;
  }

  .summary {
    text-align: left;
    margin-top: 10px;

    padding: 12px;
    border-radius: 16px;

    background: rgba(34, 197, 94, 0.15);
  }

  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 6px 4px;
    border-radius: 8px;

    transition: 0.2s;
  }

  .row:hover {
    background: #fff;
  }

  .income {
    color: green;
    font-weight: bold;
  }

  .expense {
    color: red;
    font-weight: bold;
  }

  .saving {
    color: #2563eb;
    font-weight: bold;
  }

  .divider {
    height: 1px;
    background: #eee;
    margin: 12px 0;
  }

  .actions {
    display: flex;
    gap: 10px;
    margin-top: 20px;
  }

  .btn {
    flex: 1;

    padding: 10px;
    border-radius: 10px;

    border: none;
    cursor: pointer;

    font-weight: bold;
    transition: 0.2s;
  }

  .cancel {
    background: #eee;
  }

  .cancel:hover {
    background: #ddd;
    transform: translateY(-2px);
  }

  .confirm {
    background: #00ff00;
    color: white;
  }

  .confirm:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    .modal-card {
      padding: 16px;
      border-radius: 12px;
    }

    .actions {
      flex-direction: column;
    }

    .btn {
      width: 100%;
    }
  }
`;
