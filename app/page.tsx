import Image from "next/image";
import styles from "./global.module.scss"

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Image src="/logo-transparent-white.png" alt="logo" width={120} height={40} />
        <p className={styles.paragraph} aria-label="We&apos;re mixing things up behind the scenes — full website and menu coming soon. Sign up and we&apos;ll let you know the moment bookings go live.">We&apos;re mixing things up behind the scenes — full website and menu coming soon. Sign up below and we&apos;ll let you know the moment bookings go live.</p>
        <div className="klaviyo-form-VKX3sF" style={{width: "100%", maxWidth: "500px", margin: "0 auto"}}></div>
      </div>
      <div className={styles.backgroundImage}>
        <Image src="/smallsbar-background.jpg" alt="background" fill />
      </div>
    </>
  );
}
