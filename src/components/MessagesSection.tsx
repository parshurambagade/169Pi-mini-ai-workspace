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
      className="bg-card border border-border p-4 rounded-lg shadow-sm flex flex-col gap-4"
    >
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-card-foreground">Messages</h2>
        <span className="text-sm text-muted-foreground">
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
