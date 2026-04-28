import styled from "styled-components";

export const Styles = styled.div`
  .work_flow {
    padding: 100px 20px;
    background: #fff;
    color: white;
    text-align: center;
  }

  .address h3 {
    font-size: 32px;
    margin-bottom: 15px;
    background: #25671e;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Luckiest Guy", sans-serif;
  }

  .address p {
    font-size: 1.1rem;
    opacity: 0.8;
    margin-bottom: 50px;
    color: #000;
  }

  .circles {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
  }

  .circle {
    // background: rgba(255, 255, 255, 0.08);
    background: #94ec89;
    border-radius: 25px;
    padding: 25px 20px;
    width: 180px;
    position: relative;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
    cursor: pointer;
  }

  .circle:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.5);
  }

  .number {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;
    font-weight: bold;

    background: #000;

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin: 0 auto 15px auto;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
  }

  .circle:hover .number {
    transform: scale(1.2);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);
  }

  .text h3 {
    font-size: 1.2rem;
    margin-bottom: 5px;
    color: #25671e;
    font-weight: 800;
  }

  .text p {
    font-size: 1rem;
    font-weight: 700;
    opacity: 0.8;
    color: #000;
  }

  .arrow {
    margin-top: 10px;
    color: #ff7e5f;
    font-size: 1rem;
    transition: transform 0.3s ease;
  }

  .circle:hover .arrow {
    transform: translateX(5px);
  }

  @media (max-width: 1024px) {
    .circles {
      gap: 20px;
    }

    .circle {
      width: 150px;
      padding: 20px 15px;
    }

    .number {
      width: 50px;
      height: 50px;
      font-size: 1.5rem;
    }

    .text h3 {
      font-size: 1.1rem;
    }

    .text p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 600px) {
    .circles {
      flex-direction: column;
      align-items: center;
    }

    .circle {
      width: 80%;
    }
  }
`;
