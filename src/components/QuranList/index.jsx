import Link from "next/link";

const QuranList = ({ api }) => {
  return (
    <div className="grid grid-cols-3 mx-24 gap-4 p-4">
      {api.data?.map((quran) => (
        <Link href={`/quran/${quran.nomor}`} key={quran.nomor}>
          <div className="bg-color-tertiary border dark:bg-color-darkPrimary border-color-secondary hover:border-color-primary rounded-lg min-h-28 flex items-center">
            <div className="grid grid-cols-3 items-center font-bold min-w-full p-3">
              <p className="text-lg dark:text-color-secondary">{quran.nomor}</p>
              <div className="flex flex-col gap-1 text-sm">
                <p className="dark:text-color-secondary">{quran.namaLatin}</p>
                <p className="dark:text-color-secondary">{quran.arti}</p>
              </div>
              <div className="flex flex-col text-sm dark:text-color-secondary">
                <p className="text-end ">{quran.nama}</p>
                <p className="text-end">{`${quran.jumlahAyat} Ayat`}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default QuranList;
