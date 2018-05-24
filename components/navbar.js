import Link from "next/link";

const Navbar = () => (
    <div>
        <ul>
                <li>
                    <Link href="/"><a>Home</a></Link>
                </li>
                <li>
                    <Link href="/about"><a>About</a></Link>
                </li>
        </ul>
        <button onClick={() => alert("showing alert")}>Show alert</button>

        <style jsx>
            {`
                a {
                    font-weight: bolder;
                    color: black;

                }
            `}
        </style>
    </div>
)

export default Navbar;