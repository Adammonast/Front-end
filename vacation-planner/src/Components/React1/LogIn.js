import React, { useState } from "react";
import { axiosWithAuth } from "../Utilities/AxiosWithAuth";
const LogIn = props => {
  //set up the initial state
  const [user, setUser] = useState({
    user_name: "",
    user_password: ""
  });
  //onChange handler
  const handleChanges = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };
  // submitForm
  const submitForm = e => {
    e.preventDefault();
<<<<<<< HEAD
    setUser({login:"", password: ""})

    }

    return (
        <div>
            <form className = "form" onSubmit ={submitForm}>
                
                {/* <label htmlFor = "login">LogIn</label> */}
                <label htmlFor = "login"></label>
                <input class ="input"
                id = "login"
                type = "text"
                name ="login"
                onChange = {handleChanges}
                placeholder = "userName"
                value = {user.user_name}
                />


                {/* <label htmlFor = "password">Password</label>  */}
                <label htmlFor = "password"></label> 
                <input class ="input"
                id = "password"
                type ="password"
                name = "password"
                onChange = {handleChanges}
                placeholder = "password"
                value = {user.user_password} 
                />   
                <button type ="submit">Submit</button>
               
            </form>

        </div>
    )
}

export default LogIn;
=======
    console.log("Submitting", user);
    axiosWithAuth()
      .post("https://vacation-planner-2020.herokuapp.com/api/auth/login", user)
      .then(response => {
        console.log("Success", response);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userid", response.data.id);
        props.setUserid(response.data.id);
        props.history.push("/dashboard");
      })
      .catch(error => console.log(error.response));
  };
  return (
    <div>
      <h1>Sign In</h1>
      <form className="form" onSubmit={submitForm}>
        <label htmlFor="login">Username</label>
        <input
          class="input"
          id="username"
          type="text"
          name="user_name"
          onChange={handleChanges}
          placeholder="userName"
          value={user.user_name}
        />
        <label htmlFor="password">Password</label>
        <input
          class="input"
          id="password"
          type="password"
          name="user_password"
          onChange={handleChanges}
          placeholder="password"
          value={user.user_password}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default LogIn;
>>>>>>> d8f7c7217cd1ec1a9cb184e50885b3329a01cc8c
