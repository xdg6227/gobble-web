import styles from '@/styles/Home.module.css';
import HeaderJS from '@/public/modules/_header';
import Link from 'next/link';

export default function Home() {
  function CreateUsernameDB(event) {
    event.preventDefault();

    if (typeof (Storage) !== "undefined") {
      let usernameInput = event.target.username.value;
      localStorage.setItem("username", usernameInput);
      document.getElementById("result").innerHTML = "The username your going to play as is.. <em>" + localStorage.getItem("username") + "</em>.<br />You may click the begin button below now."
      document.getElementById('beginBtn').disabled = false;
    } else {
      localStorage.setItem("username", "boggleuser27");
      document.getElementById("result").innerHTML = "Your browser does not support local storage, so your username will be boggleuser27.<br />You may click the begin button below now.";
      document.getElementById('beginBtn').disabled = false;
    }
  }
  return (
    <>
      <HeaderJS />

      <main className={styles.main}>
        <h1>Gobble v{require('../package.json').version}</h1>
        <p id='lastUpdated'>Last Updated: <em>Thu May 18 2023 19:24:00 GMT-0600 (Mountain Daylight Time)</em></p><br /><br />

        <form onSubmit={CreateUsernameDB}>
          <input id='username' type='text' name='username' minLength={3} maxLength={12} placeholder='What is your username? (Saved in local storage)' /><br />
          <button type='submit'>Save</button><br /><br />

          <div id="result"></div>
        </form>

        <div className={styles.buttons}>
          <Link href='/info'><button>Info</button></Link>
          <Link href='/girl-scouts'><button id='beginBtn' disabled>Begin</button></Link>
          <Link href='/share'><button>Share</button></Link>
        </div>
      </main>
    </>
  )
}
