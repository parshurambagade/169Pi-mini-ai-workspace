import { Input } from "./ui/input";

const SearchSection = () => {
  return (
    <section
      aria-label="Search"
      className="bg-card border border-border p-4 flex items-center justify-center w-full rounded-lg shadow-sm"
    >
      <Input type="text" placeholder="Search..." aria-label="Search" />
    </section>
  );
};

export default SearchSection;
