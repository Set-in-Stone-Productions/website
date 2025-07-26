import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-poppins font-bold mb-4">Terms of Service</h1>
            <p className="text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="bg-card border-border rounded-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using the services of Set in Stone Productions, you agree to be bound by these Terms of Service 
                and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from 
                using or accessing our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Project Submission Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When submitting a project to Set in Stone Productions, you acknowledge and agree that:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>All submitted materials must be original work or you must have the rights to submit them</li>
                <li>Set in Stone Productions has no obligation to produce, develop, or purchase any submitted project</li>
                <li>Submission does not create any confidential relationship or guarantee of compensation</li>
                <li>We may receive similar ideas from other sources and develop projects independently</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Intellectual Property Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on this website, including but not limited to text, graphics, logos, images, and software, 
                is the property of Set in Stone Productions and is protected by copyright and other intellectual property laws. 
                You may not reproduce, distribute, or create derivative works without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Production Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our production services are subject to separate production agreements which will include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Detailed scope of work and deliverables</li>
                <li>Payment terms and schedules</li>
                <li>Rights and ownership details</li>
                <li>Specific timelines and milestones</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Set in Stone Productions shall not be liable for any indirect, incidental, special, consequential, or punitive 
                damages resulting from your use of or inability to use our services. Our total liability shall not exceed the 
                amount paid by you for the specific service in question.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify and hold harmless Set in Stone Productions, its officers, directors, employees, and agents 
                from any claims, damages, losses, or expenses arising from your breach of these terms or your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction in which 
                Set in Stone Productions operates, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="text-muted-foreground mt-2">
                Email: contact@setinstoneproductions.com
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;