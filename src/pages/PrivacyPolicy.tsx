import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">
            Privacy Policy & Disclaimer
          </h1>
          
          <Card className="mb-8">
            <CardContent className="p-8 prose prose-gray max-w-none">
              <p className="text-muted-foreground mb-6">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Privacy Policy</h2>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">Information We Collect</h3>
                <p className="text-muted-foreground mb-4">
                  When you visit Seema's Kitchen, we may collect certain information about you and your device, including:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
                  <li>Information you provide through contact forms (name, email address, message content)</li>
                  <li>Automatically collected information such as IP address, browser type, and device information</li>
                  <li>Cookies and similar tracking technologies to enhance your browsing experience</li>
                  <li>Usage data including pages visited, time spent on the site, and interaction patterns</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-3">How We Use Your Information</h3>
                <p className="text-muted-foreground mb-4">
                  We use the collected information for the following purposes:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To improve our website content and user experience</li>
                  <li>To send you newsletters and updates (only if you subscribe)</li>
                  <li>To analyze website traffic and optimize our services</li>
                  <li>To comply with legal obligations and protect our rights</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-3">Cookies and Tracking</h3>
                <p className="text-muted-foreground mb-4">
                  We use cookies and similar tracking technologies to enhance your experience on our website. These may include:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
                  <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                  <li><strong>Advertising Cookies:</strong> Used to display relevant advertisements (Google AdSense)</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-3">Third-Party Services</h3>
                <p className="text-muted-foreground mb-4">
                  Our website may use third-party services including:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
                  <li><strong>Google AdSense:</strong> For displaying advertisements</li>
                  <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                  <li><strong>Social Media Platforms:</strong> For sharing content and social interactions</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-3">Data Protection</h3>
                <p className="text-muted-foreground mb-4">
                  We take reasonable measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">Your Rights</h3>
                <p className="text-muted-foreground mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
                  <li>Access, update, or delete your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Disable cookies through your browser settings</li>
                  <li>Request information about how your data is processed</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Disclaimer</h2>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">Recipe Accuracy</h3>
                <p className="text-muted-foreground mb-4">
                  All recipes on Seema's Kitchen are tested and shared in good faith. However, cooking results may vary based on ingredients, equipment, and individual cooking skills. We are not responsible for any adverse reactions or outcomes from following our recipes.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">Nutritional Information</h3>
                <p className="text-muted-foreground mb-4">
                  Nutritional information provided is approximate and calculated using standard nutritional databases. Values may vary based on specific ingredients and preparation methods. Please consult with a healthcare professional for specific dietary requirements.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">Food Safety</h3>
                <p className="text-muted-foreground mb-4">
                  Always follow proper food safety guidelines when preparing recipes. Ensure ingredients are fresh, properly stored, and cooked to safe temperatures. We are not responsible for any foodborne illnesses that may result from improper food handling.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">Allergies and Dietary Restrictions</h3>
                <p className="text-muted-foreground mb-4">
                  Please carefully review all ingredients for potential allergens. While we try to note common allergens, we cannot guarantee that our recipes are free from all allergens. Always consult ingredient labels and your healthcare provider if you have specific dietary restrictions or allergies.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">External Links</h3>
                <p className="text-muted-foreground mb-4">
                  Our website may contain links to external websites. We are not responsible for the content, privacy practices, or policies of these external sites. We encourage you to review their privacy policies before providing any personal information.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">Website Availability</h3>
                <p className="text-muted-foreground mb-4">
                  While we strive to keep our website accessible at all times, we do not guarantee continuous availability. The website may be temporarily unavailable due to maintenance, technical issues, or circumstances beyond our control.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about this Privacy Policy or our practices, please contact us:
                </p>
                <ul className="list-none text-muted-foreground space-y-1">
                  <li><strong>Email:</strong> seema@seemaskitchen.com</li>
                  <li><strong>Website:</strong> Seema's Kitchen Contact Page</li>
                </ul>
                
                <p className="text-muted-foreground mt-6">
                  This Privacy Policy and Disclaimer may be updated from time to time. We will notify you of any significant changes by posting the new policy on this page with an updated "Last updated" date.
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

export default PrivacyPolicy;