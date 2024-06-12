import Link from "next/link";


export default function page(params) {
    return (
        <div className="flex flex-col space-y-8">
            <Link href="/admin/data" className="hover:underline text-center w-full text-lg text-blue-700">Data Page</Link>
            <Link href="/admin/sms" className="hover:underline text-center w-full text-lg text-blue-700">SMS Page</Link>
            <Link href="/admin/settings" className="hover:underline text-center w-full text-lg text-blue-700">Settings Page</Link>
        </div>
    )
}