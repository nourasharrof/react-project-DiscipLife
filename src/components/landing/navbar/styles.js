import styled from "styled-components";

export const Styles = styled.div`
  .navbar {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background: #25671e;
    backdrop-filter: blur(10px);
  }

  .container {
    max-width: 1200px;
    margin: auto;
    padding: 15px 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    font-size: 22px;
    font-weight: bold;
    color: white;
  }

  .gradient {
    color: #00ff00;
  }

  .links {
    display: flex;
    gap: 25px;
    list-style: none;
  }

  .links a {
    color: white;
    text-decoration: none;
    font-size: 20px;
    transition: 0.3s;
  }

  .links a:hover {
    color: #00ff00;
  }

  .menu-btn {
    display: none;
    font-size: 22px;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
  }

  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    pointer-events: none;
    transition: 0.3s;
    z-index: 999;
  }

  .overlay.show {
    opacity: 1;
    pointer-events: all;
  }

  //-------------------
  .sidebar {
    position: fixed;
    top: 0;
    right: -260px;
    width: 260px;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
    padding: 20px;
    transition: 0.3s;
    z-index: 1001;
  }

  .sidebar.show {
    right: 0;
  }

  .sidebar ul {
    list-style: none;
    padding: 0;
    margin-top: 40px;
  }

  .sidebar li {
    margin-bottom: 20px;
  }

  .sidebar a {
    color: white;
    text-decoration: none;
    font-size: 18px;
  }

  .sidebar a:hover {
    color: #00ff00;
  }

  .close-btn {
    background: none;
    border: none;
    color: white;
    font-size: 22px;
    cursor: pointer;
  }

  @media (max-width: 992px) {
    .links {
      display: none;
    }

    .menu-btn {
      display: block;
    }
  }

  @media (max-width: 600px) {
    .logo {
      font-size: 18px;
    }

    .container {
      padding: 12px 15px;
    }
  }
`;
