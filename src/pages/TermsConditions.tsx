import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">
            Terms & Conditions
          </h1>
          
          <Card className="mb-8">
            <CardContent className="p-8 prose prose-gray max-w-none">
              <p className="text-muted-foreground mb-6">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Agreement to Terms</h2>
                <p className="text-muted-foreground mb-4">
                  By accessing and using Seema's Kitchen website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Website Usage</h2>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">Permitted Use</h3>
                <p className="text-muted-foreground mb-4">
                  You may use our website for personal, non-commercial purposes including:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
                  <li>Viewing and reading recipes for personal cooking</li>
                  <li>Sharing links to our recipes on social media</li>
                  <li>Printing recipes for personal use</li>
                  <li>Contacting us through provided forms</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-3">Prohibited Use</h3>
                <p className="text-muted-foreground mb-4">
                  You may not use our website for:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
                  <li>Copying, republishing, or redistributing our content without permission</li>
                  <li>Commercial use of our recipes without written consent</li>
                  <li>Attempting to gain unauthorized access to our systems</li>
                  <li>Uploading malicious content or engaging in harmful activities</li>
                  <li>Violating any applicable laws or regulations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Intellectual Property Rights</h2>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">Content Ownership</h3>
                <p className="text-muted-foreground mb-4">
                  All content on Seema's Kitchen, including but not limited to recipes, photographs, text, graphics, logos, and website design, is the property of Seema Kaur or licensed to us. This content is protected by copyright, trademark, and other intellectual property laws.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">Recipe Sharing</h3>
                <p className="text-muted-foreground mb-4">
                  You are welcome to share our recipes by:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
                  <li>Sharing the recipe title and a brief description with a link back to the original post</li>
                  <li>Using the social media sharing buttons provided on our website</li>
                  <li>Crediting Seema's Kitchen as the source when discussing our recipes</li>
                </ul>

                <p className="text-muted-foreground mb-4">
                  You may not republish entire recipes or substantial portions of our content without written permission.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">User-Generated Content</h2>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">Comments and Feedback</h3>
                <p className="text-muted-foreground mb-4">
                  When you submit comments, reviews, or other content to our website, you grant us a non-exclusive, royalty-free, perpetual license to use, modify, and display such content. You represent that:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
                  <li>You own or have the right to submit the content</li>
                  <li>The content does not violate any third-party rights</li>
                  <li>The content is accurate and not misleading</li>
                  <li>The content complies with our community guidelines</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-3">Content Moderation</h3>
                <p className="text-muted-foreground mb-4">
                  We reserve the right to review, modify, or remove any user-generated content that violates these terms or is deemed inappropriate. This includes content that is:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
                  <li>Offensive, abusive, or discriminatory</li>
                  <li>Spam or promotional in nature</li>
                  <li>Contains false or misleading information</li>
                  <li>Violates privacy or intellectual property rights</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Disclaimers and Limitations</h2>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">Website Content</h3>
                <p className="text-muted-foreground mb-4">
                  The information on this website is provided on an "as is" basis. We make no warranties, expressed or implied, regarding the accuracy, completeness, or reliability of the information provided.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">Limitation of Liability</h3>
                <p className="text-muted-foreground mb-4">
                  Seema's Kitchen and its operators will not be liable for any damages arising from the use of this website or the recipes contained herein. This includes but is not limited to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
                  <li>Direct, indirect, incidental, or consequential damages</li>
                  <li>Loss of profits, data, or other intangible losses</li>
                  <li>Damages resulting from recipe outcomes or food-related issues</li>
                  <li>Technical issues or website downtime</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Privacy and Data Collection</h2>
                <p className="text-muted-foreground mb-4">
                  Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms and Conditions by reference.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Advertising and Affiliate Links</h2>
                <p className="text-muted-foreground mb-4">
                  Our website may contain advertisements and affiliate links. We may receive compensation when you click on certain links or make purchases through affiliate programs. This does not affect the cost to you or influence our content recommendations.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Modifications to Terms</h2>
                <p className="text-muted-foreground mb-4">
                  We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website after any changes constitutes acceptance of the new terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Governing Law</h2>
                <p className="text-muted-foreground mb-4">
                  These Terms and Conditions are governed by and construed in accordance with applicable laws. Any disputes arising from these terms will be resolved through appropriate legal channels.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <ul className="list-none text-muted-foreground space-y-1">
                  <li><strong>Email:</strong> seema@seemaskitchen.com</li>
                  <li><strong>Website:</strong> Seema's Kitchen Contact Page</li>
                </ul>
                
                <p className="text-muted-foreground mt-6">
                  By using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsConditions;