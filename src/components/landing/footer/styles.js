import styled from "styled-components";

export const Styles = styled.div`
  * {
    box-sizing: border-box;
  }

  footer {
    background: #25671e;
    color: #fff;
    padding: 50px 20px 20px;
    width: 100%;
    overflow-x: hidden;
  }

  .footer-columns {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 30px;
    max-width: 1100px;
    margin: auto;
  }

  .column-element {
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-width: 0;
  }

  .column-element h3 {
    font-size: 16px;
    margin: 0;
  }

  .line {
    width: 35px;
    height: 2px;
    background: #00ff00;
  }

  .column-element p {
    font-size: clamp(12px, 1.2vw, 14px);
    line-height: 1.6;
    color: #9ca3af;

    word-break: break-word;
    overflow-wrap: anywhere;
  }

  .column-element ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .column-element ul li {
    margin-bottom: 6px;
  }

  .column-element ul li a {
    font-size: 13px;
    color: #9ca3af;
    text-decoration: none;
    transition: 0.3s;
  }

  .column-element ul li a:hover {
    color: #00ff00;
    padding-left: 5px;
  }

  .social {
    display: flex;
    gap: 15px;
    font-size: 22px;
    margin-top: 10px;
    flex-wrap: wrap;
  }

  .social svg {
    cursor: pointer;
    transition: 0.3s;
  }

  .social svg:hover {
    transform: translateY(-4px) scale(1.1);
  }

  .end {
    text-align: center;
    margin-top: 30px;
    font-size: 12px;
    color: #6b7280;
  }

  @media (max-width: 992px) {
    .footer-columns {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    footer {
      padding: 35px 15px 15px;
    }

    .footer-columns {
      grid-template-columns: 1fr;
      text-align: center;
    }

    .line {
      margin: 0 auto;
    }

    .column-element {
      align-items: center;
    }

    .social {
      justify-content: center;
    }

    .column-element ul li a:hover {
      padding-left: 0;
    }
  }
`;
