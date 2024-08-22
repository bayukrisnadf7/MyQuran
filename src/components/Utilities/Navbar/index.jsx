import InputSearch from "./InputSearch";
import ThemesToogle from "./ThemesToogle";

const Navbar = () => {
  return (
    <div className="w-full h-20 dark:bg-color-darkPrimary flex justify-between p-5">
        <h1 className="text-color-primary dark:text-color-secondary font-bold text-2xl mx-52 text-center">MyQuran</h1>
        <div className="flex mx-52 gap-5">
        <InputSearch />
        <ThemesToogle/>
        </div>
    </div>
  );
};
export default Navbar;
