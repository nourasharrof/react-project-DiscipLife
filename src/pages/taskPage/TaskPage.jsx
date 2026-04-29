import Header from "../../components/template/header/Header";
import Main from "../../components/template/mainComponent/Main";
import Sidbar from "../../components/template/sidbar/Sidbar";
import Content from "../../components/template/content/Content";
import TaskContent from "../../components/task/TaskContent";

const TaskPage = () => {
  return (
    <div className="containerCat" style={{ display: "flex" }}>
      <Sidbar />
      <Main>
        <Header />
        <Content>
          <TaskContent />
        </Content>
      </Main>
    </div>
  );
};

export default TaskPage;
