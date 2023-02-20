import React from "react";
import { AvatarProps } from "./Avatar.type";

const Avatar = ({ name, imageUrl }: AvatarProps) => {
  return (
    <div className="avatar">
      {imageUrl && <img className="avatar-image" src={imageUrl} alt="avatar" />}
      {imageUrl === undefined && name !== "" && (
        <div className="avatar-text">{name?.substring(0, 2)}</div>
      )}
    </div>
  );
};

export default Avatar;
