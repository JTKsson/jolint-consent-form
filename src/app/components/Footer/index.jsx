import Styles from "./footer.module.css";
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.footerComponent}>
        <ul className={Styles.media}>
          <li>Jolint Network Analytics AB</li>
          <li>Org. Nr. 559324-1770</li>
          <li>Gothenburg, Sweden</li>
        </ul>

        <ul className={Styles.icon}>
          <li>
            <a href="https://www.linkedin.com/login/sv" target="_blank">
              <img src="/linkedIn.png" alt="icon" />
              <p>Jolint</p>
            </a>
          </li>
          <li>
            <a href="mailto:hello@jolint.com" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="26"
                viewBox="0 0 28 26"
                fill="none"
              >
                <path
                  d="M3.6 1H24.4C25.83 1 27 2.35 27 4V22C27 23.65 25.83 25 24.4 25H3.6C2.17 25 1 23.65 1 22V4C1 2.35 2.17 1 3.6 1Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M27 4L14 14.5L1 4"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>hello@jolint.com</p>
            </a>
          </li>
        </ul>
      </div>

      <div className={Styles.end}>
        <p>Copyright © 2023 Jolint | Powered by Jolint</p>
      </div>
    </footer>
  );
};

export default Footer;
