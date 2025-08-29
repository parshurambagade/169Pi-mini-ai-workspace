import { Input } from "./ui/input";
import { useMessageStore } from "../store/messageStore";

const SearchSection = () => {
  const { searchQuery, setSearchQuery } = useMessageStore();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <section
      aria-label="Search"
      className="bg-card border border-border p-3 sm:p-4 flex items-center justify-center w-full rounded-lg shadow-sm"
    >
      <div className="w-full">
        <Input
          type="text"
          placeholder="Search messages..."
          aria-label="Search"
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full text-sm sm:text-base"
        />
      </div>
    </section>
  );
};

export default SearchSection;
