import BookSection from "./components/bookSection";
import Header from "./components/header";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { useEffect, useState } from "react";

const buku = [
	{ id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
	{ id: 2, title: "1984", author: "George Orwell", year: 1949 },
	{ id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
	{ id: 4, title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
	{ id: 5, title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
	{ id: 6, title: "Moby-Dick", author: "Herman Melville", year: 1851 },
	{ id: 7, title: "War and Peace", author: "Leo Tolstoy", year: 1869 },
	{ id: 8, title: "Crime and Punishment", author: "Fyodor Dostoevsky", year: 1866 },
	{ id: 9, title: "The Brothers Karamazov", author: "Fyodor Dostoevsky", year: 1880 },
	{ id: 10, title: "Brave New World", author: "Aldous Huxley", year: 1932 },
	{ id: 11, title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
	{ id: 12, title: "Anna Karenina", author: "Leo Tolstoy", year: 1877 },
	{ id: 13, title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954 },
	{ id: 14, title: "Jane Eyre", author: "Charlotte Brontë", year: 1847 },
	{ id: 15, title: "Wuthering Heights", author: "Emily Brontë", year: 1847 },
	{ id: 16, title: "The Odyssey", author: "Homer", year: -800 },
	{ id: 17, title: "The Iliad", author: "Homer", year: -750 },
	{ id: 18, title: "Les Misérables", author: "Victor Hugo", year: 1862 },
	{ id: 19, title: "Don Quixote", author: "Miguel de Cervantes", year: 1605 },
	{ id: 20, title: "Frankenstein", author: "Mary Shelley", year: 1818 },
];

export default function App() {
	const [loading, setLoading] = useState(false);
	const [books, setBooks] = useState([]);

	const [keyword, setKeyword] = useState("");

	const handleSearch = () => {
		const filteredBooks = buku.filter((book) =>
			book.title.toLowerCase().includes(keyword.toLowerCase())
		);
		setBooks(filteredBooks);
	};
	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setBooks(buku);
			setLoading(false);
		}, 2000);
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
						<Button>Tambah</Button>
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
