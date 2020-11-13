import React from 'react'
import './MyCard.css'
const MyCard = (props) => {
  return (
    <div className="teams">
      <div className="card">
        <div className="box">
          <img src={props.img} alt="" />
          <div className="text">{props.name}</div>
          <p>{props.position}</p>
          <p>{props.aim}</p>
          <p>{props.study}</p>
        </div>
      </div>
    </div>
  );
}

export default MyCard
