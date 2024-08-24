import InputSearch from "./InputSearch";
import ThemesToogle from "./ThemesToogle";

const Navbar = () => {
  return (
    <div className="md:w-full h-20 dark:bg-color-darkPrimary bg-color-secondary flex justify-between  p-5">
        <h1 className="text-color-primary dark:text-color-secondary font-bold text-2xl md:mx-52 text-center">MyQuran</h1>
        <div className="flex md:mx-52 gap-2">
        <InputSearch />
        <ThemesToogle/>
        </div>
    </div>
  );
};
export default Navbar;
