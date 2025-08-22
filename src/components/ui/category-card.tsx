import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  title: string;
  emoji: string;
  description: string;
  className?: string;
  onClick?: () => void;
}

export const CategoryCard = ({ title, emoji, description, className, onClick }: CategoryCardProps) => {
  return (
    <Card 
      className={cn(
        "group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-card border-muted",
        className
      )}
      onClick={onClick}
    >
      <CardContent className="p-6 text-center">
        <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {emoji}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};