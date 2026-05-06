import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react"

// ⏸️ WORKSHOP STEP 8: Add Error Boundary
// TODO: Import ErrorBoundary component

import Header from "./components/Header.jsx";
import Spinner from "./components/Spinner.jsx";
import { ApiKeyProvider } from "./context/ApiKeyContext.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

// Regular imports
// import GeneratorPage from "./pages/GeneratorPage.jsx";
// import GalleryPage from "./pages/GalleryPage.jsx";

const GeneratorPage = lazy(() => import('./pages/GeneratorPage.jsx'))
const GalleryPage = lazy(() => import('./pages/GalleryPage.jsx'))

export default function App() {
  return (
    <ErrorBoundary>
      <ApiKeyProvider>
        <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 transition-colors">
          <Header />
          <main className="flex-1 container mx-auto p-4 lg:p-8">
            {/* TODO: Wrap content in Suspense (Step 7) */}
            {/* TODO: Add Routes with Route elements for "/" and "/gallery" */}
            <Suspense fallback={<Spinner label="Loading page..." />}>
              <Routes>
                <Route path="/" element={<GeneratorPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
              </Routes>
            </Suspense>
          </main>
        </div>
      </ApiKeyProvider>
    </ErrorBoundary>
  );
}
