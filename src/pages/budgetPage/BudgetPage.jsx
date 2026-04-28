import React from "react";

import Header from "../../components/template/header/Header";
import Main from "../../components/template/mainComponent/Main";
import Sidbar from "../../components/template/sidbar/Sidbar";
import Content from "../../components/template/content/Content";
import BudgetContent from "../../components/budgets/BudgetContent";

const BudgetPage = () => {
  return (
    <div className="containerCat" style={{ display: "flex" }}>
      <Sidbar />
      <Main>
        <Header />
        <Content>
          <BudgetContent />
        </Content>
      </Main>
    </div>
  );
};

export default BudgetPage;
