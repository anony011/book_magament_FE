import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./ui/dialog";
import DeleteBookDialog from "./deleteDialogs";
import UpdateBookDialog from "./updateDialogs";

const BookSection = ({ title, author, year, id, handleDeleteBook, handleUpdateBook }) => {
	const handleUpdate = () => {
		console.log("Update book", title);
	};

	return (
		<div className="w-full p-4 border rounded-lg shadow-sm flex gap-2 bg-gray-50 hover:bg-gray-100 transition duration-200 items-center justify-between">
			{/* BOOK TITLE */}

			<span className="flex gap-2 items-center">
				<Button variant="outline">
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
							d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
						/>
					</svg>
				</Button>
				<span className="grid gap-0">
					<p className="font-semibold">{title}</p>
					<small>
						{author} - {year}
					</small>
				</span>
			</span>
			{/* END BOOK TITLE */}

			{/* BUTTON */}
			<span className="flex gap-1">
				{/* UPDATE BOOK */}
				<UpdateBookDialog
					id={id}
					title={title}
					author={author}
					year={year}
					onBookUpdated={handleUpdateBook}
				/>
				{/* END UPDATE BOOK */}

				{/* DELETE BOOK */}
				<DeleteBookDialog id={id} title={title} onBookDeleted={handleDeleteBook} />
				{/* END DELETE BOOK */}
			</span>
			{/* END BUTTON */}
		</div>
	);
};

export default BookSection;
