import styled from "styled-components";

export const Styles = styled.div`
  width: 100vw;

  .header1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    // width: 100vw;
    margin-left: 200px;
    // box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  }

  .head h2 {
    font-weight: 500;
    font-size: 1.5rem;
    font-family: "Poppins", sans-serif;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
  .head h2 span {
    color: #00ff00;
  }
  .head p {
    font-weight: 400;
    font-family: "Poppins", sans-serif;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
  .search-box {
    background: #eee;
    padding: 0 10px;
    border-radius: 4px;
    display: flex;
    gap: 10px;
    align-items: center;
    border: none;
  }
  .search-icon {
    cursor: pointer;
    border: none;
  }
  .search-box input {
    padding: 10px;
    background: transparent;
    border: none;
  }
  .user--icon {
    color: #00ff00;
    font-size: 1.5rem;
    cursor: pointer;
  }
  .user--icon:hover {
    color: gray;
  }
  @media (max-width: 860px) {
    .search-box {
      display: none;
    }
  }
  @media (max-width: 500px) {
    .header1 {
      margin-left: 4rem;
    }
  }
`;
