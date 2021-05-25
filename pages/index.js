import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Welcome to this page!</title>
        <link rel="icon" href={"/favicon.ico"} />
          <link href={"/css/global.css"} rel="stylesheet" />
      </Head>

      <main>
        <h1 className="title flyText">
          Welcome to my page!
        </h1>

        <div className="grid">
          <Link href={"/index"}>
          <a  className="card  flyText">
            <h3>首页</h3>
          </a>
          </Link>
          <Link href={"/about"}>
            <a  className="card flyText">
            <h3>关于</h3>
            </a>
          </Link>

          <Link href={"/tool"}>
            <a  className="card flyText">
            <h3>工具</h3>
            </a>
          </Link>

          <Link href={"/exchange"}>
            <a className="card flyText">
            <h3>交流</h3>
            </a>
          </Link>
        </div>
      </main>

      <footer>
        <Link href="/" >
          <a target="_blank"
             rel="noopener noreferrer">
          Powered by{' '}
          <img src={"/vercel.svg"} alt="Vercel Logo" className="logo" />
          </a>
        </Link>
      </footer>
    </div>
  )


}
