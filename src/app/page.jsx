import QuranList from "@/components/QuranList";
import Navbar from "@/components/Utilities/Navbar";
import { getResponseQuran } from "@/libs/api";
import QuranSuggestion from "@/components/QuranSuggestion";

const Page = async () => {
  const quran = await getResponseQuran("surat");
  const alkahfi = await getResponseQuran("surat/18");
  const yasin = await getResponseQuran("surat/36");
  const alwaqia = await getResponseQuran("surat/56");
  const almulk = await getResponseQuran("surat/67");
  const arrahman = await getResponseQuran("surat/55");
  return (
    <div>
      <Navbar />
      <div className="flex flex-row justify-center mt-5 mb-5 gap-4">
        <QuranSuggestion api={alkahfi} />
        <QuranSuggestion api={yasin} />
        <QuranSuggestion api={alwaqia} />
        <QuranSuggestion api={almulk} />
        <QuranSuggestion api={arrahman} />
      </div>
      <QuranList api={quran} />
    </div>
  );
};
export default Page;
