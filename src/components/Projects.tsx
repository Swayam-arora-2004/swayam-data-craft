import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp, ExternalLink, Github, Image } from "lucide-react";

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Financial Market Dashboard",
      tagline: "Interactive market & crypto dashboard",
      description: "Integrated 10+ stock market & crypto APIs to track price trends, trading volume, and sector performance. Delivered insights that could simulate portfolio performance with 95% data accuracy.",
      techStack: ["Power BI", "SQL", "Python", "APIs"],
      caseStudy: {
        problem: "Need for real-time financial market insights and portfolio performance tracking across multiple asset classes.",
        approach: "Integrated multiple APIs, built ETL pipelines, and created interactive visualizations with automated data refresh.",
        result: "95% data accuracy with real-time updates, enabling informed investment decisions.",
        learned: "API integration, real-time data processing, and financial data visualization best practices."
      },
      editable: true
    },
    {
      id: 2,
      title: "Customer Churn Prediction",
      tagline: "Predictive model for churn",
      description: "Built a machine learning model using Logistic Regression, Random Forest, and XGBoost to predict customer churn with 90% accuracy. Created a dashboard visualization that translated predictions into business actions.",
      techStack: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Matplotlib"],
      caseStudy: {
        problem: "High customer churn rates without predictive insights for proactive retention strategies.",
        approach: "Analyzed customer data, engineered features, compared multiple ML algorithms, and built an interpretable model.",
        result: "90% prediction accuracy with actionable insights for customer retention strategies.",
        learned: "Feature engineering, model comparison, and translating ML insights into business actions."
      },
      editable: true
    },
    {
      id: 3,
      title: "Gesture-Controlled System",
      tagline: "Hardware interface using computer vision",
      description: "Developed a gesture recognition system for controlling computer interfaces using OpenCV and machine learning.",
      techStack: ["Python", "OpenCV", "TensorFlow", "Arduino"],
      caseStudy: {
        problem: "Creating intuitive human-computer interaction without physical contact.",
        approach: "Computer vision for hand tracking, gesture classification, and hardware integration.",
        result: "Responsive gesture control with 85% accuracy for various computer operations.",
        learned: "Computer vision, real-time processing, and hardware-software integration."
      },
      editable: true
    }
  ];

  const toggleExpanded = (projectId: number) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of practical data solutions and technical implementations
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card key={project.id} className="glass-card hover-glow overflow-hidden animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Project Image Placeholder */}
                  <div className="lg:w-1/3">
                    <div className="aspect-video bg-gradient-card rounded-lg flex items-center justify-center border border-border">
                      <div className="text-center">
                        <Image className="w-12 h-12 mx-auto text-muted-foreground mb-2" />
                        <p className="text-sm text-muted-foreground">Screenshot Placeholder</p>
                        <p className="text-xs text-muted-foreground/60">(Editable)</p>
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="lg:w-2/3 space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-2 text-foreground">
                          {project.title}
                        </h3>
                        <p className="text-primary font-medium mb-4">
                          {project.tagline}
                        </p>
                      </div>
                      {project.editable && (
                        <Badge variant="outline" className="text-xs">
                          Editable
                        </Badge>
                      )}
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="glass-card">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4 pt-4">
                      <Button variant="outline" size="sm" className="glass-card">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub (Placeholder)
                      </Button>
                      <Button variant="outline" size="sm" className="glass-card">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo (Placeholder)
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleExpanded(project.id)}
                        className="text-primary hover:text-primary-glow"
                      >
                        Case Study
                        {expandedProject === project.id ? (
                          <ChevronUp className="w-4 h-4 ml-2" />
                        ) : (
                          <ChevronDown className="w-4 h-4 ml-2" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Expandable Case Study */}
                {expandedProject === project.id && (
                  <div className="mt-8 pt-8 border-t border-border animate-fade-in">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Problem</h4>
                        <p className="text-sm text-muted-foreground">
                          {project.caseStudy.problem}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Approach</h4>
                        <p className="text-sm text-muted-foreground">
                          {project.caseStudy.approach}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Result</h4>
                        <p className="text-sm text-muted-foreground">
                          {project.caseStudy.result}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">What I Learned</h4>
                        <p className="text-sm text-muted-foreground">
                          {project.caseStudy.learned}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;