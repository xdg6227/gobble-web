import styles from '@/styles/Home.module.css';
import HeaderJS from '@/public/modules/_header';

export default function Mobile() {
  return (
    <>
      <HeaderJS />
      <main className={styles.main}>
        <h1>Your on a Mobile Device..</h1>
        <p>We're sorry for the inconvience, this experience will not work on a mobile device. Please try out this experience on a computer.</p>
      </main>
    </>
  )
}
