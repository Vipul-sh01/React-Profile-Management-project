import React, { createContext, useReducer, useEffect, useMemo } from "react";

const REGISTER_USER = "REGISTER_USER";
const LOGIN_USER = "LOGIN_USER";
const LOGOUT_USER = "LOGOUT_USER";

export const ProfileContext = createContext();

const initialState = {
  profiles: JSON.parse(localStorage.getItem("profiles")) || [],
  loggedInUser: JSON.parse(localStorage.getItem("loggedInUser")) || null,
};

const profileReducer = (state, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        profiles: [...state.profiles, action.payload],
      };

    case LOGIN_USER:
      return {
        ...state,
        loggedInUser: action.payload,
      };

    case LOGOUT_USER:
      return {
        ...state,
        loggedInUser: null,
      };

    default:
      return state;
  }
};


export const ProfileProvider = ({ children }) => {
  const [state, dispatch] = useReducer(profileReducer, initialState);

  useEffect(() => {
    localStorage.setItem("profiles", JSON.stringify(state.profiles));
  }, [state.profiles]);

  useEffect(() => {
    if (state.loggedInUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(state.loggedInUser));
    } else {
      localStorage.removeItem("loggedInUser");
    }
  }, [state.loggedInUser]);

  const contextValue = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <ProfileContext.Provider value={contextValue}>
      {children}
    </ProfileContext.Provider>
  );
};
