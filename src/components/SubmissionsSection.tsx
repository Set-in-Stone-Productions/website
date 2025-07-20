import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Upload, FileText, Link2 } from "lucide-react";

export function SubmissionsSection() {
  return (
    <section id="submissions" className="py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 inline-block relative">
            PROJECT SUBMISSIONS
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary"></span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Thank you for your interest in working with Set in Stone Productions.
          </p>
        </div>

        <div className="bg-secondary/30 rounded-lg p-8 md:p-12 mb-12 border border-border">
          <h3 className="text-xl font-bold mb-4">Submission Guidelines</h3>
          <p className="mb-6 text-muted-foreground">
            We're always looking for compelling stories and passionate creators to collaborate with. Please review our 
            submission guidelines before submitting your project for consideration.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start">
              <FileText className="text-primary mt-1 mr-3 flex-shrink-0" size={20} />
              <p>
                <strong>Project Types:</strong> We accept narrative shorts/features, documentaries, music videos, and commercial concepts.
              </p>
            </div>
            <div className="flex items-start">
              <FileText className="text-primary mt-1 mr-3 flex-shrink-0" size={20} />
              <p>
                <strong>Materials:</strong> Please prepare a logline, synopsis, budget range, and any relevant visual references or treatments.
              </p>
            </div>
            <div className="flex items-start">
              <FileText className="text-primary mt-1 mr-3 flex-shrink-0" size={20} />
              <p>
                <strong>Response Time:</strong> Our team reviews all submissions within 2-3 weeks. We'll contact you if we're interested in discussing further.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/submission-form">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/80 hover-scale gap-2">
                <Upload size={18} />
                Submit a Project
              </Button>
            </Link>
            <Button variant="outline" className="hover-scale gap-2">
              <Link2 size={18} />
              View Submission Agreement
            </Button>
          </div>
        </div>

        <div className="bg-secondary/30 rounded-lg p-8 md:p-12 border border-border">
          <h3 className="text-xl font-bold mb-4">What We're Looking For</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-primary mb-2">Priority Projects</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Character-driven narratives</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Unique documentary subjects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Socially impactful stories</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Innovative visual concepts</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-2">Production Stages</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Development (early concept)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Pre-production (script ready)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Production (seeking crew/resources)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Post-production (seeking finishing)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}