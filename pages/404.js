import Link from "next/link";
import {useEffect} from "react";
import {useRouter} from "next/router";

const Page404 = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 5000)
    }, []);

    return (
        <div className="container vh-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-md-12">
                    <div className="text-center">
                        <h1 className="font-weight-bold size-404 text-yellow-primary mb-0">404</h1>
                        <h2 className="font-weight-500">Page not found</h2>
                        <p className="text-center mb-5">
                            The page you were looking for does not exist. You might have been following an old <br/>
                            link or misspelled something in the URL.s
                        </p>

                        <Link href="/">
                            <a className="btn btn-primary-yellow font-weight-500 btn-large">
                                Back to Home
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Page404
