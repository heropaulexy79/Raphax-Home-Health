"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export default function CalProvider() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#4A90E2" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return null;
}
