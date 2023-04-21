import Link from "next/link"

export default function sideNav({ children }) {
    return (
        <div>
            <main>{children}</main>
            <sidebar>
                <Link href="/">Home</Link>
                <Link href="/articles">Articles</Link>
            </sidebar>
        </div>
    )
}