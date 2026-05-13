import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/layout";
import Portfolio from "@/pages/portfolio";
import Studio from "@/pages/studio";
import EssayDesignIsRisk from "@/pages/essay-design-is-risk";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      {/* Standalone essay — no nav/footer wrapper */}
      <Route path="/essays/design-is-risk" component={EssayDesignIsRisk} />
      {/* Main layout-wrapped routes */}
      <Route>
        <Layout>
          <Switch>
            <Route path="/" component={Portfolio} />
            <Route path="/studio" component={Studio} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Route>
    </Switch>
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
