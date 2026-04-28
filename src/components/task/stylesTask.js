import styled from "styled-components";

export const Styles = styled.div`
  .contain---all {
    display: flex;
    flex-direction: column;
    gap: 24px;
    // padding: 16px;

    max-width: 1100px;
    margin: 0 auto;
  }

  .top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
    flex-wrap: wrap;
  }

  .title--page h2 {
    background: linear-gradient(45deg, #00ff00, #00cc00);
    -webkit-background-clip: text;
    color: transparent;
    font-family: "Luckiest Guy", sans-serif;
    font-size: clamp(22px, 3vw, 32px);
  }

  .title--page p {
    opacity: 0.7;
    margin-top: 4px;
    font-size: clamp(12px, 2vw, 14px);
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

    transition: all 0.2s ease;
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
    background: rgba(0, 0, 0, 0.6);

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 16px;
    z-index: 9999;
  }

  .close-modal {
    position: absolute;
    top: 10px;
    right: 10px;

    background: #f44336;
    color: #fff;
    border: none;

    width: 34px;
    height: 34px;
    border-radius: 50%;

    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 0;
  }

  .Task-item {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);

    border-radius: 14px;
    padding: 14px;

    display: flex;
    flex-direction: column;
    gap: 10px;

    border: 1px solid rgba(0, 255, 0, 0.15);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);

    transition: 0.2s ease;
  }

  .Task-item:hover {
    transform: translateY(-3px);
  }

  .task-header {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }

  .task-header h4 {
    font-size: 15px;
    margin: 0;
    flex: 1;
    min-width: 120px;
  }

  .Task-item p {
    font-size: 13px;
    color: #555;
    margin: 0;
    line-height: 1.4;
  }

  .meta {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
  }

  .meta span {
    font-size: 11px;
    padding: 4px 10px;
    border-radius: 999px;
    background: #f3f4f6;
  }

  .priority.low {
    background: #22c55e;
    color: #fff;
  }

  .priority.medium {
    background: #facc15;
    color: #000;
  }

  .priority.high {
    background: #ef4444;
    color: #fff;
  }

  .delete {
    position: absolute;
    top: 10px;
    right: 10px;

    border: none;
    background: rgba(244, 67, 54, 0.1);
    color: #f44336;

    border-radius: 8px;
    padding: 4px 8px;

    cursor: pointer;
  }

  .checkbox {
    accent-color: #00ff00;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .top {
      flex-direction: column;
      align-items: flex-start;
    }

    .button {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    .contain---all {
      padding: 10px;
    }

    .Task-item {
      padding: 12px;
    }

    .task-header h4 {
      font-size: 14px;
    }

    .meta {
      flex-direction: column;
      align-items: flex-start;
    }

    .button {
      font-size: 13px;
    }
  }
`;
