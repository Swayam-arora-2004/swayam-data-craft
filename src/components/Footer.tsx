import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Database, Mail, Phone, Copy, Check, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const { toast } = useToast();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const contactInfo = {
    email: "aroraswayam0@gmail.com",
    phone: "+91 9821931707"
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Swayam-arora-2004",
      icon: Github
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/swayamarora",
      icon: Linkedin
    },
    {
      name: "Kaggle",
      url: "https://kaggle.com/swayamarora0",
      icon: Database
    }
  ];

  const copyToClipboard = async (text: string, type: "email" | "phone") => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === "email") {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      }
      toast({
        title: "Copied to clipboard",
        description: `${text} has been copied to your clipboard.`,
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please copy the contact information manually.",
        variant: "destructive",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <button 
              onClick={scrollToTop}
              className="text-2xl font-bold gradient-text hover:scale-105 transition-transform"
            >
              Swayam A.
            </button>
            <p className="text-muted-foreground">
              Aspiring Data Analyst building practical solutions with code and data.
            </p>
          </div>

          {/* Quick Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground text-sm">{contactInfo.email}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(contactInfo.email, "email")}
                  className="h-6 w-6 p-0"
                >
                  {copiedEmail ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground text-sm">{contactInfo.phone}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(contactInfo.phone, "phone")}
                  className="h-6 w-6 p-0"
                >
                  {copiedPhone ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                </Button>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 glass-card hover-glow rounded-lg transition-all duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-primary" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-red-500" /> by Swayam Arora
            </p>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;