import MessageCard from "./MessageCard";
import messages from "../data/alpie_frontend_dataset.json";

const MessagesContainer = () => {
  return (
    <div className="flex flex-col gap-4">
      {messages.map((message) => (
        <MessageCard key={message.id} {...message} />
      ))}
    </div>
  );
};

export default MessagesContainer;
