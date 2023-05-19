import styles from '@/styles/Home.module.css';
import HeaderJS from '@/public/modules/_header';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <HeaderJS />
      <main className={styles.main}>
        <h1>Gobble</h1>

        <div>
          <Link href='/info'>Info Page</Link><br />
          <Link href='/share'>Share Page</Link><br /><br />
          
          <Link href='/newsletter'>Newsletter Page</Link><br />
          <Link href='/newsletter/post'>Newsletter Post Page</Link><br />
          <Link href='/newsletter/updates'>Newsletter updates Page</Link><br /><br />

          <Link href='/girl-scouts'>Girl Scouts Page</Link><br />
          <Link href='/girl-scouts/flavors'>Girl Scouts Flavors Page</Link><br />
          <Link href='/girl-scouts/purchase'>Girl Scouts Purchase Page</Link><br /><br />

          <Link href='/gardeners-passion'>Gardeners Passion Page</Link><br />
          <Link href='/gardeners-passion/contact'>Gardeners Passion Contact Page</Link><br />
          <Link href='/gardeners-passion/feeding'>Gardeners Passion Feeding Page</Link><br />
          <Link href='/gardeners-passion/hacked'>Gardeners Passion Hacked Page</Link><br />
          <Link href='/gardeners-passion/plants'>Gardeners Passion Plants Page</Link><br /><br />

          <Link href='/finale'>Finale Page</Link><br />
          <Link href='/finale/loser'>Finale Loser Page</Link><br />
          <Link href='/finale/winner'>Finale Winner Page</Link><br /><br />

          <Link href='/classroom'>Classroom Page</Link><br />
          <Link href='/classroom/assignments'>Classroom Assignments Page</Link><br />
          <Link href='/classroom/calender'>Classroom Calender Page</Link><br />
          <Link href='/classroom/hacked'>Classroom Hacked Page</Link><br />
          <Link href='/classroom/students'>Classroom Students Page</Link><br /><br />

          <Link href='/boogle'>Boogle Page</Link><br />
          <Link href='/boogle/hacked'>Boogle Hacked Page</Link><br />
          <Link href='/boogle/profile'>Boogle Profile Page</Link><br />
          <Link href='/boogle/settings'>Boogle Settings Page</Link><br /><br />

          <Link href='/anonymous-confessions'>Anonymous Confessions Page</Link><br />
          <Link href='/anonymous-confessions/submit'>Anonymous Confessions Submit Page</Link><br />
        </div>
      </main>
    </>
  )
}
