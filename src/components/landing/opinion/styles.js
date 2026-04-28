import styled from "styled-components";

export const Styles = styled.div`
  * {
    box-sizing: border-box;
  }
  background-color: #94ec89;
  .opinion {
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
    background: #25671e;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Luckiest Guy", sans-serif;
  }

  .address p {
    font-size: 16px;
    color: #000;
    max-width: 600px;
    margin: auto;
    line-height: 1.6;
  }

  .OpinionCard {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
  }

  .OpinionCard > * {
    transition: all 0.3s ease;
  }

  .OpinionCard > *:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 992px) {
    .OpinionCard {
      grid-template-columns: repeat(2, 1fr);
    }

    .address h3 {
      font-size: 26px;
    }
  }

  @media (max-width: 600px) {
    .opinion {
      padding: 60px 15px;
    }

    .OpinionCard {
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
