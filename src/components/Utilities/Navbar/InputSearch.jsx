import { CiSearch } from "react-icons/ci";
const InputSearch = () => {
  return (
    <div className="h-8 flex items-center justify-center dark:bg-color-secondary bg-color-primary cursor-pointer rounded-full p-4">
      <CiSearch className="text-color-tertiary dark:text-color-dark flex justify-center" size={22} />
    </div>
  );
};
export default InputSearch;
