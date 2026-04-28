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
    gap: 10px;
    flex-wrap: wrap;
  }

  .head-card {
    font-size: 2rem;
    background: linear-gradient(45deg, #00ff00, #00ff00);
    -webkit-background-clip: text;
    color: transparent;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    font-family: "Luckiest Guy", sans-serif;
  }

  .header img {
    width: 50px;
  }

  .text--enter h3,
  .container--colors h3 {
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

  .colors {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 20px;
  }

  .color-circle {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    cursor: pointer;
    border: 2px solid transparent;
    transition: 0.2s;
  }

  .color-circle:hover {
    transform: scale(1.15);
  }

  .color-circle.active {
    border: 3px solid #00ff00;
    transform: scale(1.2);
  }

  .btn---container {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 10px;
  }

  button {
    padding: 10px 16px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 12px;
    transition: 0.2s;
  }

  .create {
    background: #00ff00;
    color: white;
  }

  .create:hover {
    background: #fff;
    color: #000;
  }

  .cancel {
    background: #ddd;
  }

  .cancel:hover {
    background: #bbb;
  }

  @media (max-width: 768px) {
    .todo--list {
      padding: 30px 20px;
    }

    .head-card {
      font-size: 1.6rem;
    }

    .header img {
      width: 45px;
    }
  }

  @media (max-width: 480px) {
    .todo--list {
      padding: 20px 15px;
    }

    .header {
      flex-direction: column;
      align-items: flex-start;
    }

    .head-card {
      font-size: 1.3rem;
    }

    .colors {
      justify-content: flex-start;
    }

    .color-circle {
      width: 30px;
      height: 30px;
    }

    .btn---container {
      flex-direction: column;
    }

    button {
      width: 100%;
    }
  }
`;
