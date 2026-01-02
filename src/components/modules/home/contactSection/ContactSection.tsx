"use client"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  AtSign,
  Briefcase,
  Github,
  Linkedin,
  LucideIcon,
  Mail,
  Tag,
  User,
} from "lucide-react";
import { FormEvent } from "react";
import { toast } from "sonner";

const ContactSection = () => {
  

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const id = toast.loading("Message Sending...")
    try {
      // Simulate API call
      await new Promise((resolve) =>
        setTimeout(() => resolve(""), 1000)
      );

      toast.success("Message send", { id })
    } catch (error) {
      console.error(error);
      toast.error("Message sending failed!", { id })
    }
  };

  return (
    <section id="contact" className=" pt-18">
      {/* Header */}
      <div className="mb-14 text-center pt-6 ">
        <span className="text-primary text-sm font-semibold uppercase tracking-wider">
          Get in touch
        </span>
        <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
          Let’s work together
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          Have a project in mind, a technical challenge, or an idea worth
          exploring? I’m always open to meaningful collaborations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Contact Links */}
          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <h3 className="mb-5 text-lg font-semibold">Connect</h3>

            <ContactItem
              Label="GitHub"
              icon={Github}
              href="https://github.com/sushanto171"
            />

            <ContactItem
              Label="LinkedIn"
              icon={Linkedin}
              href="https://linkedin.com/in/sushanto-kumar171"
            />

            <div className="mt-6 pt-4 border-t">
              <ContactItem
                Label="sushantokumar171@gamil.com"
                icon={Mail}
                href="mailto:sushantokumar171@gmail.com"
              />
            </div>
          </div>

          {/* Status Card */}
          <div className="rounded-2xl border bg-card p-6 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Current Status</p>
              <p className="mt-1 flex items-center font-medium">
                <span className="mr-2 h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                Open to work
              </p>
            </div>
            <Briefcase className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>

        {/* Right Column – Form */}
        <div className="md:col-span-2 h-full">
          <form onSubmit={(e) => handleSubmit(e)} className="rounded-2xl border bg-card p-8 shadow-sm space-y-6 h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormInput
                label="Your Name"
                placeholder="John Doe"
                icon={User}
              />

              <FormInput
                label="Your Email"
                placeholder="john@example.com"
                icon={AtSign}
                type="email"
              />
            </div>

            <FormInput
              label="Subject"
              placeholder="Project inquiry"
              icon={Tag}
            />

            <div className="space-y-2">
              <Label className="text-sm font-medium">Message</Label>
              <Textarea
                rows={5}
                required
                placeholder="Tell me about your project..."

              />
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition active:scale-[0.98]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

/* -------------------- Reusable Components -------------------- */

const ContactItem = ({
  Label,
  icon: Icon,
  href,
}: {
  Label: string;
  icon: LucideIcon;
  href: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group mb-4 flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted group-hover:bg-primary/10 transition">
        <Icon className="h-5 w-5" />
      </div>
      <span className="font-medium">{Label}</span>
    </a>
  );
};

const FormInput = ({
  label,
  placeholder,
  icon: Icon,
  type = "text",
}: {
  label: string;
  placeholder: string;
  icon: LucideIcon;
  type?: string;
}) => {
  return (
    <div className="space-y-2">
      <Label >{label}</Label>
      <div className="relative">
        <span className="absolute inset-y-0 left-3 flex items-center text-muted-foreground">
          <Icon className="h-4 w-4" />
        </span>
        <Input
          type={type}
          required
          placeholder={placeholder}
          className="pl-10"
        />
      </div>
    </div>
  );
};
