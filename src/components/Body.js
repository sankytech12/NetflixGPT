import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "./Header";
import { useDispatch } from "react-redux";
import { setUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { deleteNowPlayingMovies } from "../utils/movieSlice";

const Body = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, photoURL, email } = user;
        dispatch(
          setUser({
            uid,
            displayName,
            photoURL,
            email,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        dispatch(deleteNowPlayingMovies());
        navigate("/login");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <div className="min-h-full w-full">
        <Header />
        <Outlet />
      </div>
    </>
  );
};

export default Body;
