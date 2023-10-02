import { useEffect, useState } from "react";
import { getDonations } from "../Utilities/localStorage";
import Donate from "../Donate/Donate";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";

const Donation = () => {
  const data = useLoaderData();
  const donations = data.donations;
  const [donate, setDonate] = useState([]);
  const [card, setCard] = useState(4);
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    const storedIds = getDonations();
    const donated = donations.filter((element) =>
      storedIds.includes(element.id)
    );
    setDonate(donated);
  }, [donations]);

  const handleDonate = () => {
    setCard(donate.length);
    setClicked(true)
  }

  return (
    <>
    <Helmet>
      <title>Donation | Donation campaign</title>
    </Helmet>
      <section className="mt-28 py-10">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {donate.slice(0,`${card}`).map((item) => (
              <Donate key={item.id} donate={item} />
            ))}
          </div>
          <div className="text-center mt-6">
            <button onClick={handleDonate} 
              className={`${donate.length > 4 && !clicked ? 'inline-block':'hidden'}
              bg-lime-400 px-4 py-1 text-gray-600 rounded-md font-medium`}>
              See All
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Donation;
