import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../output.css";
import { getUsersByEmail } from "../../services/userServices.js";

export const Login = () => {
  const [email, setEmail] = useState("charlie.brown@example.com");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    getUsersByEmail(email).then((foundUsers) => {
      if (foundUsers.length === 1) {
        const user = foundUsers[0];
        localStorage.setItem(
          "sale_user",
          JSON.stringify({
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            isAdmin: user.isAdmin,
            isEmployee: user.isEmployee,
          })
        );
        navigate("/");
      } else {
        window.alert("Invalid login");
      }
    });
  };

  return (
    <div className="flex justify-center h-screen">
      <div className="flex flex-col items-center">
        <img src="../../sslogo.png" className="mt-5" />
        <main className="text-center mt-10 block p-16 bg-slate-200 shadow-2xl border border-gray-200 rounded-lg ">
          <section>
            <form className="" onSubmit={handleLogin}>
              <h1 className="text-4xl">Sale Sorcery</h1>
              <h2 className="mt-5 text-lg">Please sign in</h2>

              <div className="">
                <input
                  onChange={(evt) => setEmail(evt.target.value)}
                  value={email}
                  type="email"
                  id="email"
                  className="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-200 focus:border-blue-200 block w-72 p-2.5"
                  placeholder="Email"
                  required
                />
              </div>

              <fieldset>
                <div>
                  <button
                    type="submit"
                    className="w-40 mt-5 p-4 text-sm text-center text-text bg-edit rounded-lg hover:bg-hoveredit focus:ring-4 focus:outline-none focus:ring-blue-300"
                  >
                    Sign in
                  </button>
                </div>
              </fieldset>
            </form>
          </section>
        </main>
      </div>
    </div>
  );
};
