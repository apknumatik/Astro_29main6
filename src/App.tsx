import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { startGlobalAmbient } from "@/hooks/useAudio";
import { ThemeProvider } from "@/contexts/ThemeContext";
import WelcomePage from "./pages/WelcomePage";
import MenuPage from "./pages/MenuPage";
import PetunjukPage from "./pages/PetunjukPage";
import QuizPage from "./pages/QuizPage";
import ReferensiPage from "./pages/ReferensiPage";
import DonasiPage from "./pages/DonasiPage";
import BiografiPage from "./pages/BiografiPage";
import OlimpiadePage from "./pages/OlimpiadePage";
import OlimpiadeBilanganBulatPage from "./pages/OlimpiadeBilanganBulatPage";
import TKAPage from "./pages/TKAPage";
import PapanPeringkatPage from "./pages/PapanPeringkatPage";
import BankSoalPage from "./pages/BankSoalPage";
import ChatAIPage from "./pages/ChatAIPage";
import PengaturanPage from "./pages/PengaturanPage";
import TentangAplikasiPage from "./pages/TentangAplikasiPage";
import KalkulatorScientificPage from "./pages/KalkulatorScientificPage";
import VideoPembelajaranPage from "./pages/VideoPembelajaranPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppInner = () => {
  useEffect(() => {
    const handleInteraction = () => {
      startGlobalAmbient();
      window.removeEventListener("click", handleInteraction);
    };
    window.addEventListener("click", handleInteraction);
    return () => window.removeEventListener("click", handleInteraction);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/petunjuk" element={<PetunjukPage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/referensi" element={<ReferensiPage />} />
      <Route path="/kalkulator-scientific" element={<KalkulatorScientificPage />} />
      <Route path="/video-pembelajaran" element={<VideoPembelajaranPage />} />
      <Route path="/donasi" element={<DonasiPage />} />
      <Route path="/biografi" element={<BiografiPage />} />
      <Route path="/olimpiade" element={<OlimpiadePage />} />
      <Route path="/olimpiade/bilangan-bulat" element={<OlimpiadeBilanganBulatPage />} />
      <Route path="/tka" element={<TKAPage />} />
      <Route path="/papan-peringkat" element={<PapanPeringkatPage />} />
      <Route path="/bank-soal" element={<BankSoalPage />} />
      <Route path="/chat-ai" element={<ChatAIPage />} />
      <Route path="/pengaturan" element={<PengaturanPage />} />
      <Route path="/tentang-aplikasi" element={<TentangAplikasiPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppInner />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
