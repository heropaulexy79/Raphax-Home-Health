"use client";

import { useEffect } from "react";

export default function CalProvider() {
  useEffect(() => {
    (function (C: any, A: any, L: any) {
      let p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.q = cal.q || [];
            cal.t = Date.now();
            cal.loaded = true;
            let s = d.createElement("script");
            s.src = "https://embed.cal.com/embed/embed.js";
            d.head.appendChild(s);
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "Cal");

    if (window.Cal) {
      window.Cal("init", { origin: "https://cal.com" });
      window.Cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#4A90E2" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    }
  }, []);

  return null;
}

// Add types for Cal
declare global {
  interface Window {
    Cal: any;
  }
}
