import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import CaseStudies from "@/pages/CaseStudies";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import Pricing from "@/pages/Pricing";
import AISolutions from "@/pages/AISolutions";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Chat from "@/components/ui/chat";
import WhatsAppWidget from "@/components/ui/whatsapp-widget";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/ai-solutions" component={AISolutions} />
          <Route path="/case-studies" component={CaseStudies} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog/:slug" component={Blog} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <div className="app-container overflow-x-hidden w-full relative">
      <Router />
      <Chat />
      <WhatsAppWidget 
        phoneNumber="971565531542" 
        message="Hello Yafa Cloud Services! I'd like to learn more about your enterprise cloud solutions."
      />
      <Toaster />
    </div>
  );
}

export default App;
