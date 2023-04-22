import Link from 'next/link'
import './globals.css'

// Font Awesome
// --Css Integration
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
// --Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'
import { faAddressCard } from '@fortawesome/free-regular-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

// Font


export const metadata = {
  title: 'Saul Land',
  description: 'Saul Land is my Complex App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <header>
          <nav className="header__navbar">

            <div className='header__navbar__logo'>
              <span className='header__navbar__logo__icon'>
                <FontAwesomeIcon icon={faSeedling} />
              </span>
              <span className='header__navbar__logo__title'>{metadata.title}</span>
            </div>

            <div className='header__navbar__menu'>
              <ul>
                <LinkBtn value='Home' path='/' />
                <LinkBtn value='게시판' path='/board' />
                <LinkBtn value='Records' path='/records' />
                <LinkBtn value='Articles' path='/articles' />
              </ul>
            </div>

            <div className='header__navbar__icons'>
              <ul>
                <li><Link href='https://github.com/gggorock'><FontAwesomeIcon icon={faGithub} /></Link></li>
                <li><Link href='/records'><FontAwesomeIcon icon={faAddressCard} /></Link></li>
              </ul>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer>
          <div>
            <p>© 2023 Saul Land</p>
          </div>
        </footer>


      </body>
    </html>
  )
}

function LinkBtn(props) {
  return (
    <li>
      <Link className='link-button' href={props.path}>{props.value}</Link>
    </li>
  )
}
