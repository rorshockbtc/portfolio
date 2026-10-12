import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/layout";
import Portfolio from "@/pages/portfolio";
import { lazy, Suspense } from "react";
import NotFound from "@/pages/not-found";

// Secondary routes load on demand so the homepage ships less JavaScript.
const Studio = lazy(() => import("@/pages/studio"));
const CaseStudyPage = lazy(() => import("@/pages/case-study"));
const EssayDesignIsRisk = lazy(() => import("@/pages/essay-design-is-risk"));

function Router() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#EAE0D0]" />}>
    <Switch>
      {/* Standalone essay — no nav/footer wrapper */}
      <Route path="/essays/design-is-risk" component={EssayDesignIsRisk} />
      {/* Main layout-wrapped routes */}
      <Route>
        <Layout>
          <Switch>
            <Route path="/" component={Portfolio} />
            <Route path="/case-studies/:slug" component={CaseStudyPage} />
            <Route path="/studio" component={Studio} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Route>
    </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
