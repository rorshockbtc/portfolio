import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle2, AlertCircle, Loader2, Calendar, MessageSquare } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().max(200).optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(5000),
});

type ContactFormValues = z.infer<typeof contactSchema>;

interface ContactFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultSubject?: string;
}

const CONTACT_EMAIL = "rorshock@protonmail.com";
const CALENDLY_URL = "https://calendly.com/cubby-colonhyphenbracket/30min";

export default function ContactFormModal({
  open,
  onOpenChange,
  defaultSubject = "Full-time role (Product Architect / Staff)",
}: ContactFormModalProps) {
  const [activeTab, setActiveTab] = useState<"message" | "calendar">("message");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [lastDraft, setLastDraft] = useState<ContactFormValues | null>(null);

  const intentOptions = [
    "1-week sprint ($7,500)",
    "2-4 week systems engagement ($15k-$25k)",
    "Full-time role (Product Architect / Staff)",
    "Introductory chat / consultation",
  ];

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: defaultSubject,
      message: "",
    },
  });

  useEffect(() => {
    if (open && defaultSubject) {
      form.setValue("subject", defaultSubject);
    }
  }, [open, defaultSubject, form]);

  const mailtoHref = (d: ContactFormValues | null) => {
    const subject = d?.subject || defaultSubject || "Inquiry for Kyle Cyree";
    const body = d ? `${d.message}\n\n— ${d.name} (${d.email})` : "Hi Kyle,\n\n";
    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  async function onSubmit(data: ContactFormValues) {
    setStatus("submitting");
    setErrorMessage("");
    setLastDraft(data);
    const botcheck = (document.getElementById("contact-botcheck") as HTMLInputElement | null)?.value;
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject || defaultSubject,
          message: data.message,
          botcheck,
        }),
      });

      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.success) {
        throw new Error(result.message || "The form couldn't send your message.");
      }
      setStatus("success");
      form.reset();
    } catch (err: any) {
      console.error("[FORM] Submission error:", err);
      setErrorMessage(err?.message || "The form couldn't send your message.");
      setStatus("error");
    }
  }

  function handleClose() {
    if (status !== "submitting") {
      onOpenChange(false);
      setTimeout(() => {
        setStatus("idle");
        setActiveTab("message");
        form.reset();
      }, 300);
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        className="max-w-lg bg-[#F2EAE0] border-[#D3C7B5] text-[#281B16]"
        data-testid="modal-contact"
        aria-describedby="contact-form-description"
      >
        <DialogHeader>
          <DialogTitle className="text-2xl sm:text-3xl font-serif font-bold text-[#281B16]" data-testid="text-contact-title">
            Connect with Kyle
          </DialogTitle>
          <DialogDescription id="contact-form-description" className="text-sm text-[#6B554D] font-sans">
            Direct access to Kyle Cyree. North Carolina · US Remote · Replies within 1 business day.
          </DialogDescription>
        </DialogHeader>

        {/* Tab Selector */}
        <div className="flex rounded-full bg-[#EAE0D0] p-1 border border-[#D3C7B5] my-1">
          <button
            type="button"
            onClick={() => setActiveTab("message")}
            className={`flex-1 flex items-center justify-center gap-2 py-2 text-xs font-sans font-bold uppercase tracking-wider rounded-full transition-all cursor-pointer ${
              activeTab === "message"
                ? "bg-[#281B16] text-[#F2EAE0] shadow-sm"
                : "text-[#6B554D] hover:text-[#281B16]"
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" /> Send a Message
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("calendar")}
            className={`flex-1 flex items-center justify-center gap-2 py-2 text-xs font-sans font-bold uppercase tracking-wider rounded-full transition-all cursor-pointer ${
              activeTab === "calendar"
                ? "bg-[#281B16] text-[#F2EAE0] shadow-sm"
                : "text-[#6B554D] hover:text-[#281B16]"
            }`}
          >
            <Calendar className="w-3.5 h-3.5 text-[#FE299E]" /> Pick a Time (Calendly)
          </button>
        </div>

        {activeTab === "calendar" ? (
          /* Instant Calendly Booking Tab */
          <div className="py-6 space-y-6 text-center animate-in fade-in duration-200">
            <div className="w-16 h-16 rounded-full bg-[#FE299E]/10 flex items-center justify-center mx-auto">
              <Calendar className="w-8 h-8 text-[#FE299E]" />
            </div>
            <div className="space-y-2 max-w-sm mx-auto">
              <h3 className="font-serif font-bold text-xl text-[#281B16]">30-Minute Introduction</h3>
              <p className="text-sm text-[#6B554D] font-sans leading-relaxed">
                Skip the back-and-forth email queue. Pick an open 30-minute slot directly on Kyle's calendar to discuss your product architecture, sprint scope, or a full-time role.
              </p>
            </div>
            <div className="pt-2">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-full bg-[#FE299E] hover:bg-[#D1007E] text-white text-sm font-sans font-bold shadow-lg transition-all"
              >
                Open Kyle's Calendly &rarr;
              </a>
            </div>
            <p className="text-xs text-[#8C7469] font-sans">
              Instant Google Meet invite automatically generated.
            </p>
          </div>
        ) : status === "success" ? (
          <div
            className="flex flex-col items-center gap-4 py-6 text-center"
            role="status"
            aria-live="polite"
            data-testid="contact-success"
          >
            <div className="w-14 h-14 rounded-full bg-[#FE299E]/10 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-[#FE299E]" />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif font-bold text-xl text-[#281B16]">Message sent</h3>
              <p className="text-sm text-[#6B554D] font-sans max-w-sm">
                Thanks. Kyle reads every message himself and will reply within one business day.
              </p>
            </div>
            <Button
              onClick={handleClose}
              className="w-full bg-[#281B16] hover:bg-[#3D2C24] text-[#F2EAE0] font-sans text-sm font-bold rounded-full py-3"
              data-testid="button-close-success"
            >
              Close
            </Button>
          </div>
        ) : status === "error" ? (
          <div
            className="flex flex-col items-center gap-4 py-6 text-center"
            role="alert"
            aria-live="assertive"
            data-testid="contact-error"
          >
            <AlertCircle className="w-12 h-12 text-[#E05A36]" />
            <div className="space-y-2">
              <h3 className="font-serif font-bold text-xl text-[#281B16]">That didn't send</h3>
              <p className="text-sm text-[#6B554D] font-sans max-w-sm">
                {errorMessage} Your message is saved below, so one click opens it in your email app.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full pt-2">
              <a
                href={mailtoHref(lastDraft)}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#FE299E] hover:bg-[#D1007E] text-white text-sm font-sans font-bold"
                data-testid="link-mailto-fallback"
              >
                Open in email &rarr;
              </a>
              <Button
                variant="outline"
                onClick={() => setStatus("idle")}
                className="rounded-full text-sm font-sans py-3 border-[#D3C7B5]"
                data-testid="button-retry"
              >
                Try again
              </Button>
            </div>
          </div>
        ) : (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4"
              data-testid="form-contact"
              noValidate
            >
              {/* Honeypot: hidden from humans and assistive tech */}
              <input id="contact-botcheck" type="text" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

              <div>
                <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#6B554D] block mb-2">
                  What's this about?
                </span>
                <div className="flex flex-wrap gap-2">
                  {intentOptions.map((opt) => {
                    const isSelected = form.watch("subject") === opt;
                    return (
                      <button
                        key={opt}
                        type="button"
                        aria-pressed={isSelected}
                        onClick={() => form.setValue("subject", opt)}
                        className={`text-xs sm:text-sm px-3 py-1.5 rounded-full border transition-all font-sans cursor-pointer ${
                          isSelected
                            ? "bg-[#281B16] text-[#F2EAE0] border-[#281B16] font-semibold"
                            : "bg-transparent text-[#6B554D] border-[#D3C7B5] hover:text-[#281B16] hover:border-[#281B16]"
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs uppercase font-bold tracking-wider text-[#5C4840]">Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your name"
                        className="bg-[#EAE0D0] border-[#D3C7B5] text-[#281B16] focus-visible:ring-[#FE299E]"
                        {...field}
                        data-testid="input-name"
                        autoComplete="name"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs uppercase font-bold tracking-wider text-[#5C4840]">Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="you@example.com"
                        className="bg-[#EAE0D0] border-[#D3C7B5] text-[#281B16] focus-visible:ring-[#FE299E]"
                        {...field}
                        data-testid="input-email"
                        autoComplete="email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs uppercase font-bold tracking-wider text-[#5C4840]">
                      Subject <span className="text-muted-foreground font-normal lowercase">(optional)</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="What's this about?"
                        className="bg-[#EAE0D0] border-[#D3C7B5] text-[#281B16] focus-visible:ring-[#FE299E]"
                        {...field}
                        data-testid="input-subject"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs uppercase font-bold tracking-wider text-[#5C4840]">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell me the problem, timeline, or role scope."
                        rows={3}
                        className="bg-[#EAE0D0] border-[#D3C7B5] text-[#281B16] focus-visible:ring-[#FE299E]"
                        {...field}
                        data-testid="input-message"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-sm font-bold rounded-full py-3.5 cursor-pointer shadow-md"
                disabled={status === "submitting"}
                data-testid="button-submit-contact"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send message
                  </>
                )}
              </Button>

              <div className="pt-2 text-center text-xs text-[#6B554D] border-t border-[#D3C7B5] space-y-1">
                <p>
                  Direct email:{" "}
                  <a
                    href="mailto:rorshock@protonmail.com"
                    className="font-sans text-[#FE299E] hover:underline font-semibold"
                  >
                    rorshock@protonmail.com
                  </a>
                </p>
                <p className="text-[11px] font-sans text-[#8C7469]">
                  North Carolina · US remote · Replies within 1 business day
                </p>
              </div>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
}
