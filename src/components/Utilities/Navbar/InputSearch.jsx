"use client";

import { CiSearch } from "react-icons/ci";
import { useRef } from "react";
import { useRouter } from "next/navigation";
const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();
  const handleSearch = (event) => {
    event.preventDefault();
    const input = searchRef.current.value;
    router.push(`/surah/${input}`);
  };
  return (
    <>
      <form onSubmit={handleSearch}>
        <div className="relative">
          <input
            ref={searchRef}
            type="text"
            placeholder="Cari surah..."
            className="h-8 md:w-full  flex items-center justify-center border border-color-primary dark:bg-color-secondary cursor-pointer rounded-full p-4"
          />
          <CiSearch
            size={20}
            className="absolute text-color-primary right-2 top-1.5"
          />
        </div>
      </form>
    </>
  );
};
export default InputSearch;
