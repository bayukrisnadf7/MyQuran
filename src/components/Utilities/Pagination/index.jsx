"use client";
import Link from "next/link";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
const Pagination = ({next, previous, surahPrevious, surahNext}) => {
  return (
    <div className="flex justify-center gap-2 items-center">
      <Link href={previous ? `${previous.data.number}` : "#"}>
        <FaLongArrowAltLeft size={20} />
      </Link>
      <div className="flex text-color-primary gap-10 dark:text-color-tertiary">
        {surahPrevious ? <p>{surahPrevious}</p> : '-'}
        {surahNext ? <p>{surahNext}</p> : '-'}
      </div>
      <Link href={next ? `${next.data.number}` : "#"}>
        <FaLongArrowAltRight size={20} />
      </Link>
    </div>
  );
};
export default Pagination;
