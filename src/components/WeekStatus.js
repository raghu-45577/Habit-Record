import React, { useEffect, useState } from "react";
import store from "../redux/store";
import {
  changingStatus,
  deletingHabit,
  updatingHabits,
} from "../redux/actions";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Style from "./WeekStatus.module.css";

function WeekStatus() {
  const [habits, setHabits] = useState([]);
  const navigate = useNavigate();
  // getting the habits when the page get loaded
  useEffect(() => {
    store.dispatch(updatingHabits());
    setHabits(store.getState());
  }, []);
  // function to delete habits
  function deleteHandler(id) {
    // dispatching the deleting habit action for deletion
    store.dispatch(deletingHabit(id));
    setHabits(store.getState());
  }

  // function to change the status of the habit for 7 days including today
  function statusChangeHandler(habit, index) {
    if (habit.week[index].status === "done") {
      // dispatching the action for status change
      store.dispatch(changingStatus(habit, index, "not-done"));
    } else {
      store.dispatch(changingStatus(habit, index, "done"));
    }
    window.location.reload();
  }

  // redirecting to the home page when add button is clicked
  function addHabitHandler() {
    navigate("/");
  }

  // navigating to the habits page when habits button is clicked
  function changePageHandler() {
    navigate("/habits");
  }
  return (
    <div className={Style.statusContainer}>
      <Header
        props={window.location.pathname}
        action={changePageHandler}
        actName="Habits"
      />
      <div className={Style.weekStatus}>
        {habits.length === 0 ? (
          <h3>No Habits to display</h3>
        ) : (
          habits.map((habit, i) => (
            <div key={habit.id} className={Style.habit}>
              <div className={Style.topContainer}>
                <div className={Style.title}>
                  <div>{habit.title}</div>
                </div>
                <div className={Style.dltbtnSpace}>
                  <button
                    className={Style.dltbtn}
                    onClick={(e) => {
                      e.preventDefault();
                      deleteHandler(habit.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
              <div className={Style.bottomContainer}>
                {habit.week.map((day, i) => (
                  <div key={i} className={Style.weekdays}>
                    <div className={Style.days}>
                      <div>{day.day.substring(0, 3)}</div>
                    </div>
                    <div className={Style.dates}>
                      {day.status.length === 0 ? (
                        <div
                          className={Style.statusDate}
                          onClick={() => statusChangeHandler(habit, i)}
                        >
                          {day.date.substring(3, 5)}
                        </div>
                      ) : (
                        <div
                          className={`${Style.statusDate} ${Style[day.status]}`}
                          onClick={() => statusChangeHandler(habit, i)}
                        >
                          {day.date.substring(3, 5)}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
      <div className={Style.addbtnSpace}>
        <button className={Style.addbtn} onClick={addHabitHandler}>
          Add Habit
        </button>
      </div>
    </div>
  );
}

export default WeekStatus;
