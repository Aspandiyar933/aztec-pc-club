import Link from "next/link";

export function Navbar() {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-6 my-8">
      <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="logo.jpeg" className="h-8" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Aztec
        </span>
      </a>
    </div>
  );
}
