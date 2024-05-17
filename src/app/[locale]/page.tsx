// import {Link} from '../../navigation';
import Link from 'next/link'
import {useTranslations} from 'next-intl';



export const runtime ="edge";

export default function Home() {
    const t = useTranslations('wheel');

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div style={{ background: '#606be5'}} className="m-4 bg-white p-8 rounded-lg shadow-lg max-w-sm flex flex-col items-center">
                <p  className=" text-5xl font-bold text-black text-center  mb-4">
                {t('title')} 🎯</p>
                <Link href="/wheel" style={{ background: '#09e4d0',color:"black"}} className="px-4 py-2  rounded  transition duration-150 ease-in-out">
                <svg  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 70 70" className='m-auto h-6 w-6'>
                    <path id="Path" fill="currentColor" stroke="currentColor"  d="M 5.976074 66.314453 C 6.822388 66.314453 7.628052 66.167969 8.393066 65.875 C 9.158081 65.582031 9.947388 65.191406 10.76123 64.703125 L 54.706543 39.410156 C 56.496948 38.36853 57.733887 37.448853 58.41748 36.651367 C 59.101074 35.853882 59.442871 34.901733 59.442871 33.794922 C 59.442871 32.68811 59.101074 31.735962 58.41748 30.938477 C 57.733887 30.140991 56.496948 29.221313 54.706543 28.179688 L 10.76123 2.886719 C 9.947388 2.398438 9.158081 2.007813 8.393066 1.714844 C 7.628052 1.421875 6.822388 1.275391 5.976074 1.275391 C 4.446167 1.275391 3.233521 1.820679 2.338379 2.911133 C 1.443237 4.001587 0.995605 5.458374 0.995605 7.28125 L 0.995605 60.308594 C 0.995605 62.13147 1.443237 63.588257 2.338379 64.678711 C 3.233521 65.769165 4.446167 66.314453 5.976074 66.314453 Z"/>
                </svg>

                </Link>
            </div>
        </div>
    )
}
