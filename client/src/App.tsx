import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router as WouterRouter } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import BuenosAires from "./pages/BuenosAires";
import Bonito from "./pages/Bonito";

function AppRoutes() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/vale-do-capao"} component={Home} />
      <Route path={"/buenos-aires"} component={BuenosAires} />
      <Route path={"/bonito"} component={Bonito} />
      <Route component={NotFound} />
    </Switch>
  );
}

function resolveBasePath() {
  if (typeof window === "undefined") {
    return "/";
  }

  const fromEnv = import.meta.env.VITE_APP_BASE_PATH;
  if (fromEnv && typeof fromEnv === "string") {
    return fromEnv.endsWith("/") && fromEnv !== "/" ? fromEnv.slice(0, -1) : fromEnv || "/";
  }

  const hostname = window.location.hostname;
  const path = window.location.pathname;

  if (hostname.endsWith(".github.io")) {
    const segments = path.split("/").filter(Boolean);
    if (segments.length > 0) {
      return `/${segments[0]}`;
    }
  }

  return "/";
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  const basePath = resolveBasePath();

  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      >
        <TooltipProvider>
          <Toaster />
          <WouterRouter base={basePath}>
            <AppRoutes />
          </WouterRouter>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
