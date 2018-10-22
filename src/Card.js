import React from "react";

import './Card.css';

const CardProfile = ({ name, profession, motto }) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="front">
          <div className="cover"></div>
          <div className="user">
            <img className="img-circle" alt="" src="avatar/default.png" />
          </div>
          <div className="content">
            <div className="main">
              <h3 className="name">{ name }</h3>
              <p className="profession">{ profession }</p>
              <p className="text-center">{ motto }</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { CardProfile }