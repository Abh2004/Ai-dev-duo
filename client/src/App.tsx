import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Work from "@/pages/Work";
import Company from "@/pages/Company";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/work" component={Work} />
      <Route path="/company" component={Company} />
      <Route path="/contact" component={Contact} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-black text-white mx-4 lg:mx-24">
        <Header />
        <Router />
        <Footer />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
