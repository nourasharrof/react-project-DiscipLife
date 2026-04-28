import { Styles } from "./stylesCardBudget";
import { useState, useEffect } from "react";
import photoTask from "../../../../public/budget2.jpg";

const AddNewBadgetCard = ({ onCreate, isEditing, editData }) => {

  const [monthlySalary, setMonthlySalary] = useState("");
  const [budgetLimit, setBudgetLimit] = useState("");


  useEffect(() => {
    if (isEditing && editData) {
      setMonthlySalary(editData.monthlySalary);
      setBudgetLimit(editData.budgetLimit);
    } else {
      handleCancel();
    }
  }, [isEditing, editData]);

 
  const handleCancel = () => {
    setMonthlySalary("");
    setBudgetLimit("");
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!monthlySalary || !budgetLimit) {
      return alert("⚠️ Please fill required fields");
    }

    onCreate(monthlySalary, budgetLimit);

    handleCancel();
  };


  return (
    <Styles>
      <div className="container--all">
        <div className="expense-card-container">
        
          <div className="card-title">
            {/* <h2>{isEditing ? "Edit Budget" : "Monthly Overview"}</h2> */}
            <img src={photoTask} alt="budget" />
          </div>

        
          <form onSubmit={handleSubmit} className="expenses-form">
            <label>Monthly Salary</label>
            <input
              type="number"
              value={monthlySalary}
              onChange={(e) => setMonthlySalary(e.target.value)}
              placeholder="Enter salary"
            />

            <label>Budget Limit</label>
            <input
              type="number"
              value={budgetLimit}
              onChange={(e) => setBudgetLimit(e.target.value)}
              placeholder="Enter budget limit"
            />

        
            <div className="buttons">
              <button type="submit" className="add-btn">
                {isEditing ? "Save Changes" : "Add New Budget"}
              </button>

              <button
                type="button"
                className="cancel-btn"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </Styles>
  );
};

export default AddNewBadgetCard;
