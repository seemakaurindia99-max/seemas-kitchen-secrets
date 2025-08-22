import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface RecipeCardProps {
  title: string;
  image: string;
  prepTime: string;
  servings: string;
  difficulty: "Easy" | "Medium" | "Hard";
  category: string;
  className?: string;
  onClick?: () => void;
}

export const RecipeCard = ({ 
  title, 
  image, 
  prepTime, 
  servings, 
  difficulty, 
  category, 
  className,
  onClick 
}: RecipeCardProps) => {
  const getDifficultyColor = (level: string) => {
    switch (level) {
      case "Easy": return "bg-accent text-accent-foreground";
      case "Medium": return "bg-warm text-warm-foreground";
      case "Hard": return "bg-spice text-spice-foreground";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <Card 
      className={cn(
        "group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden bg-card",
        className
      )}
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className={cn("absolute top-3 right-3", getDifficultyColor(difficulty))}>
          {difficulty}
        </Badge>
      </div>
      <CardContent className="p-4">
        <Badge variant="outline" className="mb-2 text-xs">
          {category}
        </Badge>
        <h3 className="font-semibold text-lg mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{prepTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{servings}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};