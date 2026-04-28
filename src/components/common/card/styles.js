import styled from "styled-components";

export const Styles = styled.div`
  .card {
    border-radius: 16px;
    padding: 20px;
    text-align: center;
    position: relative;

    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    transition: all 0.3s ease;

    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
  }

  .card:hover {
    transform: translateY(-10px);
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35);
  }

  .icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    width: 55px;
    height: 55px;
    border-radius: 12px;

    font-size: 24px;
    margin-bottom: 12px;

    transition: 0.3s;
  }

  .card:hover .icon {
    transform: scale(1.1) rotate(3deg);
  }

  h3 {
    font-size: 18px;
    margin: 10px 0;

    color: #25671e;
    color: red;
  }

  .line {
    display: block;
    width: 40px;
    height: 2px;
    background: #00ff00;
    margin: 8px auto;
    border-radius: 5px;
  }

  p {
    font-size: 13px;
    color: #000;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    .card {
      padding: 18px;
    }

    h3 {
      font-size: 15px;
    }

    p {
      font-size: 12px;
    }

    .icon {
      width: 50px;
      height: 50px;
      font-size: 20px;
    }
  }

  @media (max-width: 480px) {
    .card {
      padding: 15px;
    }

    p {
      font-size: 12px;
    }

    .line {
      width: 30px;
    }
  }
`;
