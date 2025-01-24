import axios from "axios";
import BookSection from "./components/bookSection";
import Header from "./components/header";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { useEffect, useState } from "react";
import AddBookDialog from "./components/addDialogs";

export default function App() {
	const [loading, setLoading] = useState(false);
	const [books, setBooks] = useState([]);

	const [keyword, setKeyword] = useState("");

	const handleSearch = () => {
		const filteredBooks = books.filter((book) =>
			book.title.toLowerCase().includes(keyword.toLowerCase())
		);
		setBooks(filteredBooks);
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

	// menambahkan buku
	const addBook = async (book) => {
		try {
			const response = await axios.post(`${import.meta.env.VITE_API_BE}/books`, book);
			console.log("Book added successfully:", response.data);
		} catch (error) {
			console.error("Error adding book:", error.message);
		}
	};

	// menghapus buku
	const deleteBook = async (id) => {
		try {
			const response = await axios.delete(`${import.meta.env.VITE_API_BE}/books/${id}`);
			console.log("Book deleted successfully:", response.data);
		} catch (error) {
			console.error("Error deleting book:", error.message);
		}
	};

	// memperbarui buku
	const updateBook = async (id, updatedBook) => {
		try {
			const response = await axios.put(`${import.meta.env.VITE_API_BE}/books/${id}`, updatedBook);
			console.log("Book updated successfully:", response.data);
		} catch (error) {
			console.error("Error updating book:", error.message);
		}
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
									<BookSection author={book.author} title={book.title} year={book.year} />
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
}
