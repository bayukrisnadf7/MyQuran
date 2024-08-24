import QuranList from "@/components/QuranList";
import Navbar from "@/components/Utilities/Navbar";
import { getResponseQuran } from "@/libs/api";
import QuranSuggestion from "@/components/QuranSuggestion";
import Footer from "@/components/Utilities/Footer";

const Page = async () => {
  const quran = await getResponseQuran("surah");
  const alkahfi = await getResponseQuran("surah/18");
  const yasin = await getResponseQuran("surah/36");
  const alwaqia = await getResponseQuran("surah/56");
  const almulk = await getResponseQuran("surah/67");
  const arrahman = await getResponseQuran("surah/55");
  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap justify-center mx-5 md:w-full w-max-md mt-5 mb-5 gap-4">
        <QuranSuggestion api={alkahfi} />
        <QuranSuggestion api={yasin} />
        <QuranSuggestion api={alwaqia} />
        <QuranSuggestion api={almulk} />
        <QuranSuggestion api={arrahman} />
      </div>
      <QuranList api={quran} />
      <Footer/>
    </div>
  );
};
export default Page;
