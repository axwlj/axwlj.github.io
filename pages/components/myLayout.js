import Link from 'next/link'
import Head from 'next/head'
import Footer from "./footer";
const linkStyle = {
    textDecoration: 'none'
}
export default ({ children, title = 'This is the default title' }) => (
    <div>
        <Head>
            <title>{ title }</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <header>
            <nav>
                <Link href={"/index"}>
                    <a style={{linkStyle}}>首页</a>
                </Link>
                <Link href={"/tool"}>
                    <a style={linkStyle}>工具</a>
                </Link>
                <Link href={"/exchange"}>
                    <a style={linkStyle}>交流</a>
                </Link>
                <Link href={"/about"}>
                    <a style={linkStyle}>关于</a>
                </Link>
            </nav>
        </header>
        { children }

        <Footer/>
    </div>
)
