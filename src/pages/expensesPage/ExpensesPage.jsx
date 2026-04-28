import React from "react";

import ExpensesContent from "../../components/expenses/ExpensesContent/";
import Header from "../../components/template/header/Header";
import Main from "../../components/template/mainComponent/Main";
import Sidbar from "../../components/template/sidbar/Sidbar";
import Content from "../../components/template/content/Content";

const ExpensesPage = () => {
  return (
    <div className="contain-all" style={{ display: "flex" }}>
      <Sidbar />
      <Main>
        <Header />
        <Content>
          <ExpensesContent />
        </Content>
      </Main>
    </div>
  );
};

export default ExpensesPage;
