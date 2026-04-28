import styled from "styled-components";

export const Styles = styled.div`
  .sidebar {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: #00ff00;
    width: 200px;
    color: #27374d;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
    transition: width 0.3s ease-in-out;
  }
  .sidebar--logo {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 900;
    color: #fff;
    padding: 1rem;
    margin-right: 10px;
    letter-spacing: 2px;
    font-family: "Poppins", sans-serif;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }

  .sidebar--logo span {
    color:;
  }
  // .logo-icon {
  //   font-size: 1.7rem;
  // }
  .sidebar-toggle {
    display: none;
  }

  @media (max-width: 500px) {
    .sidebar {
      width: 0;
      overflow: hidden;
    }
    .sidebar.open {
      width: 200px;
      position: fixed;
      top: 0;
      left: 0;
      transition: width 0.3s ease-in-out;
    }
    .sidebar.open .sidebar--logo {
      margin-top: 3rem;
    }
    .sidebar-toggle {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      width: 50px;
      height: 30px;
      border-radius: 4px;
      background: #27374d;
      color: #fff;
      position: absolute;
      z-index: 10;
      margin: 10px 5px;
      cursor: pointer;
    }
  }
`;
