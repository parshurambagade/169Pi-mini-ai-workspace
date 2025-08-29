import { Badge } from "./ui/badge";

interface MemoryCardProps {
  title: string;
  tags: string[];
}

const MemoryCard = ({ title, tags }: MemoryCardProps) => {
  return (
    <div className="bg-card border border-border p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h2 className="font-semibold text-card-foreground mb-2 text-sm sm:text-base">
        {title}
      </h2>
      <div className="flex flex-wrap gap-1 sm:gap-2">
        {tags.map((tag) => (
          <Badge key={tag} variant="outline" className="text-xs">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default MemoryCard;
