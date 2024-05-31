import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [formDetails, setFormDetails] = useState({});
  const [error, setError] = useState({});
  const redirect = useNavigate();

  //Call POST API
  const loginUserAPI = () => {
    fetch("http://localhost:5000/Blog-router/test-api", {
      method: "POST",
      body: JSON.stringify(formDetails),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((jsonResponse) => {
        if (jsonResponse) {
          localStorage.setItem("token", jsonResponse.token);
          localStorage.setItem(
            "userDetails",
            JSON.stringify(jsonResponse.data)
          );
          setError({});
          redirect("/home");
        } else {
          setError(jsonResponse.error);
        }
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  };

  //handleLogin
  const handleLogin = (e) => {
    e.preventDefault();
    loginUserAPI();
  };
  return (
    <div>
      {/* -- banner -- */}
      <div class="agile-banner"></div>
      {/* -- //banner --*/}
      {/*-- breadcrumbs --*/}
      <div class="breadcrumbs">
        <div class="container">
          <ol
            class="breadcrumb breadcrumb1 animated wow slideInLeft"
            data-wow-delay=".5s"
          >
            <li>
              <a href="/home">Home</a>
            </li>
            <li class="active">Login</li>
          </ol>
        </div>
      </div>
      {/* -- //breadcrumbs -- */}

      {/* -- contact -- */}
      <div class="container">
        {/* -- mail -- */}
        <div class="banner-bottom">
          <div class="agileits_heading_section">
            <h3 class="wthree_head">Login Your Account</h3>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "5px",
            }}
          >
            {error.message && (
              <p class="text-danger" style={{ fontSize: "20" }}>
                {error.message}
              </p>
            )}
          </div>

          <div class="w3ls_portfolio_grids w3_agile_mail_grids">
            <form method="post" onSubmit={handleLogin}>
              <div class="col-md-12 w3_agile_mail_grid">
                <div class="col-md-6 w3_agile_mail_grid">
                  <span class="input input--ichiro">
                    <input
                      class="input__field input__field--ichiro"
                      type="text"
                      id="input-25"
                      placeholder=" "
                      required=""
                      onChange={(e) =>
                        setFormDetails({
                          ...formDetails,
                          username: e.target.value,
                        })
                      }
                    />
                    <label
                      class="input__label input__label--ichiro"
                      for="input-25"
                    >
                      <span class="input__label-content input__label-content--ichiro">
                        Your UserName
                      </span>
                    </label>
                  </span>
                </div>
                <div class="col-md-6 w3_agile_mail_grid">
                  <span class="input input--ichiro">
                    <input
                      class="input__field input__field--ichiro"
                      type="text"
                      id="input-26"
                      placeholder=" "
                      required=""
                      onChange={(e) =>
                        setFormDetails({
                          ...formDetails,
                          password: e.target.value,
                        })
                      }
                    />
                    <label
                      class="input__label input__label--ichiro"
                      for="input-26"
                    >
                      <span class="input__label-content input__label-content--ichiro">
                        Your Password
                      </span>
                    </label>
                  </span>
                </div>
                <div class="row">
                  <center>
                    {/* <input type="submit" value="Login" style="width: 50%"/> */}
                    <input type="submit" value="Login" />
                  </center>
                </div>
              </div>

              <div class="clearfix"> </div>
            </form>
          </div>
        </div>
        {/* -- //mail -- */}
      </div>
      {/* -- //contact -- */}
    </div>
  );
};

export default Login;
