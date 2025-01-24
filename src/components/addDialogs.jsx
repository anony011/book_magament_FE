import { useState, useRef } from "react";
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
import Swal from "sweetalert2";

export default function AddBookDialog({ onBookAdded }) {
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [year, setYear] = useState("");

	const dialogCloseRef = useRef(null);

	const handleAddBook = async () => {
		if (!title || !author || !year) {
			alert("Harap isi semua kolom!");
			return;
		}

		try {
			const newBook = { title, author, year: parseInt(year, 10) };
			const response = await axios.post(`${import.meta.env.VITE_API_BE}/books`, newBook);
			onBookAdded(response.data);
			setTitle("");
			setAuthor("");
			setYear("");
			Swal.fire({
				position: "top-end",
				icon: "success",
				title: "Data Berhasil Ditambahkan",
				showConfirmButton: false,
				timer: 1500,
			});

			dialogCloseRef.current.click();
		} catch (error) {
			console.error("Error adding book:", error);
			alert("Gagal menambahkan buku!");
		}
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="secondary" className="border">
					Tambah
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle className="text-center">Tambah Buku</DialogTitle>
					<DialogDescription className="text-center">
						Isi semua untuk menambahkan informasi buku.
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
					<Button className="flex-grow" onClick={handleAddBook}>
						Tambahkan
					</Button>
					<DialogClose asChild ref={dialogCloseRef} className="flex-grow">
						<Button variant="outline">Batal</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
