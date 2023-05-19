import styles from '@/styles/Home.module.css';
import HeaderJS from '@/public/modules/_header';
import Link from 'next/link';

export default function Share() {
  return (
    <>
      <HeaderJS />
      <main className={styles.main}>
        <h1>Share</h1>
        <p><Link href='/'>← Go Back</Link></p>
      </main>
    </>
  )
}
