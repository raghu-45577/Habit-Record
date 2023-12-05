import React, { useEffect, useState } from "react";
import store from "../redux/store";
import {
  changingStatus,
  deletingHabit,
  updatingHabits,
} from "../redux/actions";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Style from "./Habits.module.css";

function Habits() {
  const [habits, setHabits] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    // dispatching the updating habits for getting the available habits
    store.dispatch(updatingHabits());
    setHabits(store.getState());
  }, []);

  // function for deleting the habit
  function deleteHandler(id) {
    // dispatching the deleting habit method
    store.dispatch(deletingHabit(id));
    setHabits(store.getState());
  }

  // function to change the status of the habit for current day
  function statusChangeHandler(habit) {
    if (habit.week[6].status === "done") {
      store.dispatch(changingStatus(habit, 6, "not-done"));
    } else {
      store.dispatch(changingStatus(habit, 6, "done"));
    }
    window.location.reload();
  }

  // navigate to the home page when add habit button is clicked
  function addHabitHandler() {
    navigate("/");
  }

  // navigate to week status page when week status button is clicked
  function changePageHandler() {
    navigate("/weekstatus");
  }
  return (
    <div className={Style.app}>
      <Header
        props={window.location.pathname}
        action={changePageHandler}
        actName="Week Status"
      />
      <div className={Style.habitsContainer}>
        {habits.length === 0 ? (
          <h3>No Habits to display</h3>
        ) : (
          // if the habits are present, we loop through them
          habits.map((habit) => (
            <div key={habit.id} className={Style.habit}>
              <div
                className={Style.title}
                onClick={() => statusChangeHandler(habit)}
              >
                {habit.title}
              </div>
              {habit.week[6].status === "" ? (
                <div className={Style.block}>Pending</div>
              ) : (
                <div className={Style.block}>{habit.week[6].status}</div>
              )}
              <div className={Style.block}>
                Streak : {habit.workDone} / {habit.week.length}
              </div>
              <div className={Style.button}>
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

export default Habits;
