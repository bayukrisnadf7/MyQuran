import { getResponseQuran } from "@/libs/api";
import Navbar from "@/components/Utilities/Navbar";
import Audio from "@/components/Utilities/Audio";
import Pagination from "@/components/Utilities/Pagination";
import Footer from "@/components/Utilities/Footer";

const Page = async ({ params }) => {
  const { number } = params;
  const detailQuran = await getResponseQuran(`surah/${number}`);
  const nextSurah = await getResponseQuran(`surah/${detailQuran.data.number + 1}`);
  const previousSurah = await getResponseQuran(`surah/${detailQuran.data.number - 1}`);
  return (
    <>
      <Navbar />
      <div>
        <div className="mt-2">
          <Pagination 
            next={nextSurah} 
            surahPrevious={previousSurah.data.name?.transliteration.id} 
            surahNext={nextSurah.data.name?.transliteration.id} 
            previous={previousSurah} 
          />
        </div>
        <div className="text-center mt-3 dark:text-color-primary">
          <p className="text-3xl">{detailQuran.data.name.long}</p>
          <p className="text-xl font-bold">{detailQuran.data.name.transliteration.id}</p>
          <p className="text-sm">{detailQuran.data.revelation.id}</p>
        </div>
        {detailQuran.data.verses.map((quran) => {
          return (
            <div key={quran.text.number} className="p-5 md:mx-10 mx-3 bg-color-tertiary dark:bg-color-darkPrimary dark:text-color-secondary rounded-xl mt-5">
              <div className="flex flex-row justify-between items-center gap-5">
                <p className="text-xl border rounded-full p-4 bg-color-primary text-color-secondary dark:bg-color-secondary dark:text-color-darkPrimary h-max">
                  {quran.number.inSurah}
                </p>
                <p className="text-3xl">{quran.text.arab}</p>
              </div>
              <div className="flex flex-col mt-3">
                <p className="text-color-primary">{quran.text.transliteration.en}</p>
                <p>{quran.translation.id}</p>
                <Audio audio={quran.audio.primary} />
              </div>  
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default Page;
