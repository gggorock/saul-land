import Link from 'next/link'
import './globals.css'

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
        {/* <script src="https://kit.fontawesome.com/be51b24b33.js" crossorigin="anonymous"></script> */}
      </head>
      <body>
        <header>
          <nav>
            <div className="header__nav__logo">
              <Link href="/">Saul Land</Link>
            </div>

            <div className="header__nav__menu">
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/daily-logs">Daily Logs</Link>
                </li>
                <li>
                  <Link href="/articles">Articles</Link>
                </li>
                <li>
                  <Link href="/me">About</Link>
                </li>
              </ul>
            </div>
            <div className="header__nav__search">
            </div>
          </nav>
        </header>
        {children}
        <footer>
          © 2023 Saul Land
        </footer>
      </body>
    </html>
  )
}
