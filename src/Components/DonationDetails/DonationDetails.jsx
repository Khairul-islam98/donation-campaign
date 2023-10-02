import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { saveDonations } from "../Utilities/localStorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";

const DonationDetails = () => {
    const data = useLoaderData()
    const donations = data.donations;
    const { id } = useParams();
    const [category, setCategory] = useState([]);
    const [clicked, setClicked] = useState(false);

    const { images, title, price, description, text_button } = category;

    useEffect(() => {
        const current = donations.find(item => item.id == id);
        setCategory(current);
    }, [donations, id])

    const handleDonations = () => {
        toast.success("Donation succeed !", {
        });

        saveDonations(parseInt(id))
        setClicked(true)
    }

    return (
        <>
            <ToastContainer />
            <Helmet>
                <title>Donation Details: {id}</title>
            </Helmet>
            <section className="py-24">
                <div className="container mx-auto px-5">
                    <div className="space-y-5">
                        <div className="relative">
                            <div className="before:absolute before:bg-[rgba(26,25,25,0.43)] before:h-16 md:before:h-24 
                        before:w-full before:bottom-0">
                                <img className="w-full h-[200px] md:h-[500px] object-cover  object-center" src={images} alt={title} />
                            </div>
                            <button disabled={clicked} onClick={handleDonations}
                                className={`absolute bottom-3 md:bottom-[26px] z-10 left-5 px-5 py-2 text-white`}
                                style={clicked ? { backgroundColor: '#928a8a', color: '#bab7b7', cursor: 'not-allowed' } : { backgroundColor: `${text_button}` }} >
                                Donate ${price}</button>
                        </div>
                        <div>
                            <h2 className="text-3xl font-semibold">{title}</h2>
                        </div>
                        <div>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DonationDetails;