import MemoryCardsContainer from "./MemoryCardsContainer";

const MemorySidebar = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-card border border-border p-4 rounded-lg shadow-sm">
        <h2 className="font-semibold text-card-foreground">Memory</h2>
        <p className="text-sm text-muted-foreground">
          Pinned messages are saved here.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <MemoryCardsContainer />
      </div>
    </div>
  );
};

export default MemorySidebar;
