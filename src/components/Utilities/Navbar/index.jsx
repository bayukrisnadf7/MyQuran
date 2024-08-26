import Link from "next/link";
import InputSearch from "./InputSearch";
import ThemesToogle from "./ThemesToogle";

const Navbar = () => {
  return (
    <div className="md:w-full h-20 dark:bg-color-darkPrimary flex justify-between items-center  p-5">
      <Link
        href={"/"}
        className="text-color-primary dark:text-color-secondary font-bold text-2xl md:mx-52 text-center"
      >
        MyQuran
      </Link>
      <div className="flex md:mx-52 items-center gap-2">
        <ThemesToogle />
        {/* <InputSearch /> */}
      </div>
    </div>
  );
};
export default Navbar;
