import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";
import Banner from "../Banner/Banner";
import bannerImg from "../../assets/images/banner.jpg";
import { useState } from "react";
import { Helmet } from "react-helmet";

const Home = () => {
  const data = useLoaderData();
  const donations = data.donations;
  const [displayData, setDisplayData] = useState(donations);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value;
    const userSearch = donations.filter((item) => searchValue.toLowerCase() == item.category.toLowerCase());
    setDisplayData(userSearch);
  };

  return (
    <>
      <Helmet>
        <title>Donation Campaign </title>
      </Helmet>
      <section
        style={{ backgroundImage: `url(${bannerImg})` }}
        className="z-20 relative w-full min-h-[600px] bg-center py-24 bg-cover flex flex-col justify-center items-center"
      >
        <Banner handleSearch={handleSearch} />
      </section>
      <section className="my-20">
        <div className="container mx-auto px-5">
          <div className="grid gap-5 grid-cols-1 md:grid-cols-4">
            {displayData.length === 0 ? (
              <h2 className="col-span-4 text-2xl text-center">
                No category found !
              </h2>
            ) : (
              displayData.map((item, index) => (
                <Card key={index} donation={item} />
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
