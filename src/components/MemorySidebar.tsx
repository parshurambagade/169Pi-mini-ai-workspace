import MemoryCardsContainer from "./MemoryCardsContainer";
import { useMessageStore } from "../store/messageStore";
import { useMemo } from "react";

const MemorySidebar = () => {
  const messages = useMessageStore((state) => state.messages);

  const pinnedCount = useMemo(() => {
    return messages.filter((message) => message.pinned).length;
  }, [messages]);

  return (
    <div className="flex flex-col gap-3 sm:gap-4">
      <div className="bg-card border border-border p-3 sm:p-4 rounded-lg shadow-sm">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0 mb-2">
          <h2 className="font-semibold text-card-foreground text-lg sm:text-xl">
            Memory
          </h2>
          <span className="text-xs sm:text-sm text-muted-foreground">
            {pinnedCount} pinned
          </span>
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground">
          Pinned messages are saved here.
        </p>
      </div>
      <div className="flex flex-col gap-3 sm:gap-4">
        <MemoryCardsContainer />
      </div>
    </div>
  );
};

export default MemorySidebar;
