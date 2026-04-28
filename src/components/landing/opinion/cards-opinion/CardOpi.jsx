import React from "react";
import { Styles } from "./style";
import Image from "react-bootstrap/Image";

const CardOpi = ({ description, star_img, person_img, person_names, job }) => {
  return (
    <Styles>
      <div className="card-opi">
        <span className="stars">{star_img}</span>
        <p className="description">{description}</p>
        <div className="person">
          <span className="img">
            <img src={person_img} />
          </span>
          <div className="text">
            <p className="name">{person_names}</p>
            <p className="job">{job}</p>
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default CardOpi;
