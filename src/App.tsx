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

// Latihan Mandiri Pages
import LatihanMandiriPage from "./pages/LatihanMandiriPage";
import LatihanMandiriKelas7Page from "./pages/LatihanMandiriKelas7Page";
import LatihanMandiriKelas8Page from "./pages/LatihanMandiriKelas8Page";
import LatihanMandiriKelas9Page from "./pages/LatihanMandiriKelas9Page";

// Kelas 7 Topic Pages
import BilanganBulatK7Page from "./pages/latihan-mandiri/kelas7/BilanganBulatPage";
import BilanganRasionalK7Page from "./pages/latihan-mandiri/kelas7/BilanganRasionalPage";
import AljabarK7Page from "./pages/latihan-mandiri/kelas7/AljabarPage";
import PLSVPtLSVK7Page from "./pages/latihan-mandiri/kelas7/PLSVPtLSVPage";
import PerbandinganK7Page from "./pages/latihan-mandiri/kelas7/PerbandinganPage";
import AritmetikaSosialK7Page from "./pages/latihan-mandiri/kelas7/AritmetikaSosialPage";
import GarisDanSudutK7Page from "./pages/latihan-mandiri/kelas7/GarisDanSudutPage";
import SegitigaSegiempatK7Page from "./pages/latihan-mandiri/kelas7/SegitigaSegiempatPage";
import HimpunanK7Page from "./pages/latihan-mandiri/kelas7/HimpunanPage";

// Kelas 8 Topic Pages
import PolaBilanganK8Page from "./pages/latihan-mandiri/kelas8/PolaBilanganPage";
import KoordinatCartesiusK8Page from "./pages/latihan-mandiri/kelas8/KoordinatCartesiusPage";
import RelasiFungsiK8Page from "./pages/latihan-mandiri/kelas8/RelasiFungsiPage";
import SPLDVK8Page from "./pages/latihan-mandiri/kelas8/SPLDVPage";
import PersamaanGarisLurusK8Page from "./pages/latihan-mandiri/kelas8/PersamaanGarisLurusPage";
import TeoremaPythagorasK8Page from "./pages/latihan-mandiri/kelas8/TeoremaPythagorasPage";
import LingkaranK8Page from "./pages/latihan-mandiri/kelas8/LingkaranPage";
import GarisSinggungLingkaranK8Page from "./pages/latihan-mandiri/kelas8/GarisSinggungLingkaranPage";
import BangunRuangSisiDatarK8Page from "./pages/latihan-mandiri/kelas8/BangunRuangSisiDatarPage";

// Kelas 9 Topic Pages
import BilanganBerpangkatK9Page from "./pages/latihan-mandiri/kelas9/BilanganBerpangkatPage";
import KesebangunanKekongruenK9Page from "./pages/latihan-mandiri/kelas9/KesebangunanKekongruenPage";
import TransformasiGeometriK9Page from "./pages/latihan-mandiri/kelas9/TransformasiGeometriPage";
import BangunRuangSisiLengkungK9Page from "./pages/latihan-mandiri/kelas9/BangunRuangSisiLengkungPage";
import StatistikaK9Page from "./pages/latihan-mandiri/kelas9/StatistikaPage";
import PeluangK9Page from "./pages/latihan-mandiri/kelas9/PeluangPage";
import PersamaanKuadratK9Page from "./pages/latihan-mandiri/kelas9/PersamaanKuadratPage";
import FungsiKuadratK9Page from "./pages/latihan-mandiri/kelas9/FungsiKuadratPage";

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
      
      {/* Latihan Mandiri Routes */}
      <Route path="/latihan-mandiri" element={<LatihanMandiriPage />} />
      <Route path="/latihan-mandiri/kelas-7" element={<LatihanMandiriKelas7Page />} />
      <Route path="/latihan-mandiri/kelas-8" element={<LatihanMandiriKelas8Page />} />
      <Route path="/latihan-mandiri/kelas-9" element={<LatihanMandiriKelas9Page />} />
      
      {/* Kelas 7 Topic Routes */}
      <Route path="/latihan-mandiri/kelas-7/bilangan-bulat" element={<BilanganBulatK7Page />} />
      <Route path="/latihan-mandiri/kelas-7/bilangan-rasional" element={<BilanganRasionalK7Page />} />
      <Route path="/latihan-mandiri/kelas-7/aljabar" element={<AljabarK7Page />} />
      <Route path="/latihan-mandiri/kelas-7/plsv-ptlsv" element={<PLSVPtLSVK7Page />} />
      <Route path="/latihan-mandiri/kelas-7/perbandingan" element={<PerbandinganK7Page />} />
      <Route path="/latihan-mandiri/kelas-7/aritmetika-sosial" element={<AritmetikaSosialK7Page />} />
      <Route path="/latihan-mandiri/kelas-7/garis-dan-sudut" element={<GarisDanSudutK7Page />} />
      <Route path="/latihan-mandiri/kelas-7/segitiga-dan-segiempat" element={<SegitigaSegiempatK7Page />} />
      <Route path="/latihan-mandiri/kelas-7/himpunan" element={<HimpunanK7Page />} />
      
      {/* Kelas 8 Topic Routes */}
      <Route path="/latihan-mandiri/kelas-8/pola-bilangan" element={<PolaBilanganK8Page />} />
      <Route path="/latihan-mandiri/kelas-8/koordinat-cartesius" element={<KoordinatCartesiusK8Page />} />
      <Route path="/latihan-mandiri/kelas-8/relasi-dan-fungsi" element={<RelasiFungsiK8Page />} />
      <Route path="/latihan-mandiri/kelas-8/spldv" element={<SPLDVK8Page />} />
      <Route path="/latihan-mandiri/kelas-8/persamaan-garis-lurus" element={<PersamaanGarisLurusK8Page />} />
      <Route path="/latihan-mandiri/kelas-8/teorema-pythagoras" element={<TeoremaPythagorasK8Page />} />
      <Route path="/latihan-mandiri/kelas-8/lingkaran" element={<LingkaranK8Page />} />
      <Route path="/latihan-mandiri/kelas-8/garis-singgung-lingkaran" element={<GarisSinggungLingkaranK8Page />} />
      <Route path="/latihan-mandiri/kelas-8/bangun-ruang-sisi-datar" element={<BangunRuangSisiDatarK8Page />} />
      
      {/* Kelas 9 Topic Routes */}
      <Route path="/latihan-mandiri/kelas-9/bilangan-berpangkat" element={<BilanganBerpangkatK9Page />} />
      <Route path="/latihan-mandiri/kelas-9/kesebangunan-kekongruenan" element={<KesebangunanKekongruenK9Page />} />
      <Route path="/latihan-mandiri/kelas-9/transformasi-geometri" element={<TransformasiGeometriK9Page />} />
      <Route path="/latihan-mandiri/kelas-9/bangun-ruang-sisi-lengkung" element={<BangunRuangSisiLengkungK9Page />} />
      <Route path="/latihan-mandiri/kelas-9/statistika" element={<StatistikaK9Page />} />
      <Route path="/latihan-mandiri/kelas-9/peluang" element={<PeluangK9Page />} />
      <Route path="/latihan-mandiri/kelas-9/persamaan-kuadrat" element={<PersamaanKuadratK9Page />} />
      <Route path="/latihan-mandiri/kelas-9/fungsi-kuadrat" element={<FungsiKuadratK9Page />} />
      
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
