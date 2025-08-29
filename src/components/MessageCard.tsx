import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Pin, PinOff } from "lucide-react";
import { useMessageStore } from "../store/messageStore";

interface Message {
  id: number;
  title: string;
  description: string;
  tags: string[];
  author: string;
  created_at: string;
  pinned: boolean;
}

const MessageCard = ({
  id,
  title,
  description,
  tags,
  author,
  created_at,
  pinned,
}: Message) => {
  const togglePin = useMessageStore((state) => state.togglePin);

  const handleTogglePin = () => {
    togglePin(id);
  };

  return (
    <div className="bg-card border border-border p-4 flex flex-col gap-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center w-full">
          <div>
            <h2 className="font-bold text-card-foreground">{title}</h2>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
          <div>
            <Button
              variant="secondary"
              size="icon"
              className="size-8"
              onClick={handleTogglePin}
            >
              {!pinned ? (
                <PinOff className="text-secondary-foreground" />
              ) : (
                <Pin className="text-red-500" />
              )}
            </Button>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant={"outline"}>
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      <div className="flex justify-between">
        <span className="text-xs text-muted-foreground">{author}</span>
        <span className="text-xs text-muted-foreground">{created_at}</span>
      </div>
    </div>
  );
};

export default MessageCard;
