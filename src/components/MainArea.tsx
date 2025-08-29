import MessagesSection from "./MessagesSection";
import SearchBox from "./SearchSection";

const MainArea = () => {
  return (
    <section className="flex flex-col gap-4 sm:gap-6">
      <div>
        <SearchBox />
      </div>
      <div>
        <MessagesSection />
      </div>
    </section>
  );
};

export default MainArea;
