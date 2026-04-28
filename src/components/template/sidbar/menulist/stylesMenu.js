import styled from "styled-components";

export const Styles = styled.div`
  .menu--list {
    display: flex;
    list-style: none;
    flex-direction: column;
    gap: 0.1rem;
    padding: 10px;
  }
  .menu--list-item {
    padding: 1rem;
    border-radius: 5px;
    overflow: hidden;
    font-size: 1rem;
    font-weight: 600;
    text-transform: capitalize;
    text-decoration: none;
  }
  .menu--list-item:hover {
    background: #94ec89;

    cursor: pointer;
    transition: all 0.3s ease-in;
  }
  .menu--list-item .active {
    background: #fff;
    display: block;
    width: 100%;
    color: #00ff00;
    padding: 10px 15px;
    border-radius: 6px;
    box-sizing: border-box;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
  .menu--list-item a {
    text-decoration: none;
    overflow: hidden;
    gap: 20px;
    align-items: center;
    // color: #27374d;
    color: #fff;
    font-weight: 700;
    font-family: "Poppins", sans-serif;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
  .icon {
    margin-right: 1rem;
    font-weight: 600;
  }
`;
