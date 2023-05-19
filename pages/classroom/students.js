import styles from '@/styles/Home.module.css';
import HeaderJS from '@/public/modules/_header';

export default function ClassroomStudents() {
  return (
    <>
      <HeaderJS />
      <main className={styles.main}>
        <h1>Classroom Students</h1>
      </main>
    </>
  )
}
