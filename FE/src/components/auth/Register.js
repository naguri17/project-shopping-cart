import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../features/authSlice";

const Register = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (auth._id) {
      navigate("/cart");
    }
  }, [auth._id, navigate]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(user));
  };

  return (
    <div class="bg-gray-200 min-h-screen flex flex-col">
      <form
        class="container max-w-sm mx-auto mt-20 flex-1 flex flex-col items-center px-2 space-y-4 md:space-y-6 translate-y-10"
        onSubmit={handleSubmit}
      >
        <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full space-y-3">
          <h1 class="mb-8 text-3xl text-center">Sign up</h1>
          <div>
            <label
              for="Full name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Full name
            </label>
            <input
              type="name"
              name="name"
              id="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Hoang Loc Dinh"
              required=""
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </div>

          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@company.com"
              required=""
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>

          <div className="pb-2">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Password
            </label>
            <input
              type={visible ? "text" : "password"}
              name="password"
              id="password"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="••••••••"
              required=""
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>

          <div class="flex items-center pb-8">
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  onClick={() => setVisible(!visible)}
                />
              </div>
              <div class="ml-3 text-sm">
                <label for="remember" class="text-gray-500 dark:text-gray-300">
                  Show Password
                </label>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-400 hover:bg-green-500  text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Create Account{" "}
          </button>

          {auth.registerStatus === "rejected" ? (
            <p className="text-red-500">{auth.registerError}</p>
          ) : null}

          <div class="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the{" "}
            <a
              class="no-underline border-b border-blue-300 hover:text-blue-500 text-blue-300"
              href="/terms"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              class="no-underline border-b border-blue-300 hover:text-blue-500 text-blue-300"
              href="/privacy"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
          Already have an account?{" "}
          <a
            href="/login"
            class="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Login
          </a>
          .
        </p>
      </form>
    </div>
  );
};

export default Register;
