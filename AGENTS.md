<!-- AGENT-MEMORY:BEGIN -->
## Application architecture
- Homepage is a short story of previews; each topic has its own route page (src/routes/*.tsx rendering InnerPage) so details stay off the homepage and pages get their own metadata.
- Store bilingual content, demo flags, verification flags, and CDN image pointers in a central browser-safe data module so client content can replace samples without changing layouts.
- Use shared accessible controls, Embla for swipe carousels, and Radix dialogs for detail views; interactions remain client-only without persistence or backend services.
<!-- AGENT-MEMORY:END -->
