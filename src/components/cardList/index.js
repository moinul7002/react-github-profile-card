import React from "react";
import ProfileCard from "../profileCard";
import "./index.css";

const CardList = ({ profileData }) => {
  const mapProfile = profileData.map((singleProfile) => {
    return <ProfileCard key={singleProfile.id} {...singleProfile} />;
  });

  return <div className="cardlist">{mapProfile}</div>;
};

export default CardList;
