import React from "react";
import { AvatarProps } from "./Avatar.type";

const Avatar = ({ name, imageUrl, size, varient, letter }: AvatarProps) => {
  return (
    <div className={`avatar ${size ? `avatar-${size}` : ""}`}>
      {imageUrl && (
        <img
          className={`avatar-image ${varient ? `avatar-${varient}` : ""}`}
          src={imageUrl}
          alt="avatar"
        />
      )}
      {imageUrl === undefined && name !== "" && (
        <div className={`avatar-text avatar-${varient}`}>
          {name?.split(" ")[0][0]}
          {name?.split(" ")[1][0]}
        </div>
      )}

    </div>
  );
};

export default Avatar;
