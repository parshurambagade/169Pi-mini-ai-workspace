import MessagesContainer from "./MessagesContainer";

const MessagesSection = () => {
  return (
    <section
      aria-label="Messages"
      className="bg-card border border-border p-4 rounded-lg shadow-sm flex flex-col gap-4"
    >
      <h2 className="font-semibold text-card-foreground">Messages</h2>
      <div>
        <MessagesContainer />
      </div>
    </section>
  );
};

export default MessagesSection;
