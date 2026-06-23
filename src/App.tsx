import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { LanguageProvider } from "./lib/LanguageContext";
import { SiteNav } from "./components/site/SiteNav";
import { SiteFooter } from "./components/site/SiteFooter";
import Home from "./pages/Home";
import Article from "./pages/Article";
import NotFound from "./pages/NotFound";

function ScrollToHashOrTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <LanguageProvider>
      <ScrollToHashOrTop />
      <div className="flex min-h-screen flex-col">
        <SiteNav />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/writing/:slug" element={<Article />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <SiteFooter />
      </div>
    </LanguageProvider>
  );
}
