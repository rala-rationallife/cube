import * as React from "react"
import {
  faFacebookF,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "@/styles/social.module.scss"

export function Social({ iconSize = "initial" }) {
  return (
    <ul
      className={styles.list}
      style={{ "--icon-size": iconSize } as React.CSSProperties}
    >
      <li>
        <a href="https://twitter.com/" target="_blank" rel="nofollow noopener">
          <FontAwesomeIcon icon={faTwitter} />
          <span className="sr-only">Twitter</span>
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="nofollow noopener"
        >
          <FontAwesomeIcon icon={faFacebookF} />
          <span className="sr-only">Facebook</span>
        </a>
      </li>
      <li>
        <a href="https://github.com/" target="_blank" rel="nofollow noopener">
          <FontAwesomeIcon icon={faGithub} />
          <span className="sr-only">GitHub</span>
        </a>
      </li>
    </ul>
  )
}
