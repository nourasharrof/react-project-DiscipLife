import { Styles } from "./styleContent.js";
const Content = ({ children }) => {
  return (
    <Styles>
      <div className="content">{children}</div>
    </Styles>
  );
};

export default Content;
