import Link from 'next/link'

const linkStyle = {
    textDecoration: 'none'
}

const Header = ()  =>  (
    <div>
        <Link href={"/index"}>
            <a style={linkStyle}>首页</a>
        </Link>
        <Link href={"/about"}>
            <a style={linkStyle}>关于</a>
        </Link>
        <Link href={"/tool"}>
            <a style={linkStyle}>工具</a>
        </Link>
        <Link href={"/exchange"}>
            <a style={linkStyle}>交流</a>
        </Link>
    </div>
)
export default Header;
