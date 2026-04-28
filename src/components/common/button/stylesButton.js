import styled from "styled-components";

export const Styles = styled.div`
  .btn {
    display: inline-block;
    background-color: var(--primary-color);
    color: #fff;
    padding: 0.7rem 1.5rem;
    border: 1px solid var(--primary-color);
    outline: none;
    border-radius: 5rem;
    font-weight: 600;
    font-size: 1rem;
    letter-spacing: 0.1rem;
    cursor: pointer;
    box-shadow: 0 6px 12px rgba(40, 167, 69, 0.6);
    transition: all 0.3s ease;
    width: auto;
    min-width: 150px;
  }

  .btn:hover {
    background-color: var(--primary-color-light);
    color: #000;
    box-shadow: 0 8px 16px rgba(40, 167, 69, 0.8);
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    .btn {
      font-size: 0.9rem;
      padding: 0.6rem 1.2rem;
    }
  }

  @media (max-width: 480px) {
    .btn {
      font-size: 0.8rem;
      padding: 0.5rem 1rem;
      min-width: 120px;
    }
  }

  @media (max-width: 360px) {
    .btn {
      font-size: 0.75rem;
      padding: 0.4rem 0.8rem;
      min-width: 100px;
    }
  }
`;
