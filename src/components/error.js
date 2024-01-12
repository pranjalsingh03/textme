import { useRouteError } from "react-router-dom";

export default function Error() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className=" flex justify-center items-center h-screen bg-gray-200" id="error-page">
            <pre>
                <h1 className="">Oops! </h1>

                <p className="">Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </pre>


        </div>

    );
}