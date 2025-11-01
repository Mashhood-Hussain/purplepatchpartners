import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AccessibilityProvider } from "@/contexts/AccessibilityContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Home from "@/pages/Home";
import Mission from "@/pages/Mission";
import Services from "@/pages/Services";
import Referrals from "@/pages/Referrals";
import Gallery from "@/pages/Gallery";
import Stories from "@/pages/Stories";
import InfoLearningDisabilities from "@/pages/InfoLearningDisabilities";
import InfoAutism from "@/pages/InfoAutism";
import InfoSEND from "@/pages/InfoSEND";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/mission" component={Mission} />
      <Route path="/services" component={Services} />
      <Route path="/referrals" component={Referrals} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/stories" component={Stories} />
      <Route path="/info/learning-disabilities" component={InfoLearningDisabilities} />
      <Route path="/info/autism" component={InfoAutism} />
      <Route path="/info/send-support" component={InfoSEND} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AccessibilityProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main id="main-content" className="flex-1">
              <Router />
            </main>
            <Footer />
          </div>
          <Toaster />
        </AccessibilityProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
