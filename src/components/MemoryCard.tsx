import { Badge } from "./ui/badge";

interface MemoryCardProps {
  title: string;
  tags: string[];
}

const MemoryCard = ({ title, tags }: MemoryCardProps) => {
  return (
    <div className="bg-card border border-border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h2 className="font-semibold text-card-foreground mb-2">{title}</h2>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag} variant="outline" className="mr-2">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default MemoryCard;
