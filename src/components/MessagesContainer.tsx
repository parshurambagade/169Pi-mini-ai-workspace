import { useEffect, useMemo } from "react";
import MessageCard from "./MessageCard";
import { useMessageStore } from "../store/messageStore";

const MessagesContainer = () => {
  const initializeMessages = useMessageStore(
    (state) => state.initializeMessages
  );
  const messages = useMessageStore((state) => state.messages);
  const searchQuery = useMessageStore((state) => state.searchQuery);

  // Memoize filtered messages to prevent infinite loops
  const filteredMessages = useMemo(() => {
    if (!searchQuery.trim()) return messages;

    const query = searchQuery.toLowerCase();
    return messages.filter(
      (message) =>
        message.title.toLowerCase().includes(query) ||
        message.description.toLowerCase().includes(query) ||
        message.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        message.author.toLowerCase().includes(query)
    );
  }, [messages, searchQuery]);

  useEffect(() => {
    initializeMessages();
  }, [initializeMessages]);

  // Show empty state when search has no results
  if (filteredMessages.length === 0) {
    if (searchQuery.trim()) {
      return (
        <div className="text-center p-8 text-muted-foreground">
          <div className="mb-2">No messages found for "{searchQuery}"</div>
          <div className="text-sm">Try searching for different keywords</div>
        </div>
      );
    }
    return (
      <div className="text-center p-8 text-muted-foreground">
        <div>No messages available</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {filteredMessages.map((message) => (
        <MessageCard key={message.id} {...message} />
      ))}
    </div>
  );
};

export default MessagesContainer;
