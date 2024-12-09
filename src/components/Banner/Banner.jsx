import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Banner = () => {

    const [bannerImage, setBannerImage] = useState("");

    useEffect(() => {
        // Fetch the image URL from banner.json
        fetch("/banner.json")
            .then((response) => response.json())
            .then((data) => setBannerImage(data.imageUrl))
            .catch((error) => console.error("Error fetching banner image:", error));
    }, []);

    return (
        <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full h-auto md:h-[500px] px-4 md:px-10 bg-[#1313130D] rounded-2xl mt-12">
            {/* Text Section */}
            <div className="w-full md:w-3/5 text-center md:text-left">
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold my-4 leading-tight">
                    Books to freshen up your bookshelf
                </h1>
                <Link to="/Listed">
                    <button className="btn bg-[#23BE0A] mt-6 md:mt-10 px-6 py-3 text-sm md:text-base">
                        View the list
                    </button>
                </Link>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-2/5 flex justify-center md:justify-end">
                <img
                    src={bannerImage}
                    alt="Bookshelf"
                    className="w-2/3 md:w-4/5 lg:w-3/4 h-auto"
                />
            </div>
        </div>
    );
};

export default Banner;
