import Image from "next/image";
import styles from "./Profile.module.css";

export default function Profile({
  imageSrc,
  name,
  title,
  quote,
  text,
  className = "",
}) {
  return (
    <div className={`${styles.profile} ${className}`}>
      <div className={styles.avatar}>
        <Image
          src={imageSrc}
          alt={`${name} profile picture`}
          width={32}
          height={32}
          className={styles.avatarImage}
        />
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.title}>{title}</p>
      </div>
      <h2 className={styles.quote}>{quote}</h2>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
