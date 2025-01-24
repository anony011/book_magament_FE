import BookSection from "./components/bookSection";
import Header from "./components/header";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { useEffect, useState } from "react";

const buku = [
	{
		id: 1,
		title: "Buku 1",
		author: "Author 1",
		year: 2021,
	},
	{
		id: 2,
		title: "Buku 2",
		author: "Author 2",
		year: 2021,
	},
	{
		id: 3,
		title: "Buku 3",
		author: "Author 3",
		year: 2021,
	},
];

export default function App() {
	const [loading, setLoading] = useState(false);
	const [books, setBooks] = useState([]);

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
					<Input placeholder="Cari Judul Buku" />
					<span className="flex items-center gap-1">
						<Button>Cari</Button>
						<Button>Tambah</Button>
					</span>
				</div>
				{/* END CONTENT HEAD */}

				{/* CONTENT */}
				{books.length > 0 && (
					<div className="max-h-[45rem] w-1/2 flex flex-col gap-2 items-center justify-center border px-2 py-5 rounded-lg shadow-md">
						{books.map((book) => (
							<BookSection key={book.id} author={book.author} title={book.title} year={book.year} />
						))}
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
