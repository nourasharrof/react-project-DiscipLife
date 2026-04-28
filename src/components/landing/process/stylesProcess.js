import styled from "styled-components";

export const Styles = styled.div`
  background-color: #94ec89;
  .container1 {
    padding: 90px 20px;
    max-width: 1200px;
    margin: auto;
  }

  .address {
    text-align: center;
    margin-bottom: 50px;
  }

  .address h3 {
    font-size: 32px;
    color: #fff;
    margin-bottom: 10px;
    line-height: 1.3;
    background: #25671e;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Luckiest Guy", sans-serif;
  }

  .address p {
    color: #000;
    font-size: 16px;
    max-width: 600px;
    margin: auto;
    line-height: 1.6;
  }

  .process-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }

  .process-cards > * {
    transition: all 0.3s ease;
  }

  .process-cards > *:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 992px) {
    .process-cards {
      grid-template-columns: repeat(2, 1fr);
    }

    .address h3 {
      font-size: 26px;
    }
  }

  @media (max-width: 600px) {
    .container1 {
      padding: 60px 15px;
    }

    .process-cards {
      grid-template-columns: 1fr;
    }

    .address h3 {
      font-size: 22px;
    }

    .address p {
      font-size: 14px;
    }
  }
`;
