import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Github, Linkedin, Database, Copy, Check, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const contactInfo = {
    email: "aroraswayam0@gmail.com",
    phone: "+91 9821931707"
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Swayam-arora-2004",
      icon: Github,
      handle: "@Swayam-arora-2004"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/swayamarora",
      icon: Linkedin,
      handle: "@swayamarora"
    },
    {
      name: "Kaggle",
      url: "https://kaggle.com/swayamarora0",
      icon: Database,
      handle: "@swayamarora0"
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const downloadResume = () => {
    toast({
      title: "Resume Download",
      description: "Resume download will be available soon.",
    });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Open to internships, collaborations, and interesting data projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Contact Information
              </h3>
              
              {/* Email */}
              <Card className="glass-card hover-glow p-6 mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground">{contactInfo.email}</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(contactInfo.email, "email")}
                    className="hover-glow"
                  >
                    {copiedEmail ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </Card>

              {/* Phone */}
              <Card className="glass-card hover-glow p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-muted-foreground">{contactInfo.phone}</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(contactInfo.phone, "phone")}
                    className="hover-glow"
                  >
                    {copiedPhone ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </Card>
            </div>

            {/* Social Links */}
            <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <h4 className="text-xl font-semibold mb-4 text-foreground">
                Connect Online
              </h4>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <Card key={social.name} className="glass-card hover-glow p-4">
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 w-full text-left"
                    >
                      <social.icon className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">{social.name}</p>
                        <p className="text-sm text-muted-foreground">{social.handle}</p>
                      </div>
                    </a>
                  </Card>
                ))}
              </div>
            </div>

            {/* Download Resume */}
            <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <Button
                onClick={downloadResume}
                className="w-full hover-glow"
                size="lg"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Card className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="glass-card"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="glass-card"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="glass-card resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <Button type="submit" className="w-full hover-glow" size="lg">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;