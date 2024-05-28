// This file cannot be _app.mdx because the polyfills below gets lost in mdx translation.
// This file cannot be _app.tsx because it's not fully supported and some styles are not
// applied properly:
// - https://github.com/WATonomous/infra-config/issues/1932
// - https://github.com/shuding/nextra/issues/1632
// The solution is to import the tsx file into the mdx file.

// Custom polyfills not yet available in `next-core`:
// https://github.com/vercel/next.js/issues/58242
// https://nextjs.org/docs/architecture/supported-browsers#custom-polyfills
import 'core-js/features/array/to-reversed'
import 'core-js/features/array/to-spliced'
import 'core-js/features/array/to-sorted'

import type { AppProps, NextWebVitalsMetric } from 'next/app'
import { useReportWebVitals } from 'next/web-vitals'
import { GoogleAnalytics, event } from "nextjs-google-analytics";
import { websiteConfig } from '@/lib/data'

function reportWebVitals({ id, name, label, value }: NextWebVitalsMetric) {
    // Report web vitals to Google Analytics: https://nextjs.org/docs/advanced-features/measuring-performance
    event(name, {
        category: label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
        value: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
        label: id, // id unique to current page load
        nonInteraction: true, // avoids affecting bounce rate.
    });
}

export default function App({ Component, pageProps }: AppProps) {
    useReportWebVitals(reportWebVitals)

    return (
        <>
            <GoogleAnalytics trackPageViews gaMeasurementId={websiteConfig.ga_measurement_id} />
            <Component {...pageProps} />
        </>
    )
}
