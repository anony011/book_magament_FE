import { Button } from "./ui/button";
import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogFooter,
} from "./ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import axios from "axios";

export default function DeleteBookDialog({ onBookDeleted, id, title }) {
	const handleDeleteBook = async () => {
		try {
			await axios.delete(`${import.meta.env.VITE_API_BE}/books/${id}`);
			onBookDeleted(id);
			alert("Buku berhasil dihapus!");
		} catch (error) {
			console.error("Error deleting book:", error);
			alert("Gagal menghapus buku!");
		}
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="destructive">
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
							d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
						/>
					</svg>
				</Button>
			</DialogTrigger>

			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle className="text-center">Hapus Data Buku</DialogTitle>
					<DialogDescription className="text-center">
						Apakah Anda yakin ingin menghapus buku <strong>{title}</strong> ini?
					</DialogDescription>
				</DialogHeader>

				<span className="flex items-center justify-center w-full">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.3}
						stroke="currentColor"
						className="size-10/12">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
						/>
					</svg>
				</span>

				<DialogFooter className="w-full flex items-center justify-center gap-1">
					<Button className="flex-grow" onClick={handleDeleteBook} variant="destructive">
						Hapus
					</Button>
					<DialogClose asChild className="flex-grow">
						<Button variant="outline">Batal</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
