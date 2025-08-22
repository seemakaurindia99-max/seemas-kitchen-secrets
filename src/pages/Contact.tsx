import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageCircle, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a question about a recipe? Want to share your cooking experience? 
              I'd love to hear from you! Feel free to reach out with any questions, 
              feedback, or just to say hello.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Mail className="w-6 h-6 text-primary" />
                    <div>
                      <h3 className="font-semibold text-foreground">Email Me</h3>
                      <p className="text-sm text-muted-foreground">seema@seemaskitchen.com</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Send me an email with your questions or recipe requests.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <MessageCircle className="w-6 h-6 text-warm" />
                    <div>
                      <h3 className="font-semibold text-foreground">Recipe Questions</h3>
                      <p className="text-sm text-muted-foreground">Need cooking help?</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Have questions about ingredients, techniques, or substitutions? I'm here to help!
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Clock className="w-6 h-6 text-spice" />
                    <div>
                      <h3 className="font-semibold text-foreground">Response Time</h3>
                      <p className="text-sm text-muted-foreground">Usually within 24-48 hours</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    I try to respond to all messages as quickly as possible.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Your Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your question, feedback, or just say hello!"
                        rows={6}
                        required
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <Card className="bg-gradient-to-br from-primary/5 to-warm/5 border-primary/20">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
                  Frequently Asked Questions
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Can I suggest a recipe?
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Absolutely! I love hearing recipe requests from my readers. Send me your ideas and I'll do my best to create and share them.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Do you offer cooking classes?
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Currently, I focus on sharing recipes through the blog, but I'm considering online cooking workshops in the future.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Can I share your recipes?
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      You're welcome to share a link to my recipes, but please don't copy the entire recipe. A link back to the original post is appreciated!
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      How often do you post new recipes?
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      I try to share new recipes 2-3 times per week, covering different categories and cooking styles.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;