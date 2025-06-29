import Image from "next/image";
import styles from "./Profile.module.css";

export default function Profile({
  imageSrc,
  name,
  title,
  quote,
  text,
  className = "",
  backgroundColor,
  nameColor,
  titleColor,
  quoteColor,
  textColor,
  avatarClass = "",
}) {
  // Map avatarClass prop to CSS module class
  const getAvatarClass = (avatarClass) => {
    switch (avatarClass) {
      case "avatarCard1":
        return styles.avatarCard1;
      case "avatarCard4":
        return styles.avatarCard4;
      default:
        return "";
    }
  };

  return (
    <div
      className={`${styles.profile} ${className}`}
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      <div className={styles.info}>
        <div className={`${styles.avatar} ${getAvatarClass(avatarClass)}`}>
          <Image
            src={imageSrc}
            alt={`${name} profile picture`}
            width={28}
            height={28}
          />
        </div>
        <div className={styles.infoText}>
          <div
            className={styles.name}
            style={nameColor ? { color: nameColor } : undefined}
          >
            {name}
          </div>
          <div
            className={styles.title}
            style={titleColor ? { color: titleColor } : undefined}
          >
            {title}
          </div>
        </div>
      </div>
      {quote && (
        <h2
          className={styles.quote}
          style={quoteColor ? { color: quoteColor } : undefined}
        >
          {quote}
        </h2>
      )}
      {text && (
        <p
          className={styles.text}
          style={textColor ? { color: textColor } : undefined}
        >
          {text}
        </p>
      )}
    </div>
  );
}
