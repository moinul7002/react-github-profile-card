import React from "react";

const ProfileCard = ({ avatar_url, name, company }) => {
  return (
    <div className="github-profile">
      <img src={avatar_url} alt="" />
      <div>
        <h3>{name}</h3>
        <p>{company}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
