import styled from "styled-components";

export const Styles = styled.div`
  .todo--list {
    width: 90%;
    max-width: 540px;
    margin: 0 auto;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    padding: 40px 30px;
    border-radius: 12px;
    height: fit-content;
    z-index: 999;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
    flex-wrap: wrap;
    gap: 10px;
  }

  .header h2 {
    font-size: 2rem;
    background: linear-gradient(45deg, #00ff00, #00ff00);
    -webkit-background-clip: text;
    color: transparent;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    font-family: "Luckiest Guy", sans-serif;
  }

  .header img {
    width: 60px;
  }

  .text--enter h3,
  .container--emoji h3 {
    margin-bottom: 10px;
    font-size: 1.1rem;
  }

  .text--enter input {
    outline: none;
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 8px;
    border: 1px solid #00ff00;
    font-size: 14px;
  }

  .emojis {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 20px;
  }

  .emoji-circle {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    cursor: pointer;
    border: 2px solid transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    transition: 0.2s;
    background: #f5f5f5;
  }

  .emoji-circle:hover {
    transform: scale(1.1);
  }

  .emoji-circle.active {
    transform: scale(1.2);
    border: 2px solid #333;
  }

  /* BUTTONS */
  .btn---container {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 15px;
  }

  .cancel,
  .create {
    padding: 10px 16px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 12px;
    border: none;
    transition: 0.2s;
  }

  .create {
    background-color: #00ff00;
    color: white;
  }

  .create:hover {
    background-color: #fff;
    color: #000;
  }

  .cancel {
    background-color: #f44336;
    color: white;
  }

  .cancel:hover {
    background-color: #ee8985;
  }

  /* ================= RESPONSIVE ================= */

  /* TABLET */
  @media (max-width: 768px) {
    .todo--list {
      padding: 30px 20px;
    }

    .header h2 {
      font-size: 1.6rem;
    }

    .header img {
      width: 50px;
    }
  }

  /* MOBILE */
  @media (max-width: 480px) {
    .todo--list {
      padding: 20px 15px;
    }

    .header {
      flex-direction: column;
      align-items: flex-start;
    }

    .header h2 {
      font-size: 1.4rem;
    }

    .emoji-circle {
      width: 34px;
      height: 34px;
      font-size: 16px;
    }

    .btn---container {
      flex-direction: column;
    }

    .cancel,
    .create {
      width: 100%;
    }
  }
`;
