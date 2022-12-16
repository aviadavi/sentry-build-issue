import * as Sentry from "@sentry/browser"

const helloDiv = document.createElement("div");
helloDiv.innerHTML = "Hello from Javascript!";
      Sentry.init({
        dsn: 'https://111.ingest.sentry.io/1111111',
        tracesSampleRate: 0.1,
      });
document.body.append(helloDiv);