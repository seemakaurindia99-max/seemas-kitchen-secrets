import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Users, ChefHat, Heart, Share2, BookOpen } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import paneerImage from "@/assets/paneer-butter-masala.jpg";

const RecipeDetail = () => {
  const [isFavorited, setIsFavorited] = useState(false);
  const { toast } = useToast();

  const recipe = {
    title: "Paneer Butter Masala – Restaurant Style at Home",
    description: "This creamy and rich Paneer Butter Masala is a favorite across India. Learn how to make it step by step with my easy guide.",
    image: paneerImage,
    prepTime: "15 minutes",
    cookTime: "25 minutes",
    totalTime: "40 minutes",
    servings: 4,
    difficulty: "Medium",
    category: "Indian Vegetarian",
    
    ingredients: [
      { item: "Paneer (cottage cheese)", amount: "400g", note: "cut into cubes" },
      { item: "Butter", amount: "3 tbsp", note: "" },
      { item: "Onion", amount: "1 large", note: "finely chopped" },
      { item: "Tomatoes", amount: "3 medium", note: "chopped" },
      { item: "Ginger-garlic paste", amount: "1 tbsp", note: "" },
      { item: "Cashews", amount: "10-12", note: "for richness" },
      { item: "Heavy cream", amount: "1/4 cup", note: "" },
      { item: "Garam masala", amount: "1 tsp", note: "" },
      { item: "Red chili powder", amount: "1 tsp", note: "adjust to taste" },
      { item: "Turmeric powder", amount: "1/2 tsp", note: "" },
      { item: "Salt", amount: "to taste", note: "" },
      { item: "Fresh coriander", amount: "for garnish", note: "chopped" }
    ],

    instructions: [
      {
        step: 1,
        title: "Prepare the base",
        description: "Heat 1 tbsp butter in a pan. Add chopped onions and sauté until golden brown. Add ginger-garlic paste and cook for 2 minutes until fragrant."
      },
      {
        step: 2,
        title: "Cook the tomatoes",
        description: "Add chopped tomatoes, turmeric, and red chili powder. Cook until tomatoes are completely soft and mushy, about 8-10 minutes."
      },
      {
        step: 3,
        title: "Create the gravy",
        description: "Add cashews and cook for 2 minutes. Let the mixture cool, then blend into a smooth paste with a little water."
      },
      {
        step: 4,
        title: "Finish the curry",
        description: "Heat remaining butter in the same pan. Add the blended paste and cook for 5 minutes. Add cream, garam masala, and salt. Simmer for 3-4 minutes."
      },
      {
        step: 5,
        title: "Add paneer and serve",
        description: "Gently add paneer cubes and simmer for 2-3 minutes. Garnish with fresh coriander and serve hot with naan or rice."
      }
    ],

    tips: [
      "Don't overcook the paneer to keep it soft and tender",
      "Adjust the spice level according to your taste preference",
      "For richer flavor, use homemade paneer",
      "You can substitute heavy cream with milk mixed with a little cornstarch"
    ],

    nutrition: {
      calories: 320,
      protein: "18g",
      carbs: "12g",
      fat: "24g",
      fiber: "3g"
    }
  };

  const handleFavorite = () => {
    setIsFavorited(!isFavorited);
    toast({
      title: isFavorited ? "Removed from favorites" : "Added to favorites",
      description: isFavorited ? "Recipe removed from your favorites" : "Recipe saved to your favorites",
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: recipe.title,
        text: recipe.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "Recipe link copied to clipboard",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Recipe Header */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge variant="outline">{recipe.category}</Badge>
              <Badge className="bg-warm text-warm-foreground">{recipe.difficulty}</Badge>
            </div>
            
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {recipe.title}
            </h1>
            
            <p className="text-lg text-muted-foreground mb-6 max-w-3xl">
              {recipe.description}
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-6">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Total: {recipe.totalTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Serves {recipe.servings}</span>
              </div>
              <div className="flex items-center gap-2">
                <ChefHat className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">{recipe.difficulty}</span>
              </div>
            </div>

            <div className="flex gap-3 mb-8">
              <Button variant="outline" onClick={handleFavorite}>
                <Heart className={`w-4 h-4 mr-2 ${isFavorited ? 'fill-current text-spice' : ''}`} />
                {isFavorited ? 'Favorited' : 'Favorite'}
              </Button>
              <Button variant="outline" onClick={handleShare}>
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          {/* Recipe Image */}
          <div className="mb-8">
            <img 
              src={recipe.image} 
              alt={recipe.title}
              className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-lg"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Ingredients */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-primary" />
                    Ingredients
                  </h2>
                  <ul className="space-y-3">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex justify-between items-start gap-2">
                        <span className="text-foreground font-medium flex-1">
                          {ingredient.item}
                        </span>
                        <div className="text-right">
                          <span className="text-sm font-semibold text-primary">
                            {ingredient.amount}
                          </span>
                          {ingredient.note && (
                            <p className="text-xs text-muted-foreground">
                              {ingredient.note}
                            </p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* Nutrition Info */}
                  <div className="mt-8 p-4 bg-muted/50 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-3">Nutrition (per serving)</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Calories:</span>
                        <span className="font-medium">{recipe.nutrition.calories}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Protein:</span>
                        <span className="font-medium">{recipe.nutrition.protein}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Carbs:</span>
                        <span className="font-medium">{recipe.nutrition.carbs}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Fat:</span>
                        <span className="font-medium">{recipe.nutrition.fat}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Instructions and Tips */}
            <div className="lg:col-span-2 space-y-8">
              {/* Instructions */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Instructions</h2>
                  <div className="space-y-6">
                    {recipe.instructions.map((instruction) => (
                      <div key={instruction.step} className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                          {instruction.step}
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">
                            {instruction.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {instruction.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Cooking Tips */}
              <Card className="bg-gradient-to-br from-accent/30 to-warm/10">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Cooking Tips & Variations</h2>
                  <ul className="space-y-2">
                    {recipe.tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-muted-foreground">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Conclusion */}
              <Card className="bg-gradient-to-br from-primary/5 to-spice/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Try this recipe at home!
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    I hope you enjoy making this Paneer Butter Masala as much as I enjoyed sharing it with you. 
                    Don't forget to share your results and any variations you try in the comments below!
                  </p>
                  <div className="flex justify-center gap-4">
                    <Button onClick={handleFavorite}>
                      <Heart className={`w-4 h-4 mr-2 ${isFavorited ? 'fill-current' : ''}`} />
                      Save Recipe
                    </Button>
                    <Button variant="outline" onClick={handleShare}>
                      <Share2 className="w-4 h-4 mr-2" />
                      Share with Friends
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RecipeDetail;