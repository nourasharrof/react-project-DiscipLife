import ReportsContent from "../../components/reports/ReportsContent";
import Header from "../../components/template/header/Header";
import Main from "../../components/template/mainComponent/Main";
import Sidbar from "../../components/template/sidbar/Sidbar";
import Content from "../../components/template/content/Content";

const ReportsPage = () => {
  return (
    <div className="containerCat" style={{ display: "flex" }}>
      <Sidbar />
      <Main>
        <Header />
        <Content>
          <ReportsContent />
        </Content>
      </Main>
    </div>
  );
};

export default ReportsPage;
