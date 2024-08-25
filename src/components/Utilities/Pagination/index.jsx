"use client";
import Link from "next/link";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
const Pagination = ({next, previous, surahPrevious, surahNext}) => {
  return (
    <div className="flex justify-center gap-2 items-center">
      <Link href={previous ? `${previous.data.number}` : "#"}>
        <FaLongArrowAltLeft />
      </Link>
      <div className="flex text-color-primary gap-10">
        {surahPrevious ? <p>{surahPrevious}</p> : '-'}
        {surahNext ? <p>{surahNext}</p> : '-'}
      </div>
      <Link href={next ? `${next.data.number}` : "#"}>
        <FaLongArrowAltRight />
      </Link>
    </div>
  );
};
export default Pagination;
