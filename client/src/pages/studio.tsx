import { motion } from "framer-motion";

export default function Studio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center space-y-6 max-w-2xl"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Studio
          </p>
          <h1
            className="font-display text-3xl md:text-5xl tracking-tight leading-tight"
            data-testid="text-studio-headline"
          >
            Coming Soon
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Architecture &amp; product design for the stuck &amp; underserved.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
