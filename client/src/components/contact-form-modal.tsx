import { useState } from "react";
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
}

export default function ContactFormModal({ open, onOpenChange }: ContactFormModalProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setStatus("submitting");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: data.name,
          email: data.email,
          subject: data.subject || "Portfolio Contact",
          message: data.message,
          to: "cubby@colonhyphenbracket.pink",
          bcc: "rorshock@protonmail.com",
          from_name: "CHB Portfolio",
        }),
      });
      if (!response.ok) throw new Error("Submission failed");
      const result = await response.json();
      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch {
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
          <DialogTitle className="text-lg font-semibold" data-testid="text-contact-title">
            Get in Touch
          </DialogTitle>
          <DialogDescription id="contact-form-description">
            Send a message and we'll get back to you shortly.
          </DialogDescription>
        </DialogHeader>

        {status === "success" ? (
          <div
            className="flex flex-col items-center gap-4 py-8"
            role="status"
            aria-live="polite"
            data-testid="contact-success"
          >
            <CheckCircle2 className="w-12 h-12" style={{ color: "#FE299E" }} />
            <p className="text-center font-medium">Message sent successfully!</p>
            <p className="text-sm text-muted-foreground text-center">
              We'll be in touch soon.
            </p>
            <Button onClick={handleClose} data-testid="button-close-success">
              Close
            </Button>
          </div>
        ) : status === "error" ? (
          <div
            className="flex flex-col items-center gap-4 py-8"
            role="alert"
            aria-live="assertive"
            data-testid="contact-error"
          >
            <AlertCircle className="w-12 h-12 text-destructive" />
            <p className="text-center font-medium">Something went wrong</p>
            <p className="text-sm text-muted-foreground text-center">
              Please try again or email us directly.
            </p>
            <div className="flex gap-3">
              <Button onClick={() => setStatus("idle")} data-testid="button-retry">
                Try Again
              </Button>
              <Button variant="secondary" onClick={handleClose} data-testid="button-close-error">
                Close
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
                        placeholder="Tell us about your project..."
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
                className="w-full"
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
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
}
