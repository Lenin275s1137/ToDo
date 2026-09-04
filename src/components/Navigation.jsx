import React from "react";
import { useState } from "react";
import { USERS } from "../const/users";

const Navigation = () => {
  const [currentUser, setCurrentUser] = useState(USERS[0].id);
  return (
    <div>
      <nav className="nav flex container">
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
