import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import store from "../redux/store";
import { addingHabit } from "../redux/actions";
import Header from "./Header";
import Style from "./Home.module.css";

function Home() {
  const [habit, setHabit] = useState({ title: "", category: "sport" });
  const navigate = useNavigate();

  // function to add the habit
  function addHabitHandler(e) {
    e.preventDefault();
    const data = {
      title: habit.title,
      category: habit.category,
    };

    // dispatch an action
    store.dispatch(addingHabit(data));
    // redirecting to dashboard
    navigate("/habits");
  }

  // function two handle inputs
  function inputHandler(event) {
    setHabit((prevHabit) => ({
      ...prevHabit,
      [event.target.name]: event.target.value,
    }));
  }

  // function to navigate the page when habit is added
  function changePageHandler() {
    navigate("/habits");
  }

  return (
    <div className={Style.homeContainer}>
      <Header
        props={window.location.pathname}
        action={changePageHandler}
        actName="Habits"
      />
      <div className={Style.formContainer}>
        {/* form which takes title and category input fields */}
        <form className={Style.habitForm}>
          <input
            className={Style.titleInput}
            type="text"
            name="title"
            value={habit.title}
            placeholder="Enter your habit here"
            required
            onChange={(e) => inputHandler(e)}
          />
          <select
            className={Style.categoryInput}
            name="category"
            value={habit.category}
            onChange={(e) => inputHandler(e)}
          >
            <option value="sport">Sport</option>
            <option value="work">Work</option>
            <option value="personal">Personal</option>
          </select>
          <button className={Style.addBtn} onClick={addHabitHandler}>
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;
