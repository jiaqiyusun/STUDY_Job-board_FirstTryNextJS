import Link from "next/link";

export default function Header(){
    return(
        <header>
          <div className="flex items-center justify-between ">
            <Link href={'/'} className='font-bold text-xl'>Job Board</Link>
            <nav className='flex gap-4 *:py-2 *:px-4 *:rounded-md'>
              <Link className='bg-grey-200' href={'/login'}>Login</Link>
              <Link className='bg-blue-600 text-white' href={'/new-listing'}>Post a new job</Link>
            </nav>
          </div>
        </header>
    );
}