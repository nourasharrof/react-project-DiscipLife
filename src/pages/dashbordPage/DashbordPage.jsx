import React from "react";

import DashbordContent from "../../components/dashbord/DashbordContent";
import Header from "../../components/template/header/Header";
import Main from "../../components/template/mainComponent/Main";
import Sidbar from "../../components/template/sidbar/Sidbar";
import Content from "../../components/template/content/Content";

const DashbordPage = () => {
  return (
    <div className="contain-all" style={{ display: "flex" }}>
      <Sidbar />
      <Main>
        <Header />
        <Content>
          <DashbordContent />
        </Content>
      </Main>
    </div>
  );
};

export default DashbordPage;
