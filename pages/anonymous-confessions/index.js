import styles from '@/styles/Home.module.css';
import HeaderJS from '@/public/modules/_header';

export default function AC() {
  return (
    <>
      <HeaderJS />
      <main className={styles.main}>
        <h1>Anonymous Confessions</h1>
      </main>
    </>
  )
}
