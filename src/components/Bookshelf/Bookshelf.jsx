import { useState } from "react";

const Bookshelf = () => {
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
      ]);
    const [newBook, setNewBook] = useState({title: '', author: '' });


const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBook((prevBook) => ({
        ...prevBook,
        [name]: value,
    }));
};

const handleSubmit = (event) => {
    event.preventDefault();

    if (newBook.title.trim() && newBook.author.trim()) {
        setBooks((prevBooks) => [...prevBooks, newBook]);
        setNewBook({ title: '', author: '' })
    }
};

return (
    <div className="bookshelfDiv">
        <div className="formDiv">
            <h3>Add a Book</h3>
            {/* Form to add a new book */}
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input 
                        type="text"
                        name="title"
                        placeholder="Book Title"
                        value={newBook.title}
                        onChange={handleInputChange} 
                    />
                </label>
                <label>
                    Author:
                    <input 
                    type="text"
                    name="author"
                    placeholder="Author"
                    value={newBook.author}
                    onChange={handleInputChange}
                    />
                </label>

                <button type="submit">Add Book</button>
            </form>
        </div>
        <div className="bookCardsDiv">
            {books.map((book, index) => (
                <div key={index} className="bookCard">
                    <h4>{book.title}</h4>
                    <p>{book.author}</p>
                </div>
            ))}  
        </div>
    </div>

    );
};
export default Bookshelf;
