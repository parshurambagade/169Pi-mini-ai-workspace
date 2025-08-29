import MessagesContainer from "./MessagesContainer";

const MessagesSection = () => {
  return (
    <section aria-label="Messages" className="p-4 border flex flex-col gap-4">
      <h2 className="font-semibold">Messages</h2>
      <div>
        <MessagesContainer />
      </div>
    </section>
  );
};

export default MessagesSection;
