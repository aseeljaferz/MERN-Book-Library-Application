import React, { useEffect, useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CreateBook = () => {
  const [type, setType] = useState('book');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [geners, setGeners] = useState('');
  const [aboutBook, setAboutBook] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const handlseSaveBook = async () => {
    if (!title) {
      enqueueSnackbar('Please type the title', { variant: 'error' });
      return;
    }
    if (!author) {
      enqueueSnackbar('Author is missing', { variant: 'error' });
      return;
    }
    if (!publishYear) {
      enqueueSnackbar('Publish Year is missing', { variant: 'error' });
      return;
    }
    if (!type) {
      enqueueSnackbar('Please provide the Type', { variant: 'error' });
      return;
    }
    if (!geners) {
      enqueueSnackbar('Genres is missing', { variant: 'error' });
      return;
    }
    if (!aboutBook) {
      enqueueSnackbar('About Book is missing', { variant: 'error' });
      return;
    }
    const data = { title, author, publishYear, geners, aboutBook, type};
    try {
      const res = await axios.post(
        `https://mern-book-library-application.onrender.com/books`,
        data
      );
      setLoading(false);
      enqueueSnackbar('Book Created successfully', { variant: 'success' });
      navigate('/');
    } catch (error) {
      setLoading(false);
      enqueueSnackbar('Book is not Created', { variant: 'error' });
      console.log(error);
    }
  };

  return (
    <div className="p-4">
      <BackButton />
      <div className="text-3xl my-4">Create Book</div>
      {loading ? <Spinner /> : ''}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[350px] p-4 mx-auto">
        <div className="my-4">
          <div className="text-xl mr-4 text-grey-500">Title</div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-grey-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <div className="text-xl mr-4 text-grey-500">Author</div>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-grey-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <div className="text-xl mr-4 text-grey-500">Publish Year</div>
          <input
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-grey-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <div className="text-xl mr-4 text-grey-500">Type</div>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="border-2 border-grey-500 px-4 py-2 w-full"
          >
            <option value="book">Book</option>
            <option value="magazine">Magazine</option>
          </select>
        </div>
        <div className="my-4">
          <div className="text-xl mr-4 text-grey-500">Genres</div>
          <input
            type="text"
            value={geners}
            onChange={(e) => setGeners(e.target.value)}
            className="border-2 border-grey-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <div className="text-xl mr-4 text-grey-500">About Book</div>
          <textarea
            value={aboutBook}
            onChange={(e) => setAboutBook(e.target.value)}
            className="border-2 border-grey-500 px-4 py-2 w-full"
          />
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handlseSaveBook}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateBook;
