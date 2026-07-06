"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { site } from "@/lib/site";

/*
  Inline Cal.com scheduler, themed to the site's dark palette.

  Cal.com reads availability from Trent's connected Google Calendar, so Google
  stays the source of truth — but the slot picker renders here, on-page, in our
  theme instead of Google's white iframe. Brand accent is Corporate Red; white
  text on that fill passes AA (matching CtaButton).

  The event link lives in NEXT_PUBLIC_CAL_LINK (never hardcoded). When it isn't
  set, we render an accessible email/phone fallback instead of an empty embed.
*/
const CAL_NAMESPACE = "discovery-call";

export default function BookingEmbed() {
  useEffect(() => {
    if (!site.calLink) return;
    (async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          // Corporate Red accent in both schemes; the widget itself is dark.
          dark: { "cal-brand": "#c0222e" },
          light: { "cal-brand": "#c0222e" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  if (!site.calLink) {
    return (
      <div className="rounded-lg border border-ink-700 bg-ink-900 p-6 text-mist">
        <p className="text-offwhite">
          Online booking is being set up. In the meantime, reach out directly:
        </p>
        <p className="mt-3">
          <a
            href={`mailto:${site.email}`}
            className="font-semibold text-red-bright hover:text-offwhite"
          >
            {site.email}
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border border-ink-700 bg-ink-900">
      <Cal
        namespace={CAL_NAMESPACE}
        calLink={site.calLink}
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view", theme: "dark" }}
      />
    </div>
  );
}
