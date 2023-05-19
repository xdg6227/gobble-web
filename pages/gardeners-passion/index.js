import styles from '@/styles/Home.module.css';
import HeaderJS from '@/public/modules/_header';

export default function GP() {
  return (
    <>
      <HeaderJS />
      <main className={styles.main}>
        <h1>Gardeners Passion</h1>
      </main>
    </>
  )
}
