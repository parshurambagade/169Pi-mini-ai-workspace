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
      className="bg-card border border-border p-4 flex items-center justify-center w-full rounded-lg shadow-sm"
    >
      <Input
        type="text"
        placeholder="Search messages..."
        aria-label="Search"
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </section>
  );
};

export default SearchSection;
