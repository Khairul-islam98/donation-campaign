import PropTypes from 'prop-types'
const Banner = ({handleSearch}) => {
  return (
    <>
        <div className="absolute w-full h-full bg-[rgba(225,226,226,0.76)] -z-40"></div>
          <div className="space-y-5">
            <div>
              <h2 className="text-center text-4xl text-black font-bold">I Grow By Helping People In Need</h2>
            </div>
            <div className="text-center">
              <form onSubmit={handleSearch}>
                <input className="py-1 input input-bordered w-1/2 pl-2 ring-1 outline-none" type="text" name="search" placeholder="Search here..." />
                <button className="bg-[#FF444A] px-4 py-1 rounded-r-md text-white">Search</button>
              </form>
            </div>
          </div>
    </>
  );
};

Banner.propTypes = {
  handleSearch: PropTypes.func.isRequired,
}

export default Banner;
