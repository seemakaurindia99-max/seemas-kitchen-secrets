import { Button } from "@/components/ui/button";
import { CategoryCard } from "@/components/ui/category-card";
import { RecipeCard } from "@/components/ui/recipe-card";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ChefHat, Star } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import kitchenHero from "@/assets/kitchen-hero.jpg";
import paneerImage from "@/assets/paneer-butter-masala.jpg";

const Index = () => {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Indian Vegetarian",
      emoji: "🍛",
      description: "Traditional vegetarian dishes from across India"
    },
    {
      title: "Non-Vegetarian Specials",
      emoji: "🍗",
      description: "Flavorful meat and seafood recipes"
    },
    {
      title: "Healthy & Vegan",
      emoji: "🥗",
      description: "Nutritious plant-based meals"
    },
    {
      title: "Desserts & Sweets",
      emoji: "🍰",
      description: "Traditional and modern sweet treats"
    },
    {
      title: "Snacks & Street Food",
      emoji: "🫓",
      description: "Popular Indian street food and snacks"
    },
    {
      title: "Drinks & Beverages",
      emoji: "☕",
      description: "Refreshing drinks and traditional beverages"
    }
  ];

  const featuredRecipes = [
    {
      title: "Paneer Butter Masala – Restaurant Style at Home",
      image: paneerImage,
      prepTime: "30 min",
      servings: "4 people",
      difficulty: "Medium" as const,
      category: "Indian Vegetarian"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-warm/5 to-spice/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Welcome to{" "}
                <span className="text-primary">Seema's Kitchen</span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl">
                Where cooking meets creativity. I, Seema Kaur, share tried-and-tested recipes inspired by Indian traditions and global flavors. Each recipe is explained step by step, with clear instructions, cooking tips, and nutritional value to help you make delicious food at home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => navigate('/recipes')}>
                  <ChefHat className="mr-2 h-5 w-5" />
                  Explore Recipes
                </Button>
                <Button variant="outline" size="lg" onClick={() => navigate('/about')}>
                  About Seema
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={kitchenHero} 
                alt="Seema's Kitchen - Beautiful Indian spices and cooking setup"
                className="rounded-2xl shadow-2xl w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border border-border">
                <div className="flex items-center gap-2 text-sm">
                  <Star className="w-4 h-4 text-warm fill-current" />
                  <span className="font-medium text-foreground">500+ Recipes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Recipe Categories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover authentic flavors from different cuisines and cooking styles
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <CategoryCard
                key={index}
                title={category.title}
                emoji={category.emoji}
                description={category.description}
                onClick={() => navigate('/recipes')}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Featured Recipes
            </h2>
            <p className="text-lg text-muted-foreground">
              Try these popular recipes loved by home cooks everywhere
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRecipes.map((recipe, index) => (
              <RecipeCard
                key={index}
                {...recipe}
                onClick={() => navigate('/recipe/paneer-butter-masala')}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" onClick={() => navigate('/recipes')}>
              View All Recipes
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
