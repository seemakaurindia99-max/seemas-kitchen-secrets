import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Award, Users, BookOpen } from "lucide-react";
import seemaPortrait from "@/assets/seema-portrait.jpg";

const About = () => {
  const achievements = [
    {
      icon: BookOpen,
      title: "500+ Recipes",
      description: "Carefully tested and documented recipes"
    },
    {
      icon: Users,
      title: "50k+ Home Cooks",
      description: "Helping families cook delicious meals"
    },
    {
      icon: Award,
      title: "15+ Years",
      description: "Experience in cooking and recipe development"
    },
    {
      icon: Heart,
      title: "Traditional Values",
      description: "Preserving authentic flavors and techniques"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About <span className="text-primary">Seema Kaur</span>
            </h1>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Welcome to my culinary world! I'm Seema Kaur, a passionate home cook and recipe developer who believes that cooking is the heart of every home. Growing up in a traditional Indian family, I learned the art of cooking from my grandmother and mother, who taught me that food is love made visible.
              </p>
              <p>
                For over 15 years, I have been experimenting with traditional Indian recipes while incorporating global flavors to create dishes that are both authentic and accessible to modern home cooks. My journey started in my own kitchen, cooking for my family, and has evolved into sharing my passion with thousands of food enthusiasts worldwide.
              </p>
              <p>
                Each recipe on Seema's Kitchen is tested multiple times in my own kitchen to ensure that you get perfect results every time. I believe in clear instructions, helpful tips, and making cooking an enjoyable experience for everyone, whether you're a beginner or an experienced cook.
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src={seemaPortrait} 
              alt="Seema Kaur - Chef and Recipe Developer"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-lg border border-border">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">15+</p>
                <p className="text-sm text-muted-foreground">Years of Cooking</p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <achievement.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {achievement.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Philosophy Section */}
        <Card className="p-8 bg-gradient-to-br from-primary/5 to-warm/5 border-primary/20">
          <CardContent className="p-0">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
              My Cooking Philosophy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Love in Every Dish</h3>
                <p className="text-muted-foreground">
                  Cooking with love and passion creates meals that nourish both body and soul.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-warm/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-warm" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Quality Ingredients</h3>
                <p className="text-muted-foreground">
                  Using fresh, quality ingredients is the foundation of every great dish.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-spice/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-spice" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Sharing Knowledge</h3>
                <p className="text-muted-foreground">
                  Teaching others to cook empowers them to create memories and traditions.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Join the Seema's Kitchen Family
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Follow my journey as I continue to share new recipes, cooking tips, and the joy of creating delicious meals at home.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;