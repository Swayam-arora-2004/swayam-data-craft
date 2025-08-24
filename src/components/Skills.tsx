import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "C/C++"],
      tier: "primary"
    },
    {
      category: "Data Analysis",
      skills: ["Pandas", "NumPy", "SQL"],
      tier: "primary"
    },
    {
      category: "Data Visualization",
      skills: ["Power BI", "Tableau", "Matplotlib", "Seaborn"],
      tier: "primary"
    },
    {
      category: "Developer Tools",
      skills: ["VS Code", "Git", "GitHub", "MS Excel"],
      tier: "secondary"
    },
    {
      category: "Concepts",
      skills: ["Data Structures", "Algorithms", "OOP", "Data pipeline optimization"],
      tier: "secondary"
    },
    {
      category: "AI & Tools",
      skills: ["ChatGPT", "Trifacta", "Microsoft Fabric", "Zapier", "Koyfin", "H2O.ai", "Cursor", "Copilot"],
      tier: "secondary"
    },
    {
      category: "Soft Skills",
      skills: ["Data Storytelling", "Business Problem-Solving", "Critical Thinking", "Collaboration", "Time Management"],
      tier: "accent"
    }
  ];

  const getVariant = (tier: string) => {
    switch (tier) {
      case "primary":
        return "default";
      case "secondary":
        return "secondary";
      case "accent":
        return "outline";
      default:
        return "secondary";
    }
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for data analysis and development
          </p>
        </div>

        <div className="grid gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.category} 
              className="glass-card hover-glow p-6 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant={getVariant(category.tier)}
                    className="text-sm px-3 py-1 glass-card hover-glow transition-all duration-200 hover:scale-105"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
              <div className="mt-3 text-xs text-muted-foreground/60">
                (Editable skill tags)
              </div>
            </Card>
          ))}
        </div>

        {/* Skill Level Legend */}
        <div className="mt-12 text-center">
          <Card className="glass-card p-6 inline-block">
            <h4 className="font-semibold mb-4 text-foreground">Skill Levels</h4>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2">
                <Badge variant="default" className="text-xs">Primary</Badge>
                <span className="text-sm text-muted-foreground">Advanced</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-xs">Secondary</Badge>
                <span className="text-sm text-muted-foreground">Intermediate</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">Soft Skills</Badge>
                <span className="text-sm text-muted-foreground">Professional</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;