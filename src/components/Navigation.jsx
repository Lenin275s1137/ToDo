import React from "react";
import { useState } from "react";
import { USERS } from "../const/users";

const Navigation = ({currentUser, setCurrentUser}) => {
  return (
    <div className="container">
      <nav className="nav flex">
        {USERS.map((user) => {
          return (
            <a
              href=""
              key={user.id}
              className={user.id === currentUser ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                setCurrentUser(user.id);
              }}
            >
              {user.label}
            </a>
          );
        })}
      </nav>
      <div className="container">
        <p>{currentUser}</p>
        
      </div>
      
    </div>
  );
};

export default Navigation;
