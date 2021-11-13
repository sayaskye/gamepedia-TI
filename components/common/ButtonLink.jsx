import Link from 'next/link'
export const ButtonLink = ({url, name}) => {
    return (
        <Link href={`/categories/${url}`}>
            <a className="w-full text-houm-black hover:text-houm-salmon bg-houm-salmon hover:bg-houm-red rounded-lg transition duration-300 mt-2 text-center py-2">
                {name}
            </a>  
        </Link>
    )
}
