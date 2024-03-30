import { defineTheme, directory, group, link } from '@neato/guider/theme';
import { Logo } from './components/Logo';
 
export default defineTheme({
  settings: {
    logo: () => <Logo />
  },
  directories: [
    directory("main", {
      sidebar: [
        link("Instances", "/instances", { icon: 'mdi:web' }),
        group("Self-Hosting", [
          link("Start self-hosting", "/self-hosting/hosting-intro"),
          link("Configure backend", "/self-hosting/use-backend"),
          link("PWA vs no-PWA", "/self-hosting/about-pwa"),
          link("Troubleshooting", "/self-hosting/troubleshooting"),
        ]),
        group("Proxy", [
          link("Introduction", "/proxy/introduction"),
          link("Deploy", "/proxy/deploy"),
          link("Configuration", "/proxy/configuration"),
          link("Changelog", "/proxy/changelog"),
        ]),
        group("Client", [
          link("Introduction", "/client/introduction"),
          link("Deploy", "/client/deploy"),
          link("TMDB API Key", "/client/tmdb"),
          link("Configuration", "/client/configuration"),
          link("Changelog", "/client/changelog"),
          link("Update guide", "/client/upgrade"),
        ]),
        group("Backend", [
          link("Introduction", "/backend/introduction"),
          link("Deploy", "/backend/deploy"),
          link("Configuration", "/backend/configuration"),
          link("Changelog", "/backend/changelog"),
          link("Update guide", "/backend/upgrade"),
        ]),
        group("Extra", [
          link("Streaming", "/extra/streaming"),
          link("Selfhost", "/extra/selfhost"),
        ])
      ]
    })
  ],
});
