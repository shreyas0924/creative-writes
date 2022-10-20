import Link from "next/link";

export default function Nav() {
    return (
        <nav className="flex justify-between items-center py-10">
            <Link href='/'>
                <button className="text-lg font-medium">Creative Minds</button>
            </Link>
            <ul className="flex items-center gap-10">
                <Link href='/auth/login'>
                    <a className="py-2 px-4 text-sm bg-cyan-600 font-medium ml-8 text-white rounded-lg">Join Now</a>
                </Link>
            </ul>
        </nav>

    )
}