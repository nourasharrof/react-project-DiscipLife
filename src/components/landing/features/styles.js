import styled from "styled-components";

export const Styles = styled.div`
  .feature {
    padding: 90px 20px;
    max-width: 1200px;
    margin: auto;
  }

  .address {
    text-align: center;
    margin-bottom: 50px;
  }

  .address h3 {
    background: #25671e;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Luckiest Guy", sans-serif;
  }

  .address p {
    // color: #9ca3af;
    color: #000;
    font-size: 16px;
    max-width: 600px;
    margin: auto;
    line-height: 1.6;
  }

  .featureCard {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
  }

  @media (max-width: 992px) {
    .featureCard {
      grid-template-columns: repeat(2, 1fr);
    }

    .address h3 {
      font-size: 26px;
    }
  }

  @media (max-width: 600px) {
    .feature {
      padding: 60px 15px;
    }

    .featureCard {
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
