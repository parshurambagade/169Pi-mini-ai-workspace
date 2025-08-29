import { Input } from "./ui/input";

const SearchSection = () => {
  return (
    <section
      aria-label="Search"
      className="p-4 flex items-center justify-center w-full border"
    >
      <Input type="text" placeholder="Search..." aria-label="Search" />
    </section>
  );
};

export default SearchSection;
