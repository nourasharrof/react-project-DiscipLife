import styled from "styled-components";
export const Styles = styled.div`
  .content {
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-left: 200px;
  }
  @media (max-width: 500px) {
    .content {
      margin-left: 0.5rem;
    }
  }
`;
