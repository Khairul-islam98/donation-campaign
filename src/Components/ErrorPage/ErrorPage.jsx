import Header from "../Header/Header";

const ErrorPage = () => {
    return (
        <>
            <Header />
            <section className="">
                <div className="container mx-auto px-5">
                    <div className="flex flex-col justify-center items-center min-h-[calc(100vh-7rem)]">
                        <div className="space-y-5 text-center">
                            <h2 className="text-3xl font-extrabold">Opps!</h2>
                            <p className="text-gray-500 text-xl">404 not found</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ErrorPage;