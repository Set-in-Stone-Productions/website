import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SubmissionForm = () => {
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

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl font-poppins">Project Submission Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input 
                    id="name" 
                    placeholder="Your full name"
                    className="bg-background border-border"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input 
                    id="email" 
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-background border-border"
                  />
                </div>

                {/* Project Name */}
                <div className="space-y-2">
                  <Label htmlFor="project-name">Project Name *</Label>
                  <Input 
                    id="project-name" 
                    placeholder="Title of your project"
                    className="bg-background border-border"
                  />
                </div>

                {/* Logline */}
                <div className="space-y-2">
                  <Label htmlFor="logline">Logline *</Label>
                  <Textarea 
                    id="logline" 
                    placeholder="A one-sentence summary of your project"
                    className="bg-background border-border min-h-[80px]"
                  />
                </div>

                {/* Short Synopsis */}
                <div className="space-y-2">
                  <Label htmlFor="synopsis">Short Synopsis *</Label>
                  <Textarea 
                    id="synopsis" 
                    placeholder="Brief description of your project (2-3 paragraphs)"
                    className="bg-background border-border min-h-[120px]"
                  />
                </div>

                {/* Project Length */}
                <div className="space-y-2">
                  <Label htmlFor="length">Project Length</Label>
                  <Input
                    id="length"
                    placeholder="e.g., Short Film, Feature Film, Series, etc."
                    className="bg-background border-border"
                  />
                </div>

                {/* Project Genre */}
                <div className="space-y-2">
                  <Label htmlFor="genre">Project Genre</Label>
                  <Input
                    id="genre"
                    placeholder="e.g., Drama, Comedy, Horror, etc."
                    className="bg-background border-border"
                  />
                </div>

                {/* Estimated Budget */}
                <div className="space-y-2">
                  <Label htmlFor="budget">Estimated Budget</Label>
                  <Input
                    id="budget"
                    placeholder="e.g., Under $10,000, $10,000-$25,000, etc."
                    className="bg-background border-border"
                  />
                </div>

                {/* Script Status */}
                <div className="space-y-2">
                  <Label htmlFor="script-status">Script Status</Label>
                  <Input
                    id="script-status"
                    placeholder="e.g., Concept Stage, First Draft, Final Draft, etc."
                    className="bg-background border-border"
                  />
                </div>

                {/* Additional Materials */}
                <div className="space-y-2">
                  <Label htmlFor="materials">Additional Materials</Label>
                  <Textarea 
                    id="materials" 
                    placeholder="Please list any additional materials you have (Treatment, Pitch Deck, Moodboard, Link to Playlist, etc.)"
                    className="bg-background border-border min-h-[100px]"
                  />
                </div>

                {/* File Upload - Note: Backend implementation needed */}
                <div className="space-y-2">
                  <Label htmlFor="file-upload">Attachments</Label>
                  <Input
                    id="file-upload"
                    type="file"
                    multiple
                    className="bg-background border-border"
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    Upload relevant files (scripts, treatments, mood boards, etc.)
                  </p>
                </div>

                {/* Legal Links */}
                <div className="bg-muted/20 p-6 rounded-lg border border-border">
                  <h3 className="font-semibold mb-3">Required Reading</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    By submitting this form, you acknowledge that you have read and agree to our submission policies:
                  </p>
                  <div className="space-y-2">
                    <a 
                      href="/submission-agreement" 
                      className="text-primary hover:text-primary/80 underline block"
                    >
                      Submission Agreement
                    </a>
                    <a 
                      href="/terms-of-service" 
                      className="text-primary hover:text-primary/80 underline block"
                    >
                      Terms of Service
                    </a>
                  </div>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/80 hover-scale py-3"
                >
                  Submit Project
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