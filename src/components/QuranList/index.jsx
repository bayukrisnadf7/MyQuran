import Link from "next/link";

const QuranList = ({ api }) => {
  return (
    <div className="grid grid-cols-3 mx-24 gap-4 p-4">
      {api.data?.map((quran) => (
        <Link href={`/quran/${quran.nomor}`} key={quran.nomor}>
          <div className="bg-color-tertiary border border-color-secondary hover:border-color-primary rounded-lg min-h-28 flex items-center">
            <div className="grid grid-cols-3 items-center font-bold min-w-full p-3">
              <p className="text-lg">{quran.nomor}</p>
              <div className="flex flex-col gap-1 text-sm">
                <p>{quran.namaLatin}</p>
                <p>{quran.arti}</p>
              </div>
              <div className="flex flex-col text-sm">
                <p className="text-end">{quran.nama}</p>
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
