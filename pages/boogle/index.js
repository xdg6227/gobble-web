import styles from '@/styles/Home.module.css';
import HeaderJS from '@/public/modules/_header';

export default function Boogle() {
  return (
    <>
      <HeaderJS />
      <main className={styles.main}>
        <h1>Boogle</h1>
      </main>
    </>
  )
}
