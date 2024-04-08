import Link from "next/link";
import { PathType } from "../utilis/type";

const Breadcrumb: React.FC<{ paths: PathType[], title:string }> = ({ paths , title}) => {
    return (
        <div className="bg-dark bg-center bg-bottom bg-no-repeat bg-scroll" >
            <div className="container mx-auto max-w-screen-xl px-4 py-12 text-white">
                <div className="mt-24">
                    <h2 className="title">{title}</h2>
                    <nav className="flex mt-4" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                            <li className="inline-flex items-center">
                                <Link href="/" className="inline-flex items-center text-sm font-medium ">
                                    <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                    </svg>
                                    Home
                                </Link>
                            </li>
                            {paths.map((path: PathType, index: number) => (
                                <li key={index} className="flex items-center">
                                    <svg className="rtl:rotate-180 w-3 h-3 text-gray mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <Link href={path?.url}
                                        className={`${path.disabled ? 'text-gray' : 'text-white'} ms-1 text-sm font-medium md:ms-2`}>
                                        {path?.title}
                                    </Link>
                                </li>
                            ))}
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Breadcrumb;
