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

const BookSection = ({ title, author, year }) => {
	return (
		<div className="flex gap-4 items-center justify-between border w-full px-2 py-1 rounded-lg ">
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
					<h1>{title}</h1>
					<small>
						{author}- {year}
					</small>
				</span>
			</span>
			{/* END BOOK TITLE */}

			{/* BUTTON */}
			<span className="flex gap-1">
				{/* UPDATE BOOK */}
				<Dialog>
					<DialogTrigger asChild>
						<Button variant="secondary">
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
							<DialogDescription>
								Isi semua untuk memperbarui informasi buku <strong>{title}</strong>
							</DialogDescription>
						</DialogHeader>
						<div className="grid gap-2 py-4">
							<div className="grid grid-cols-4 items-center gap-4">
								<Label htmlFor="title" className="text-right">
									Judul
								</Label>
								<Input id="title" className="col-span-3" placeholder={title} />
							</div>
							<div className="grid grid-cols-4 items-center gap-4">
								<Label htmlFor="author" className="text-right">
									Author
								</Label>
								<Input id="author" className="col-span-3" placeholder={author} />
							</div>
							<div className="grid grid-cols-4 items-center gap-4">
								<Label htmlFor="year" className="text-right">
									Tahun
								</Label>
								<Input id="year" className="col-span-3" placeholder={year} />
							</div>
						</div>
						<DialogFooter>
							<Button type="submit" className="w-full">
								Simpan Perubahan
							</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>
				{/* END UPDATE BOOK */}

				{/* DELETE BOOK */}
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
							<DialogTitle className="text-center">Hapus Buku</DialogTitle>
							<DialogDescription className="text-center">
								Anda yakin akan menghapus buku <strong>{title}</strong>?
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

						<DialogFooter className={"flex gap- justify-center w-full items-center"}>
							<Button type="submit" variant="destructive" className={"flex-grow"}>
								Yakin
							</Button>
							<Button type="submit" className={"flex-grow"}>
								Batalkan
							</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>
				{/* END DELETE BOOK */}
			</span>
			{/* END BUTTON */}
		</div>
	);
};

export default BookSection;
