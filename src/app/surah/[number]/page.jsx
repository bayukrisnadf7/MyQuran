import { getResponseQuran } from "@/libs/api";
import Navbar from "@/components/Utilities/Navbar";

const Page = async ({ params }) => {
  const { number } = params;
  const detailQuran = await getResponseQuran(`surah/${number}`);

  return (
    <>
      <Navbar />
      <div>
        <div className="text-center mt-3 dark:text-color-primary">
          <p className="text-3xl">{detailQuran.data.name.long}</p>
          <p className="text-xl font-bold">{detailQuran.data.name.transliteration.id}</p>
          <p className="text-sm">{detailQuran.data.revelation.id}</p>
        </div>
        {detailQuran.data.verses.map((quran) => {
          return (
            <div key={quran.text.number} className="p-5 mx-10 bg-color-tertiary dark:bg-color-darkPrimary dark:text-color-secondary rounded-xl mt-5">
              <div className="flex flex-row justify-between ">
                <p className="text-xl border rounded-full p-4 bg-color-primary text-color-secondary dark:bg-color-secondary dark:text-color-darkPrimary">{quran.number.inSurah}</p>
                <p className="text-3xl">{quran.text.arab}</p>
              </div>
              <div className="flex flex-col mt-3">
                <p>{quran.text.transliteration.en}</p>
                <p>{quran.translation.id}</p>
                <audio controls src={quran.audio.primary} className="mt-2"></audio>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Page;
