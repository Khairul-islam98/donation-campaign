import PropTypes from 'prop-types'
const Banner = ({handleSearch}) => {
  return (
    <>
        <div className="absolute w-full h-full bg-[rgba(225,226,226,0.76)] -z-40"></div>
          <div className="space-y-5">
            <div>
              <h2 className="text-center text-3xl text-black font-semibold">I Grow By Helping People In Need</h2>
            </div>
            <div className="text-center">
              <form onSubmit={handleSearch}>
                <input className="py-1 pl-2 ring-1 outline-none" type="text" name="search" placeholder="Search here..." />
                <button className="bg-rose-500 px-4 py-1 rounded-r-md text-white">Search</button>
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
