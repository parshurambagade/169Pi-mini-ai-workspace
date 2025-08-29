import messages from "../data/alpie_frontend_dataset.json";
import MemoryCard from "./MemoryCard";

const MemoryCardsContainer = () => {
  const pinnedMessages = messages.filter((message) => message.pinned);
  return (
    <div className="flex flex-col gap-4">
      {pinnedMessages.map((message) => (
        <MemoryCard key={message.id} {...message} />
      ))}
    </div>
  );
};

export default MemoryCardsContainer;
