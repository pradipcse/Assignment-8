import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookId, bookName, author, image, rating, category, tags } = book;

    return (
        <Link to={`/book/${bookId}`} className="hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
            <div className="card card-compact bg-base-100 shadow-xl flex flex-col h-full">
                {/* Image Section */}
                <figure className="flex justify-center items-center h-60 md:h-72 lg:h-80 w-full p-6">
                    <img
                        src={image}
                        alt={`${bookName} cover`}
                        className="object-contain h-full w-full"
                    />
                </figure>

                {/* Content Section */}
                <div className="card-body flex flex-col gap-4 p-4 md:p-6">
                    {/* Tags */}
                    <div className="flex gap-2 flex-wrap text-xs md:text-sm text-gray-500">
                        {tags.map((tag, indx) => (
                            <span
                                key={indx}
                                className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md">
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Book Title */}
                    <h2 className="card-title text-base md:text-lg font-semibold text-gray-800">
                        {bookName}
                    </h2>

                    {/* Author */}
                    <p className="text-sm md:text-base text-gray-600">
                        By: <span className="font-medium">{author}</span>
                    </p>

                    <hr className="border-t my-2" />

                    {/* Category and Rating */}
                    <div className="flex justify-between items-center">
                        <p className="text-sm md:text-base font-medium text-gray-700">
                            {category}
                        </p>
                        <p className="flex gap-1 items-center text-sm md:text-base text-yellow-500 font-semibold">
                            {rating} <FaStar />
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

Book.propTypes = {
    book: PropTypes.object.isRequired,
};

export default Book;
