import { useState, useReducer } from "react";
import "./styles.css";

function App() {
  const [username, setUserName] = useState("");
  // import useReducer

  let initialState = {
    loading: false,
    error: false,
    data: [],
    token: ""
  };

  function GitReducer(state, action) {
    switch (action.type) {
      case "LOADING": {
        return {
          ...state,
          loading: true,
          error: false
        };
      }
      case "SUCCESS": {
        return {
          ...state,
          loading: false,
          error: false,
          data: action.payload
        };
      }
      case "ERROR": {
        return {
          ...state,
          loading: false,
          error: true
        };
      }
      default: {
        return state;
      }
    }
  }

  function actions(dispatch, query) {
    dispatch({ type: "LOADING" });
    fetch("https://api.github.com/search/users?" + `q=${query}`)
      .then((res) => res.json())
      .then((result) => {
        dispatch({ type: "SUCCESS", payload: result.items });
      })
      .catch((err) => {
        dispatch({ type: "ERROR" });
      });
  }

  const [state, dispatch] = useReducer(GitReducer, initialState);
  console.log(state.data);
  return (
    <div className="App">
      <h1>GitHub Users</h1>
      <input
        type="text"
        placeholder="Enter Something"
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={() => actions(dispatch, username)}>Search</button>
      <h4> Search Item : {username} </h4>
      <h3> Search Result :</h3>
      {state.data.map((item) => (
        <p> {item.login}</p>
      ))}
    </div>
  );
}
export default App;
