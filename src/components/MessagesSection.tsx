import MessagesContainer from "./MessagesContainer";
import { useMessageStore } from "../store/messageStore";
import { useMemo } from "react";

const MessagesSection = () => {
  const searchQuery = useMessageStore((state) => state.searchQuery);
  const messages = useMessageStore((state) => state.messages);

  const messageCount = useMemo(() => {
    if (!searchQuery.trim()) return messages.length;

    const query = searchQuery.toLowerCase();
    return messages.filter(
      (message) =>
        message.title.toLowerCase().includes(query) ||
        message.description.toLowerCase().includes(query) ||
        message.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        message.author.toLowerCase().includes(query)
    ).length;
  }, [messages, searchQuery]);

  return (
    <section
      aria-label="Messages"
      className="bg-card border border-border p-3 sm:p-4 lg:p-6 rounded-lg shadow-sm flex flex-col gap-3 sm:gap-4"
    >
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
        <h2 className="font-semibold text-card-foreground text-lg sm:text-xl">
          Messages
        </h2>
        <span className="text-xs sm:text-sm text-muted-foreground">
          {searchQuery ? `${messageCount} found` : `${messageCount} total`}
        </span>
      </div>
      <div>
        <MessagesContainer />
      </div>
    </section>
  );
};

export default MessagesSection;
