import { useState, useEffect } from "react";
import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogFooter,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import axios from "axios";
import { DialogClose } from "@radix-ui/react-dialog";

export default function UpdateBookDialog({
	id,
	title: initialTitle,
	author: initialAuthor,
	year: initialYear,
	onBookUpdated,
}) {
	const [title, setTitle] = useState(initialTitle);
	const [author, setAuthor] = useState(initialAuthor);
	const [year, setYear] = useState(initialYear);

	useEffect(() => {
		setTitle(initialTitle);
		setAuthor(initialAuthor);
		setYear(initialYear);
	}, [initialTitle, initialAuthor, initialYear]);

	const handleUpdateBook = async () => {
		if (!title || !author || !year) {
			alert("Harap isi semua kolom!");
			return;
		}

		try {
			const updatedBook = { id, title, author, year: parseInt(year, 10) };
			const response = await axios.put(`${import.meta.env.VITE_API_BE}/books/${id}`, updatedBook);
			alert("Buku berhasil diperbarui!");
			onBookUpdated(response.data);
			setTitle("");
			setAuthor("");
			setYear("");
		} catch (error) {
			console.error("Error update book:", error);
			alert("Gagal memperbarui buku!");
		}
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="secondary" className="border">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="size-4">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
						/>
					</svg>
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle className="text-center">Perbarui Buku</DialogTitle>
					<DialogDescription className="text-center">
						Isi semua untuk memperbarui informasi buku.
					</DialogDescription>
				</DialogHeader>
				<div className="grid gap-2 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="title" className="text-right">
							Judul
						</Label>
						<Input
							id="title"
							className="col-span-3"
							placeholder="Judul buku"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="author" className="text-right">
							Author
						</Label>
						<Input
							id="author"
							className="col-span-3"
							placeholder="Author buku"
							value={author}
							onChange={(e) => setAuthor(e.target.value)}
						/>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="year" className="text-right">
							Tahun
						</Label>
						<Input
							id="year"
							type="number"
							className="col-span-3"
							placeholder="Tahun rilis"
							value={year}
							onChange={(e) => setYear(e.target.value)}
						/>
					</div>
				</div>
				<DialogFooter className="w-full flex items-center justify-center gap-1">
					<Button className="flex-grow" onClick={handleUpdateBook}>
						Perbarui
					</Button>
					<DialogClose asChild className="flex-grow">
						<Button variant="outline">Batal</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
