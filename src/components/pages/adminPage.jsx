import axios from "axios";
import BookSection from "../bookSection";
import Header from "../header";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useEffect, useState } from "react";
import AddBookDialog from "../addDialogs";

const AdminPage = () => {
	const [loading, setLoading] = useState(false);
	const [books, setBooks] = useState([]);

	const [keyword, setKeyword] = useState("");

	const handleSearch = () => {
		if (keyword === "") {
			return fetchBooks();
		} else {
			const filteredBooks = books.filter((book) =>
				book.title.toLowerCase().includes(keyword.toLowerCase())
			);
			setBooks(filteredBooks);
		}
	};

	// menampilkan buku
	const fetchBooks = async () => {
		setLoading(true);
		try {
			const response = await axios.get(`${import.meta.env.VITE_API_BE}/books`);
			setBooks(response.data);
		} catch (error) {
			console.error("Error fetching books:", error.message, error.response);
		} finally {
			setLoading(false);
		}
	};

	// menghapus buku
	const handleDeleteBook = (bookId) => {
		setBooks((prevBooks) => prevBooks.filter((book) => book.book_id !== bookId));
	};

	// memperbarui buku
	const handleUpdateBook = (updatedBook) => {
		setBooks((prevBooks) =>
			prevBooks.map((book) => (book.book_id === updatedBook.book_id ? updatedBook : book))
		);
	};

	useEffect(() => {
		fetchBooks();
	}, []);

	return (
		<>
			<Header />
			<div className="flex flex-col items-center justify-center my-20 gap-5">
				{/* CONTENT HEAD*/}
				<div className="flex justify-between gap-2 w-1/2">
					<Input
						placeholder="Cari Judul Buku"
						value={keyword}
						onChange={(e) => setKeyword(e.target.value)}
					/>
					<span className="flex items-center gap-1">
						{/* Hapus pemanggilan langsung handleSearch */}
						<Button onClick={handleSearch}>Cari</Button>
						<AddBookDialog
							onBookAdded={(newBook) => setBooks((prevBooks) => [...prevBooks, newBook])}
						/>
					</span>
				</div>
				{/* END CONTENT HEAD */}

				{/* CONTENT */}
				{books.length > 0 && (
					<div className="max-h-[45rem] w-3/4 flex flex-col gap-4 items-center justify-start border px-4 py-5 rounded-lg shadow-lg overflow-y-auto bg-white">
						<h2 className="text-xl font-semibold mb-4">Daftar Buku</h2>
						<ul className="w-full space-y-4">
							{books.map((book) => (
								<li key={book.id}>
									<BookSection
										author={book.author}
										title={book.title}
										year={book.year}
										id={book.book_id}
										handleDeleteBook={handleDeleteBook}
										handleUpdateBook={handleUpdateBook}
									/>
								</li>
							))}
						</ul>
					</div>
				)}

				{/* HANDLING BUKU KOSONG */}
				{books.length === 0 && (
					<div className="h-[45rem] w-1/2 flex flex-col gap-4 items-center justify-center border px-2 rounded-lg shadow-md">
						{loading ? "Memuat buku..." : "Belum ada buku yang tersedia"}
					</div>
				)}
				{/* END HANDLING BUKU KOSONG */}

				{/* END CONTENT */}
			</div>
		</>
	);
};

export default AdminPage;
