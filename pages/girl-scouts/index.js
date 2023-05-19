import styles from '@/styles/Home.module.css';
import HeaderJS from '@/public/modules/_header';

export default function GS() {
  return (
    <>
      <HeaderJS />
      <main className={styles.main}>
        <h1>Girl Scouts</h1>
      </main>
    </>
  )
}
