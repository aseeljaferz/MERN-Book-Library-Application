import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";

const ShowBook = () => {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const resShow = async () => {
    try {
      const res = await axios.get(
        `https://mern-book-library-application.onrender.com/books/${id}`
      );
      if (res.status == 200) {
        setBook(res.data);
        setLoading(false);
      } else {
        console.log(res.status);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    resShow();
  }, [id]);

  return (
    <div className="p-4  flex flex-col h-full">
      <BackButton />
      <h1 className="text-3xl my-4">Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4 float-center">
          <div className="my-4">
            <span className="text-xl mr-4 text-grey-500 ">Id</span>
            <span>{book._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-grey-500 ">Title</span>
            <span>{book.title}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-grey-500 ">Author</span>
            <span>{book.author}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-grey-500 ">Publish Year</span>
            <span>{book.publishYear}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-grey-500 ">Genres</span>
            <span>{book.geners}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-grey-500 ">Create Time</span>
            <span>{new Date(book.createdAt).toString()}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-grey-500 ">
              Last updated Time
            </span>
            <span>{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
