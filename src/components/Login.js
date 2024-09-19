import React, { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { BACKGROUND_IMG, USER_AVATAR } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const nameValue = name.current ? name.current.value : null;
    const error = checkValidData(emailValue, passwordValue);
    if (error) {
      setError(error);
      return;
    }
    setError(null);
    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nameValue,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                setUser({
                  uid,
                  email,
                  displayName,
                  photoURL,
                })
              );
            })
            .catch((error) => {
              setError(error.code + " - " + error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + " - " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + " - " + errorMessage);
        });
    }
  };

  return (
    <>
      <div className="overflow-hidden flex justify-center min-h-screen relative">
        <img
          src={BACKGROUND_IMG}
          alt="background image"
          className=" object-fill h-full w-full absolute"
        />
        <form
          className="lg:w-5/12 md:w-2/4 xl:w-3/12 max-sm:mx-3 p-12 bg-black my-36 text-white rounded-lg bg-opacity-80 absolute"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Name"
              className="w-full p-4 my-4 bg-gray-700 rounded-lg"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email"
            className="w-full p-4 my-4 bg-gray-700 rounded-lg"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full p-4 my-4 bg-gray-700 rounded-lg"
          />
          {error && <p className="text-red-600">{error}</p>}
          <button
            className="w-full p-4 my-4 bg-red-600 rounded-lg"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-center">
            {isSignInForm ? (
              <>
                New to Netflix?{" "}
                <span
                  className="text-red-500 cursor-pointer"
                  onClick={toggleSignInForm}
                >
                  Sign Up now.
                </span>
              </>
            ) : (
              <>
                Already a member?{" "}
                <span
                  className="text-red-500 cursor-pointer"
                  onClick={toggleSignInForm}
                >
                  Sign In now.
                </span>
              </>
            )}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
