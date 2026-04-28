import styled from "styled-components";

export const Styles = styled.div`
  .auth-modal {
    position: fixed;
    inset: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    backdrop-filter: blur(6px);

    opacity: 0;
    pointer-events: none;

    transition: opacity 0.4s ease;

    z-index: 9999;
    padding: 20px;
  }

  .auth-modal.show {
    opacity: 1;
    pointer-events: auto;
  }

  .auth-container {
    width: 100%;
    max-width: 900px;

    display: flex;

    border-radius: 22px;
    overflow: hidden;

    background: rgba(255, 255, 255, 0.08);

    backdrop-filter: blur(22px);
    -webkit-backdrop-filter: blur(22px);

    border: 1px solid rgba(255, 255, 255, 0.18);

    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);

    position: relative;

    transform: translateY(-30px) scale(0.95);
    transition: all 0.4s ease;
  }

  .auth-modal.show .auth-container {
    transform: translateY(0) scale(1);
  }

  .close-btn {
    position: absolute;
    top: 12px;
    right: 15px;

    font-size: 28px;
    background: none;
    border: none;

    color: white;
    cursor: pointer;

    z-index: 10;
  }

  .close-btn:hover {
    color: #ff4d4d;
  }

  .auth-left {
    flex: 1;
    min-width: 0;

    padding: 40px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    color: #25671e;

    background: rgba(255, 255, 255, 0.06);

    backdrop-filter: blur(15px);

    border-right: 1px solid rgba(255, 255, 255, 0.12);
  }

  .auth-left button {
    margin-top: 15px;

    padding: 12px 18px;

    border-radius: 12px;
    border: none;

    background: #00ff00;
    color: #fff;

    font-weight: bold;
    cursor: pointer;

    transition: 0.3s;
  }

  .auth-left button:hover {
    transform: scale(1.03);
    color: #000;
    background: rgba(255, 255, 255, 0.06);
  }

  .auth-right {
    flex: 1;
    min-width: 0;

    padding: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: rgba(255, 255, 255, 0.04);

    backdrop-filter: blur(18px);
  }

  .form {
    width: 100%;
    max-width: 320px;

    display: flex;
    flex-direction: column;
    gap: 12px;

    padding: 22px;

    // background: rgba(255, 255, 255, 0.06);

    border-radius: 14px;

    border: 1px solid rgba(255, 255, 255, 0.15);

    backdrop-filter: blur(12px);

    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  }

  .form input {
    padding: 12px;

    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.12);

    // background: rgba(255, 255, 255, 0.05);
    color: white;

    outline: none;

    transition: 0.3s;
  }

  .form input:focus {
    border-color: #00ff00;
    background: rgba(255, 255, 255, 0.08);
    color: #000;
  }

  .form button {
    padding: 12px;

    border: none;
    border-radius: 10px;

    background: #00ff00;
    color: #fff;

    font-weight: bold;

    cursor: pointer;

    transition: 0.3s;
  }

  .form button:hover {
    transform: scale(1.03);
    color: #000;
    background: rgba(255, 255, 255, 0.06);
  }

  .error-text {
    font-size: 12px;
    color: rgba(255, 80, 80, 0.9);
    margin-top: -6px;
  }

  @media (max-width: 768px) {
    .auth-container {
      flex-direction: column;
    }

    .auth-left,
    .auth-right {
      width: 100%;
      padding: 25px;
    }

    .form {
      max-width: 100%;
    }
  }

  .auth-modal.hide {
    opacity: 0 !important;
    pointer-events: none !important;
  }

  .auth-modal.hide .auth-container {
    transform: translateY(-30px) scale(0.95) !important;
    transition: none !important;
  }
`;
