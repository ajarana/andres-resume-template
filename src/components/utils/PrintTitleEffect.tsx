"use client";

import { useEffect } from "react";
import { DOCUMENT_TITLES } from "@/constants/documentTitles";

const PrintTitleEffect = () => {
  useEffect(() => {
    const onBeforePrint = () => {
      // This behavior will only work properly in Chromium browsers. It does not work in Firefox and is possibly related to this bug: https://bugzilla.mozilla.org/show_bug.cgi?id=1663290.
      document.title = DOCUMENT_TITLES.PDF;
    };

    const onAfterPrint = () => {
      document.title = DOCUMENT_TITLES.WEB;
    };

    window.addEventListener("beforeprint", onBeforePrint);
    window.addEventListener("afterprint", onAfterPrint);

    return () => {
      window.removeEventListener("beforeprint", onBeforePrint);
      window.removeEventListener("afterprint", onAfterPrint);
    };
  }, []);

  return null;
};

export default PrintTitleEffect;
