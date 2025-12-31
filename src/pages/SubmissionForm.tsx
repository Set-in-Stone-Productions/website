import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const SubmissionForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmissionTime, setLastSubmissionTime] = useState<number>(0);
  const [honeypot, setHoneypot] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectName: "",
    logline: "",
    synopsis: "",
    length: "",
    genre: "",
    budget: "",
    scriptStatus: "",
    materials: "",
    signature: "",
    termsAccepted: false
  });


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id.replace("-", "")]: value
    }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      termsAccepted: checked
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.projectName || !formData.logline || !formData.synopsis || !formData.signature) {
      toast({
        title: "Missing Required Fields",
        description: "Please fill in all required fields marked with *",
        variant: "destructive"
      });
      return;
    }

    if (!formData.termsAccepted) {
      toast({
        title: "Terms Not Accepted",
        description: "Please accept the Terms of Service and Privacy Policy",
        variant: "destructive"
      });
      return;
    }

    // Check cooldown period (30 seconds)
    const now = Date.now();
    const timeSinceLastSubmission = now - lastSubmissionTime;
    if (timeSinceLastSubmission < 30000) {
      const remainingTime = Math.ceil((30000 - timeSinceLastSubmission) / 1000);
      toast({
        title: "Please wait",
        description: `You can submit again in ${remainingTime} seconds.`,
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submit', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          honeypot
        })
      });

      if (response.ok) {
        // Set last submission time
        setLastSubmissionTime(Date.now());

        toast({
          title: "Success!",
          description: "Your submission has been sent successfully.",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          projectName: "",
          logline: "",
          synopsis: "",
          length: "",
          genre: "",
          budget: "",
          scriptStatus: "",
          materials: "",
          signature: "",
          termsAccepted: false
        });
        setHoneypot("");

        // Redirect after a short delay
        setTimeout(() => {
          window.location.href = "/submissions";
        }, 2000);
      } else {
        const errorText = await response.text();
        throw new Error(errorText || "Something went wrong");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to submit form. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-poppins font-bold mb-4">Submissions</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Thank you for your interest in working with us! Please answer the short questionnaire below and feel free to add any attachments relevant to your submission.
            </p>
          </div>

          <Card className="bg-card/60 backdrop-blur-md border-border shadow-2xl film-burn">
            <CardHeader>
              <CardTitle className="text-2xl font-poppins text-foreground">Project Submission Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-0"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-0"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Project Name */}
                <div className="space-y-2">
                  <Label htmlFor="project-name">Project Name *</Label>
                  <Input
                    id="projectName"
                    name="projectName"
                    placeholder="Title of your project"
                    className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-0"
                    value={formData.projectName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Logline */}
                <div className="space-y-2">
                  <Label htmlFor="logline">Logline *</Label>
                  <Textarea
                    id="logline"
                    name="logline"
                    placeholder="A one-sentence summary of your project"
                    className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-0 min-h-[80px]"
                    value={formData.logline}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Short Synopsis */}
                <div className="space-y-2">
                  <Label htmlFor="synopsis">Short Synopsis *</Label>
                  <Textarea
                    id="synopsis"
                    name="synopsis"
                    placeholder="Brief description of your project (2-3 paragraphs)"
                    className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-0 min-h-[120px]"
                    value={formData.synopsis}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Project Length */}
                <div className="space-y-2">
                  <Label htmlFor="length">Project Length</Label>
                  <Input
                    id="length"
                    name="length"
                    placeholder="e.g., Short Film, Feature Film, Series, etc."
                    className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-0"
                    value={formData.length}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Project Genre */}
                <div className="space-y-2">
                  <Label htmlFor="genre">Project Genre</Label>
                  <Input
                    id="genre"
                    name="genre"
                    placeholder="e.g., Drama, Comedy, Horror, etc."
                    className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-0"
                    value={formData.genre}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Estimated Budget */}
                <div className="space-y-2">
                  <Label htmlFor="budget">Estimated Budget</Label>
                  <Input
                    id="budget"
                    name="budget"
                    placeholder="e.g., Under $10,000, $10,000-$25,000, etc."
                    className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-0"
                    value={formData.budget}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Script Status */}
                <div className="space-y-2">
                  <Label htmlFor="script-status">Script Status</Label>
                  <Input
                    id="scriptStatus"
                    name="scriptStatus"
                    placeholder="e.g., Concept Stage, First Draft, Final Draft, etc."
                    className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-0"
                    value={formData.scriptStatus}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Additional Materials */}
                <div className="space-y-2">
                  <Label htmlFor="materials">Additional Materials</Label>
                  <Textarea
                    id="materials"
                    name="materials"
                    placeholder="Please share links to any additional materials (Google Drive, Dropbox, etc.) such as Treatment, Pitch Deck, Moodboard, Script, etc."
                    className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-0 min-h-[100px]"
                    value={formData.materials}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Honeypot field - hidden from users, bots fill it */}
                <input
                  type="text"
                  name="honeypot"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  style={{ position: 'absolute', left: '-9999px' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Required Documents */}
                <div className="bg-card/40 p-6 rounded-lg border border-border">
                  <h3 className="font-semibold mb-3 text-white">Required Documents</h3>
                  <p className="text-sm text-gray-400 mb-4">
                    Please review these documents before submitting:
                  </p>
                  <div className="space-y-2">
                    <Link
                      to="/terms-of-service"
                      className="text-primary hover:text-primary/80 underline block"
                    >
                      Terms of Service
                    </Link>
                    <Link
                      to="/privacy-policy"
                      className="text-primary hover:text-primary/80 underline block"
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      to="/submission-agreement"
                      className="text-primary hover:text-primary/80 underline block"
                    >
                      Submission Agreement
                    </Link>

                  </div>
                </div>

                {/* Legal Agreements */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="terms"
                      className="mt-1 border-primary/50 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                      checked={formData.termsAccepted}
                      onCheckedChange={handleCheckboxChange}
                    />
                    <div className="flex-1">
                      <Label htmlFor="terms" className="text-base cursor-pointer text-gray-200">
                        I have read and agree to the{" "}
                        <Link to="/terms-of-service" className="text-primary hover:text-primary/80 underline">
                          Terms of Service
                        </Link>
                        {" "}and{" "}
                        <Link to="/privacy-policy" className="text-primary hover:text-primary/80 underline">
                          Privacy Policy
                        </Link>
                      </Label>
                    </div>
                  </div>
                </div>

                {/* E-Signature */}
                <div className="space-y-2">
                  <Label htmlFor="signature">Electronic Signature *</Label>
                  <Input
                    id="signature"
                    name="signature"
                    placeholder="Type your full name as your electronic signature"
                    className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-0"
                    value={formData.signature}
                    onChange={handleInputChange}
                    required
                  />
                  <p className="text-sm text-muted-foreground">
                    By typing your name above, you are providing an electronic signature that is legally binding.
                  </p>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 shadow-md transition-all duration-200 ease-out py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Project"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SubmissionForm;