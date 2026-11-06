"use client";

import { useEffect } from "react";

interface AppfolioListingOptions {
  hostUrl: string;
  propertyGroup?: string;
  themeColor: string;
  height: string;
  width: string;
  defaultOrder: string;
}

interface AppfolioWindow extends Window {
  Appfolio?: {
    Listing: (options: AppfolioListingOptions) => void;
  };
}

const loadAppfolioScript = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    const existingScript = document.querySelector(
      'script[src="https://wtrcapitalllc.appfolio.com/javascripts/listing.js"]'
    );

    if (existingScript) {
      resolve();
      return;
    }

    const script = document.createElement("script");

    script.src =
      "https://wtrcapitalllc.appfolio.com/javascripts/listing.js";

    script.async = true;

    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load AppFolio"));

    document.body.appendChild(script);
  });
};


export default function AppfolioListings() {
  useEffect(() => {
    const initializeAppfolio = async () => {
      try {
        await loadAppfolioScript();

        const appfolioWindow = window as AppfolioWindow;

        appfolioWindow.Appfolio?.Listing({
          hostUrl: "wtrcapitalllc.appfolio.com",
          themeColor: "#1ba145",
          height: "1000px",
          width: "100%",
          defaultOrder: "date_posted",
        });
      } catch (error) {
        console.error("AppFolio initialization failed:", error);
      }
    };

    initializeAppfolio();
  }, []);

  return (
    <div className="w-full h-[1000px]">
      {/* AppFolio listings will be initialized here */}
    </div>
  );
}