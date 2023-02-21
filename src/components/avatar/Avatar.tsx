import React from "react";
import { AvatarProps } from "./Avatar.type";

const Avatar = ({
  name,
  imageUrl,
  size,
  variant,
  color,
  children,
}: AvatarProps) => {
  return (
    <div className={`avatar ${size ? `avatar-${size}` : ""}`}>
      {imageUrl && (
        <img
          className={`avatar-image ${variant ? `avatar-${variant}` : ""}`}
          src={imageUrl}
          alt="avatar"
        />
      )}
      {imageUrl === undefined && name !== "" && (
        <div
          className={`avatar-text ${variant ? `avatar-${variant}` : ""} ${
            color ? `avatar-${color}` : ""
          }`}
        >
          {children}

          {name?.split(" ")[0][0]}
          {name?.split(" ")[1][0]}
        </div>
      )}
    </div>
  );
};

export default Avatar;
