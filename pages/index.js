import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Balanced Media - Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
           Balanced Media is powered by Next.js
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={220}
            height={48}
            priority
          />

          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <Image
            className={styles.bmlogo}
            src="/BM-Text-Gradient.png"
            alt="BM-Logo"
            width={150}
            height={60}
        />

        <div className={styles.grid}>
          <a
            href="https://balancedmedia.org/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Looking for the website? <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              While our new website is under construction, click here to continue to our old site.
            </p>
          </a>


          <a
            href="https://chrome.google.com/webstore/detail/balanced-media/hdbbojpfcnnmjakaiggmdbaoohckehjo?hl=en-US"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Where&apos;s the download for our extension? <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              The Balanced Media extension is still available to download. Click here to begin downloading.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
