import { useMessageStore } from "../store/messageStore";
import MemoryCard from "./MemoryCard";
import { useMemo } from "react";

const MemoryCardsContainer = () => {
  const messages = useMessageStore((state) => state.messages);

  const pinnedMessages = useMemo(() => {
    return messages.filter((message) => message.pinned);
  }, [messages]);

  if (pinnedMessages.length === 0) {
    return (
      <div className="text-center p-4 text-muted-foreground text-sm">
        No pinned messages yet
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {pinnedMessages.map((message) => (
        <MemoryCard key={message.id} {...message} />
      ))}
    </div>
  );
};

export default MemoryCardsContainer;
