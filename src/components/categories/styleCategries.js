import styled from "styled-components";

export const Styles = styled.div`
  .main-title {
    background: linear-gradient(45deg, #00ff00, #00ff00);
    -webkit-background-clip: text;
    color: transparent;
    font-family: "Poppins", sans-serif;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    font-family: "Luckiest Guy", sans-serif;
  }

  .sub-title {
    color: #666;
    margin-bottom: 25px;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .card {
    background: #fff;
    border-radius: 16px;
    padding: 20px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
    display: flex;
    flex-direction: column;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    gap: 10px;
    flex-wrap: wrap;
  }

  .card-header h3 {
    font-size: 20px;
    color: #00ff00;
  }

  .card-body {
    flex: 1;
  }

  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    max-height: 180px;
    overflow-y: auto;
  }

  .chip {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 10px;
    border-radius: 50px;
    background: #f5f5f5;
    cursor: pointer;
    transition: 0.2s;
    white-space: nowrap;
  }

  .chip:hover {
    background: #eee;
    transform: scale(1.05);
  }

  .chip.active {
    background: #fff;
    color: #000;
    outline: 2px solid #00ff00;
  }

  .color {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }

  .emoji {
    font-size: 16px;
  }

  .delete {
    border: none;
    background: transparent;
    cursor: pointer;
    font-size: 14px;
    color: red;
  }

  .empty {
    color: #777;
    font-size: 14px;
  }

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }

  .close-modal {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #f44336;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 16px;
  }

  .close-modal:hover {
    background-color: #e53935;
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
    transition: all 0.2s ease-in-out;
  }

  .button:hover {
    background: #fff;
    color: #000;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    .cards {
      grid-template-columns: 1fr;
    }

    .button {
      width: 100%;
    }

    .chip {
      flex: 1 1 auto;
      justify-content: space-between;
    }
  }
`;
