import styled from "styled-components";

export const Styles = styled.div`
  .card-opi {
    padding: 25px;
    border-radius: 16px;

    backdrop-filter: blur(10px);
    background: #fff;

    display: flex;
    flex-direction: column;
    gap: 15px;

    transition: all 0.3s ease;
    min-height: 220px;
  }

  .stars {
    color: #facc15;
    font-size: 18px;
  }

  .description {
    font-size: 14px;
    color: #000;
    line-height: 1.6;
  }

  .person {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 10px;
  }

  .img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #111;
  }

  .img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .text {
    display: flex;
    flex-direction: column;
  }

  .name {
    font-size: 14px;
    font-weight: 600;
    color: #fff;
    margin: 0;
  }

  .job {
    font-size: 12px;
    color: #00ff00;
    margin: 0;
  }

  .card-opi:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(0, 255, 0, 0.1);
  }

  @media (max-width: 992px) {
    .card-opi {
      padding: 20px;
    }

    .description {
      font-size: 13px;
    }
  }

  @media (max-width: 600px) {
    .card-opi {
      padding: 18px;
      min-height: auto;
    }

    .description {
      font-size: 12px;
    }

    .img {
      width: 40px;
      height: 40px;
    }

    .name {
      font-size: 13px;
    }

    .job {
      font-size: 11px;
    }
  }
`;
