import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEgg} from "@fortawesome/free-solid-svg-icons";
import { FaTwitter,FaInstagram, FaFacebookF } from 'react-icons/fa';
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mele | Let us do your grocery shopping</title>
        <meta name="description" content="We shop and delivery your groceries from the local markets around Kampala right to house. Order now!" />
        <link rel="icon" href="/mele.svg" />
      </Head>

      <main className={styles.main}>
        <div className={styles.nav}>
          <div className={styles.logo_section}>
            <FontAwesomeIcon icon={faEgg} className={styles.logo}/>
            <span>Mele</span>
          </div>
          <div>
            <span>
              Call Us +256778559543
            </span>
          </div>
        </div>

        <div>
          <div>
            <h1>Let us do your grocery shopping.</h1>
            <p>
              We delivery everything you need from the local markets
              right to house. Order now!
            </p>
            <div>
              <a href="#">Via WhatsApp</a>
              <span>or</span>
              <a>Call +256778559543</a>
            </div>
          </div>
        </div>
        <footer className={styles.footer}>
          <span>Follow Us :</span> <a href="#"><FaInstagram/></a> <a href="#"><FaTwitter/></a> <a href="#"><FaFacebookF/></a>
        </footer>
      </main>


    </div>
  )
}
