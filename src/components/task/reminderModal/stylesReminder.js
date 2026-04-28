import styled from "styled-components";

export const Styles = styled.div`
  .custom-reminder-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  }

  .custom-reminder-modal .modal-content {
    background: #fff;
    padding: 20px 30px;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  }

  .custom-reminder-modal .modal-buttons {
    margin-top: 15px;
    display: flex;
    justify-content: center;
    gap: 15px;
  }

  .custom-reminder-modal .confirm-btn {
    background-color: #28a745;
    color: #fff;
    padding: 8px 14px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }

  .custom-reminder-modal .snooze-btn {
    background-color: #ffc107;
    color: #000;
    padding: 8px 14px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }
`;
