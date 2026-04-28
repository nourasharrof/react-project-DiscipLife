import { Styles } from "./stylesReminder";

const ReminderModal = ({ task, onCancel, onSnooze }) => {
  if (!task) return null;
  return (
    <Styles>
      <div className="custom-reminder-modal">
        <div className="modal-content">
          <h3>⏰ Reminder!</h3>
          <p>{task.name}</p>
          <div className="modal-buttons">
            <button className="confirm-btn" onClick={onCancel}>
              Cansle
            </button>
            <button className="snooze-btn" onClick={onSnooze}>
              Snooze for tomorrow
            </button>
          </div>
        </div>
      </div>
    </Styles>
  );
};
export default ReminderModal;
