import Link from "next/link";

const QuranSuggestion = ({ api }) => {
  const { data } = api;
  return (
    <div className="bg-color-quaternary w-max p-2 rounded-lg">
      <Link href={`/quran/${data.number}`}>
        <p className="text-color-tertiary">{data.name?.transliteration.id}</p>
        
      </Link>
    </div>
  );
};
export default QuranSuggestion;
