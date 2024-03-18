import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiMovie } from "react-icons/bi";
import BackButton from "../BackButton";

const BookModel = ({ book, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center text-justify "
      onClick={onClose}
    >
      <BackButton />
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative overflow-x-auto m-2"
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
          {book.publishYear}
        </h2>
        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl mt-2" />
          <b className="mt-2"> {book.title} </b>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="my-1 text-2xl" />
          <h2 className="my-1">{book.author}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiMovie className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.geners}</h2>
        </div>
        <b className="mt-4">Description,</b>
        <p className="my-2 relative" >
          {book.aboutBook}
        </p>
      </div>
    </div>
  );
};

export default BookModel;
