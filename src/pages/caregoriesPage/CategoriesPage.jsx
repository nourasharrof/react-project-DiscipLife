import CategoriesContent from "../../components/categories/CategoriesContent";
import Header from "../../components/template/header/Header";
import Main from "../../components/template/mainComponent/Main";
import Sidbar from "../../components/template/sidbar/Sidbar";
import Content from "../../components/template/content/Content";

const CategoriesPage = () => {
  return (
    <div className="containerCat" style={{ display: "flex" }}>
      <Sidbar />
      <Main>
        <Header />
        <Content>
          <CategoriesContent />
        </Content>
      </Main>
    </div>
  );
};

export default CategoriesPage;
