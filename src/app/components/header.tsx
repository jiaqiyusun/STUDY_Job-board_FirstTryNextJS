import { getSignInUrl, signOut, getUser } from "@workos-inc/authkit-nextjs";
import Link from "next/link";

export default async function Header(){
  const { user } = await getUser();
  const signInUrl = await getSignInUrl();
    return(
      
        <header>
          <div className="flex items-center justify-between ">
            <Link href={'/'} className='font-bold text-xl'>Job Board</Link>
            <nav className='flex gap-4'>
              {!user && (
                <Link className='bg-gray-200 py-2 px-4 rounded-md' href={signInUrl}>Login</Link>
              )}
              {user && (
                //<Link className='bg-gray-200' href={signOutUrl}>Logout, {user.firstName}</Link>
                <form
                  action={async () => {
                    'use server';
                    await signOut();
                  }}
                >
                  <button className='bg-gray-200 py-2 px-4 rounded-md' type="submit">Logout, {user.firstName}</button>
                </form>
              )}
              <Link className='bg-blue-600 text-white py-2 px-4 rounded-md' href={'/new-listing'}>Post a new job</Link>
            </nav>
          </div>
        </header>
    );
}