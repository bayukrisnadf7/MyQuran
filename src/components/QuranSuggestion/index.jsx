import Link from "next/link";

const QuranSuggestion = ({ api }) => {
  const { data } = api;
  return (
    <div className="bg-color-quaternary w-max p-2 rounded-lg">
      <Link href={`/quran/${data.nomor}`}>
        <p className="text-color-tertiary">{data.namaLatin}</p>
        
      </Link>
    </div>
  );
};
export default QuranSuggestion;
