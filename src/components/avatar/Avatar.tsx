import { AvatarProps } from "./Avatar.type";

const Avatar = ({
  id,
  name,
  imageUrl,
  size,
  variant,
  color,
  children,
  badgeVarient,
  badgeColor,
  src,
  alt,
  onClick,
  style,
  ...props
}: AvatarProps) => {
  return (
    <div className={`avatar ${size ? `avatar-${size}` : ""}`} {...props}>
      {imageUrl && (
        <div className="avatar-image">
          <img
            className={`avatar-image ${variant ? `avatar-${variant}` : ""}`}
            src={imageUrl}
            alt="avatar"
          />
          {badgeVarient ? (
            <span
              className={`${
                badgeVarient
                  ? `avatar-${badgeVarient} avatar-${badgeColor}`
                  : ""
              }`}
            ></span>
          ) : (
            ""
          )}
        </div>
      )}

      {imageUrl === undefined && name !== "" && (
        <div
          className={`avatar-text ${variant ? `avatar-${variant} ` : ""} ${
            color ? `avatar-${color}` : ""
          }`}
        >
          {children}
          {name?.split(" ")[0][0]}
          {name?.split(" ")[1][0]}
          {badgeVarient ? (
            <span
              className={`${
                badgeVarient
                  ? `avatar-${badgeVarient} avatar-${badgeColor}`
                  : ""
              }`}
            ></span>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
};

export default Avatar;
