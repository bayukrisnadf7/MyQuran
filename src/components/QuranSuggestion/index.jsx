import Link from "next/link";

const QuranSuggestion = ({ api }) => {
  const { data } = api;
  return (
    <div className="bg-color-quaternary min-w-20 p-2 rounded-lg">
      <Link href={`/surah/${data.number}`}>
        <p className="text-color-tertiary text-center">{data.name?.transliteration.id}</p>
        
      </Link>
    </div>
  );
};
export default QuranSuggestion;
