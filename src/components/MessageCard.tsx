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
    <div className="bg-card border border-border p-3 sm:p-4 lg:p-5 flex flex-col gap-3 sm:gap-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col gap-2 sm:gap-3">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
          <div className="flex-1 min-w-0">
            <h2 className="font-bold text-card-foreground text-sm sm:text-base lg:text-lg leading-tight">
              {title}
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
              {description}
            </p>
          </div>
          <div className="flex-shrink-0 self-start sm:self-center">
            <Button
              variant="secondary"
              size="icon"
              className="size-7 sm:size-8 lg:size-9"
              onClick={handleTogglePin}
            >
              {!pinned ? (
                <PinOff className="text-secondary-foreground h-3 w-3 sm:h-4 sm:w-4" />
              ) : (
                <Pin className="text-red-500 h-3 w-3 sm:h-4 sm:w-4" />
              )}
            </Button>
          </div>
        </div>
        <div className="flex flex-wrap gap-1 sm:gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant={"outline"} className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0 pt-2 border-t border-border/50">
        <span className="text-xs text-muted-foreground truncate">{author}</span>
        <span className="text-xs text-muted-foreground">{created_at}</span>
      </div>
    </div>
  );
};

export default MessageCard;
