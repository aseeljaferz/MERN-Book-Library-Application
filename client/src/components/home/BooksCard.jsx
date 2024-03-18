import BooksSingleCard from "./BooksSingleCard";

const BooksCard = ({ books, searchQuery}) => {
    const filterBooks = books.filter((book) => {
        return book.title.toLowerCase().includes(searchQuery.toLowerCase()) || book.author.toLowerCase().includes(searchQuery.toLowerCase()) || book.publishYear.toString()>=searchQuery ;
    })
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filterBooks
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .map((item, index) => (
                <BooksSingleCard key={item._id} book={item} index={index} />
            ))}
        </div>
    )
}

export default BooksCard;