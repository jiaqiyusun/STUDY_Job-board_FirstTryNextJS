import Link from "next/link";

export default async function Hero(){
    return(
        <section className="container py-12">
            <h2 className="text-4xl bold text-center">
                Find your next dream job
            </h2>
            
            <form className="flex gap-2 mt-4 max-w-l mx-auto">
                <input type="search" className="border border-gray-400 w-full py-2 px-3 rounded-md"  placeholder="Search phrase..."/>
                <button className="bg-blue-600 text-white py-2 px-4 rounded-md">
                    Search
                </button>
            </form>
        </section>
    );
}