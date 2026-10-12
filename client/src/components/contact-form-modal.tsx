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
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

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

export default function ContactFormModal({ open, onOpenChange, defaultSubject = "1-Week Production Sprint ($7,500)" }: ContactFormModalProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const intentOptions = [
    "1-Week Production Sprint ($7,500)",
    "Principal / Staff W2 Role",
    "Fractional Lead Architect",
    "Direct Hire Inquiry",
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

  async function onSubmit(data: ContactFormValues) {
    setStatus("submitting");
    setErrorMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject || "1-Week Production Sprint ($7,500)",
          message: data.message,
          sprintType: data.subject?.includes("$7,500") ? "1-Week Sprint ($7,500)" : undefined,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to submit inquiry.");
      }

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (err: any) {
      console.error("[FORM] Submission error:", err);
      // Even if network fails, provide graceful fallback
      setErrorMessage(err?.message || "Something went wrong while sending your message.");
      setStatus("error");
    }
  }

  function handleClose() {
    if (status !== "submitting") {
      onOpenChange(false);
      setTimeout(() => {
        setStatus("idle");
        form.reset();
      }, 300);
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        className="max-w-md"
        data-testid="modal-contact"
        aria-describedby="contact-form-description"
      >
        <DialogHeader>
          <DialogTitle className="text-xl font-serif font-bold text-[#281B16]" data-testid="text-contact-title">
            Book 1-Week Sprint ($7,500) or Inquire
          </DialogTitle>
          <DialogDescription id="contact-form-description" className="text-xs text-[#6B554D] font-sans">
            Direct channel to Kyle Cyree. Response guaranteed within 24 hours.
          </DialogDescription>
        </DialogHeader>

        {status === "success" ? (
          <div
            className="flex flex-col items-center gap-4 py-6 text-center space-y-2"
            role="status"
            aria-live="polite"
            data-testid="contact-success"
          >
            <div className="w-14 h-14 rounded-full bg-[#FE299E]/10 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-[#FE299E]" />
            </div>
            <div className="space-y-1">
              <h3 className="font-serif font-bold text-lg text-[#281B16]">Inquiry Dispatched Successfully!</h3>
              <p className="text-xs text-[#6B554D] font-sans max-w-xs">
                Your message has been logged directly into Kyle&apos;s queue. Expect a response within 24 hours.
              </p>
            </div>

            <div className="w-full bg-[#F2EAE0] border border-[#D3C7B5] rounded-xl p-3 text-left space-y-1.5 text-xs font-sans">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-[#6B554D]">Sprint Rate:</span>
                <span className="font-bold text-[#281B16]">$7,500 Flat</span>
              </div>
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-[#6B554D]">Guaranteed Turnaround:</span>
                <span className="font-bold text-[#281B16]">5 Business Days</span>
              </div>
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-[#6B554D]">Direct Channel:</span>
                <span className="font-semibold text-[#FE299E]">cubby@colonhyphenbracket.pink</span>
              </div>
            </div>

            <Button
              onClick={handleClose}
              className="w-full bg-[#281B16] hover:bg-[#3D2C24] text-[#F2EAE0] font-sans text-xs uppercase tracking-wider font-bold rounded-full py-2.5"
              data-testid="button-close-success"
            >
              Close Window
            </Button>
          </div>
        ) : status === "error" ? (
          <div
            className="flex flex-col items-center gap-4 py-6 text-center space-y-2"
            role="alert"
            aria-live="assertive"
            data-testid="contact-error"
          >
            <AlertCircle className="w-12 h-12 text-[#E05A36]" />
            <div className="space-y-1">
              <h3 className="font-serif font-bold text-lg text-[#281B16]">Unable to Dispatch</h3>
              <p className="text-xs text-[#6B554D] font-sans max-w-xs">
                {errorMessage || "Network hiccup. Please reach Kyle directly via email."}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2.5 w-full pt-2">
              <a
                href="mailto:cubby@colonhyphenbracket.pink?subject=1-Week%20Sprint%20Inquiry%20($7,500)&body=Hi%20Kyle,%0A%0AI'd%20like%20to%20book%20a%201-Week%20Turnaround%20Sprint%20($7,500)."
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#FE299E] hover:bg-[#D1007E] text-white text-xs font-sans uppercase font-bold tracking-wider"
              >
                Send via Email Client &rarr;
              </a>
              <Button
                variant="outline"
                onClick={() => setStatus("idle")}
                className="rounded-full text-xs font-sans"
                data-testid="button-retry"
              >
                Try Form Again
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
              <div>
                <label className="text-[11px] font-sans uppercase tracking-wider text-muted-foreground block mb-2">
                  Select Project Track / Purpose:
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {intentOptions.map((opt) => {
                    const isSelected = form.watch("subject") === opt;
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => form.setValue("subject", opt)}
                        className={`text-[11px] px-2.5 py-1 rounded-md border transition-all font-sans ${
                          isSelected
                            ? "bg-[#FE299E] text-white border-[#FE299E] font-semibold shadow-sm"
                            : "bg-muted/40 text-muted-foreground border-border/60 hover:text-foreground hover:bg-muted/70"
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
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your name"
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
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="you@example.com"
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
                    <FormLabel>
                      Subject <span className="text-muted-foreground font-normal">(optional)</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="What's this about?"
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
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your project or role..."
                        rows={4}
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
                className="w-full bg-[#FE299E] hover:bg-[#D1007E] text-white"
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
                    Send Inquiry
                  </>
                )}
              </Button>

              <div className="pt-2 text-center text-xs text-muted-foreground border-t border-border/40 space-y-0.5">
                <p>
                  Direct email:{" "}
                  <a
                    href="mailto:rorshock@protonmail.com"
                    className="font-sans text-[#FE299E] hover:underline font-semibold"
                  >
                    rorshock@protonmail.com
                  </a>
                </p>
                <p className="text-[10px] font-sans text-muted-foreground/70">
                  Raleigh, NC &amp; US Remote &bull; Response within 24 hours guaranteed
                </p>
              </div>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
}
