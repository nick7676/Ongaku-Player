import { StrictMode, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from './routeTree.gen'
import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import './Locales/i18n.ts'
import SplashScreen from "./Layouts/Loading/components/SplashScreen.tsx";


const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const Root = () => {
  const [loading, setLoading] = useState(true);
  const [backendOk, setBackendOk] = useState(false);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const ok = await invoke<boolean>("check_ytdlp_backend");
        if (!cancelled && ok) {
          setBackendOk(true);
          setLoading(false);
        }
      } catch {
        if (!cancelled) {
          setLoading(false);
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  if (loading || !backendOk) {
    return <SplashScreen />;
  }

  return <RouterProvider router={router} />;
};

const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <Root />
    </StrictMode>
  )
}