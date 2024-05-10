import {Link} from '../../navigation';

export const runtime ="edge";

export default function Home() {

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div style={{ background: '#606be5'}} className="m-4 bg-white p-8 rounded-lg shadow-lg max-w-sm flex flex-col items-center">
                <p  className=" text-5xl font-bold text-black text-gray-800 text-center font-semibold mb-4">
                RANDOM WHEEL 🎯🧿
                </p>
                <Link href="/wheel" style={{ background: '#09e4d0'}} className="px-4 py-2  text-white rounded  transition duration-150 ease-in-out">
                    PLAY
                </Link>
            </div>
        </div>
    )
}
