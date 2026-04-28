import styled from "styled-components";

export const Styles = styled.div`
  .settings-page {
    width: 100%;
    background: #ffffff;
    // padding: 20px;
    box-sizing: border-box;
  }

  .settings-header {
    margin-bottom: 30px;
  }

  .settings-header h2 {
    font-size: clamp(1.6rem, 2vw, 2.2rem);
    background: linear-gradient(45deg, #00ff00, #00ff00);
    -webkit-background-clip: text;
    color: transparent;
    font-family: "Luckiest Guy", sans-serif;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }

  .settings-header p {
    color: #6b7280;
    margin-top: 6px;
    font-size: 14px;
  }

  .settings-row {
    display: grid;
    grid-template-columns: 150px 1fr 120px;
    align-items: center;
    gap: 10px;
    padding: 16px 0;
    border-bottom: 1px solid #e5e7eb;
  }

  .label {
    font-size: 14px;
    color: #6b7280;
  }

  .value {
    font-size: 15px;
    color: #111827;
    word-break: break-word;
  }

  .value input {
    width: 100%;
    padding: 10px;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    outline: none;
    transition: 0.2s;
  }

  .value input:focus {
    border-color: #00ff00;
  }

  .settings-row button {
    padding: 8px 14px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    background: #00ff00;
    color: white;
    font-size: 13px;
    transition: 0.2s;
    white-space: nowrap;
  }

  .settings-row button:hover {
    background: #49a351;
  }

  .logout {
    margin-top: 30px;
    width: 160px;
    padding: 12px;
    background: #ef4444;
    border: none;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    box-shadow: 0 6px 18px rgba(239, 68, 68, 0.35);
    cursor: pointer;
    transition: 0.2s;
  }

  .logout:hover {
    background: #dc2626;
    transform: translateY(-2px);
  }

  .logout-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    padding: 10px;
  }

  .logout-modal {
    background: #ffffff;
    padding: 24px;
    border-radius: 12px;
    width: 100%;
    max-width: 350px;
    text-align: center;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    animation: fadeIn 0.2s ease-in-out;
  }

  .logout-modal h3 {
    margin-bottom: 10px;
    color: #00ff00;
    font-size: 18px;
  }

  .logout-modal p {
    color: #555;
    font-size: 14px;
  }

  .logout-actions {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-top: 15px;
  }

  .btn-cancel,
  .btn-logout {
    flex: 1;
    padding: 10px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }

  .btn-cancel {
    background: #e5e7eb;
  }

  .btn-cancel:hover {
    background: #d1d5db;
  }

  .btn-logout {
    background: #ef4444;
    color: #fff;
  }

  .btn-logout:hover {
    background: #dc2626;
  }

  .error-text {
    color: #ef4444;
    font-size: 12px;
    margin-top: 4px;
    display: block;
  }

  @media (max-width: 768px) {
    .settings-row {
      grid-template-columns: 1fr;
      align-items: flex-start;
    }

    .settings-row button {
      width: 100%;
      margin-top: 8px;
    }

    .label {
      font-weight: bold;
    }

    .logout {
      width: 100%;
    }

    .logout-actions {
      flex-direction: column;
    }
  }

  @media (max-width: 480px) {
    .settings-header h2 {
      font-size: 1.5rem;
    }

    .settings-page {
      padding: 15px;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
