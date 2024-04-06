import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import { Link } from "react-router-dom";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const handleDeleteBook = async () => {
    try {
      setLoading(true);
      const res = await axios.delete(
        `https://mern-book-library-application.onrender.com/books/${id}`
      );
      if (res.status == 200) {
        setLoading(false);
        enqueueSnackbar("Book deleted successfully", { variant: "success" });
        navigate("/");
      } else {
        console.log("An error occured");
      }
    } catch (error) {
      setLoading(false);
      enqueueSnackbar("error", { variant: "error" });
      console.log(error);
    }
  };

  return (
    <div className="p-4 ">
      <BackButton />
      <h1 className="text-3xl my-4 ">
        {loading ? <Spinner /> : ""}
        <div className="flex flex-col my-10 items-center border-2 border-sky-400 rounded-xl w-[350px] p-8 mx-auto">
          <h3 className="text-2xl text-center">
            Are you sure you want to delete this book
          </h3>
          <button
            className="p-4 bg-red-600 text-white m-8 w-full"
            onClick={handleDeleteBook}
          >
            Yes, Delete it
          </button>
          <button className="p-4 bg-red-600 text-white m-8 w-full">
            <Link to="/">No</Link>
          </button>
        </div>
      </h1>
    </div>
  );
};

export default DeleteBook;
