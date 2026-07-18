import Link from "next/link";

interface Props{
    href:string;
    children:React.ReactNode;
}

export default function Button({href,children}:Props){

    return(

        <Link
            href={href}
            className="
            inline-flex
            items-center
            justify-center
            rounded-full
            bg-white
            px-8
            py-4
            font-semibold
            text-black
            duration-300
            hover:scale-105
            "
        >
            {children}
        </Link>

    )

}