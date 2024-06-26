import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';
import SearchFilter from '../components/home/SearchFilter';
import { useSnackbar } from 'notistack';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('card');
  const [searchQuery, setSearchQuery] = useState('');
  const { enqueueSnackbar } = useSnackbar();

  const resHome = () => {
    setLoading(true);
    axios
      .get(`https://mern-book-library-application.onrender.com/books`)
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    resHome();
  }, [searchQuery]);

  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4 ml-20 max-sm:ml-0">
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => {
            setShowType('card');
          }}
        >
          Card
        </button>
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => {
            setShowType('table');
          }}
        >
          table
        </button>
      </div>
      <div className="flex justify-evenly items-center max-sm:justify-between">
        <h1 className="text-3xl my-8 max-sm:hidden">Books List</h1>
        <SearchFilter
          books={books}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          // searchCriteria={searchCriteria}
          // setSearchCriteria={setSearchCriteria}
        />
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType == 'card' ? (
        <BooksCard
          books={books}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      ) : (
        <BooksTable books={books} searchQuery={searchQuery} />
      )}
    </div>
  );
};

export default Home;
