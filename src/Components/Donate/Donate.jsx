import { Link } from 'react-router-dom';

const Donate = ({donate}) => {
    const {id, images, title, category, price, card_bg, category_bg, text_button} = donate;
    return (
        <>
            <div className={`flex gap-5 items-center justify-between md:justify-normal`} style={{backgroundColor:`${card_bg}`}}>
                <div className="w-1/2 md:w-auto">
                    <img className="w-40 h-36 object-cover" src={images} alt="" />
                </div>
                <div className="space-y-1 py-2 w-1/2 md:w-auto">
                    <h5 className="inline-block px-2 rounded-sm py-1 text-xs" style={{backgroundColor:`${category_bg}`,color:`${text_button}`}}>{category}</h5>
                    <h3 className="text-sm md:text-xl">{title}</h3>
                    <p className="text-lg font-semibold" style={{color:`${text_button}`}}>${price}</p>
                    <Link to={`/details/${id}`}>
                    <button className="px-4 py-1 text-base md:text-lg rounded-lg text-white" style={{backgroundColor:`${text_button}`}}>View Details</button>
                    </Link>
                </div>
            </div>
        </>
    );
};


export default Donate;