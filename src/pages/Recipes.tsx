import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RecipeCard } from "@/components/ui/recipe-card";
import { CategoryCard } from "@/components/ui/category-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import paneerImage from "@/assets/paneer-butter-masala.jpg";

const Recipes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const categories = [
    { title: "All", emoji: "🍽️", description: "All recipes" },
    { title: "Indian Vegetarian", emoji: "🍛", description: "Traditional vegetarian dishes" },
    { title: "Non-Vegetarian Specials", emoji: "🍗", description: "Meat and seafood recipes" },
    { title: "Healthy & Vegan", emoji: "🥗", description: "Plant-based meals" },
    { title: "Desserts & Sweets", emoji: "🍰", description: "Sweet treats" },
    { title: "Snacks & Street Food", emoji: "🫓", description: "Quick bites" },
    { title: "Drinks & Beverages", emoji: "☕", description: "Refreshing drinks" }
  ];

  const recipes = [
    {
      title: "Paneer Butter Masala – Restaurant Style at Home",
      image: paneerImage,
      prepTime: "30 min",
      servings: "4 people",
      difficulty: "Medium" as const,
      category: "Indian Vegetarian"
    },
    // Add more sample recipes here when needed
  ];

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || recipe.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            All <span className="text-primary">Recipes</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover delicious recipes from Indian traditions and global cuisines. 
            Each recipe comes with step-by-step instructions, cooking tips, and nutritional information.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search recipes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filter
          </Button>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {categories.map((category) => (
              <CategoryCard
                key={category.title}
                title={category.title}
                emoji={category.emoji}
                description={category.description}
                className={`${
                  selectedCategory === category.title 
                    ? "ring-2 ring-primary bg-primary/5" 
                    : ""
                }`}
                onClick={() => setSelectedCategory(category.title)}
              />
            ))}
          </div>
        </div>

        {/* Recipe Results */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">
              {selectedCategory === "All" ? "All Recipes" : selectedCategory}
            </h2>
            <span className="text-muted-foreground">
              {filteredRecipes.length} recipe{filteredRecipes.length !== 1 ? 's' : ''} found
            </span>
          </div>

          {filteredRecipes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRecipes.map((recipe, index) => (
                <RecipeCard
                  key={index}
                  {...recipe}
                  onClick={() => navigate('/recipe/paneer-butter-masala')}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground mb-4">
                No recipes found matching your criteria.
              </p>
              <Button variant="outline" onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}>
                Clear Filters
              </Button>
            </div>
          )}

          {/* Load More */}
          {filteredRecipes.length > 0 && (
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Recipes
              </Button>
            </div>
          )}
        </div>

        {/* Coming Soon */}
        <div className="mt-16 text-center bg-gradient-to-br from-primary/5 to-warm/5 p-8 rounded-2xl border border-primary/20">
          <h3 className="text-2xl font-bold text-foreground mb-4">More Recipes Coming Soon!</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm constantly working on new recipes to share with you. Check back regularly for fresh content, 
            or follow along for updates when new recipes are published.
          </p>
          <Button onClick={() => navigate('/contact')}>
            Suggest a Recipe
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Recipes;