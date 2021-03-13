import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Meta from './components/Meta'

export default function Home() {
  return (
    <div className={styles.container}>
      <Meta />
      <div className='byline' style={{ marginRight: '0' }}>
        <button
          onClick={() =>
            window.location.replace('https://do.clinicbook.org/register')
          }
          className={styles.button}
        >
          <span>Create free account. </span>
        </button>
        <span>
          Already have account?{' '}
          <a style={{ color: 'tomato' }} href='https://do.clinicbook.org'>
            login here
          </a>
        </span>
      </div>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href='https://do.clinicbook.org'>clinicbook.org</a>
        </h1>

        <p className={styles.description}>
          A smart online software for clinic adminstration..
        </p>

        <div className={styles.grid}>
          <a href='https://do.clinicbook.org' className={styles.card}>
            <h3>Start a happy clinic day</h3>
            <Image
              src='/2323.jpg'
              alt='Picture of the author'
              width={500}
              height={500}
            />
          </a>
          <a href='https://do.clinicbook.org' className={styles.card}>
            <h3>Stay successful</h3>
            <Image
              src='/face.jpeg'
              alt='Picture of the author'
              width={500}
              height={500}
            />
          </a>
          <a href='https://do.clinicbook.org' className={styles.card}>
            <h3>Start for free</h3>
            <Image
              src='/free.jpg'
              alt='Picture of the author'
              width={500}
              height={500}
            />
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a>
          <p> Powered by Ayman Hamoda Software</p>
        </a>
      </footer>
    </div>
  )
}
