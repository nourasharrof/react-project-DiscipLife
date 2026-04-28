import styled from "styled-components";

export const Styles = styled.div`
  #home {
    width: 100%;
  }

  .containAll {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
    background-image: url("/hom6.jpg");
  }

  .min_home_contain {
    width: 100%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .text {
    max-width: 600px;
    color: white;
  }

  .text h1 {
    font-size: 48px;
    line-height: 1.3;
    font-weight: bold;
    margin-bottom: 20px;
    color: var(--secondary_color);
    text-shadow: 2px 2px 3px #25671e;
    font-family: "Luckiest Guy", sans-serif;
  }

  .text h1 span {
    color: #00ff00;
  }

  .text p {
    font-size: 18px;
    color: #000;
    margin-bottom: 25px;
    width: 100%;
    max-width: 100%;
    line-height: 1.6;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }
  .containAll p {
    font-size: 20px;
    width: 30rem;
    font-weight: 600;
    font-family: "Baloo 2", sans-serif;
  }

  .btn {
    padding: 12px 25px;
    background: #00ff00;
    border: none;
    border-radius: 8px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: "Baloo 2", sans-serif;
  }

  .btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 255, 0, 0.4);
  }

  @media (max-width: 992px) {
    .text h1 {
      font-size: 36px;
    }

    .text p {
      font-size: 16px;
    }

    .min_home_contain {
      justify-content: center;
      text-align: center;
    }
  }

  @media (max-width: 600px) {
    .text {
      max-width: 100%;
    }

    .text h1 {
      font-size: 26px;
      line-height: 1.4;
    }

    .text p {
      font-size: 14px;
    }

    .btn {
      width: 100%;
      padding: 14px;
    }

    .containAll {
      padding: 0 15px;
    }
  }
`;
