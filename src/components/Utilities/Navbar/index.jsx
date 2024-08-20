import InputSearch from "./InputSearch";
const Navbar = () => {
  return (
    <div className="bg-color-primary w-full h-28">
      <div className="flex flex-col">
        <h1 className="text-color-tertiary font-bold text-2xl mt-3 text-center">MyQuran</h1>
        <InputSearch />
      </div>
    </div>
  );
};
export default Navbar;
