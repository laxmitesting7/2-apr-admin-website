export const marketingNavLinks = [
  { label: "Problem", href: "#problem" },
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Use cases", href: "#use-cases" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" }
] as const;

export const heroMetrics = [
  { value: "4K + GIF", label: "Export options for product and social teams" },
  { value: "1 workflow", label: "Capture, edit, caption, brand, and share" },
  { value: "14 days", label: "Free trial before committing to paid SaaS plans" }
] as const;

export const socialProofLogos = ["NOVA", "PILOT", "PULSE", "STACKED", "KINETIC", "LATTICE"] as const;

export const problemItems = [
  "Recording in one tool, editing in another, and captions in a third slows launch velocity.",
  "Teams lose consistency when every video uses different cursor treatment, layouts, and export settings.",
  "Raw takes need too much cleanup because focus, zoom, clicks, and keyboard cues are added too late.",
  "Publishing across docs, support, social, and onboarding means recreating the same content for different formats."
] as const;

export const featureCards = [
  {
    title: "Flexible capture",
    description:
      "Record full screen, a specific window, or a focused area with webcam, microphone, and system audio in one pass.",
    icon: "record" as const
  },
  {
    title: "Motion intelligence",
    description:
      "Apply auto zoom, smart focus, smooth cursor movement, emphasized clicks, and keyboard shortcuts that make actions easier to follow.",
    icon: "focus" as const
  },
  {
    title: "Fast editing",
    description:
      "Trim, cut, crop, and refine scenes quickly so recordings stay concise without moving into a heavyweight editor.",
    icon: "edit" as const
  },
  {
    title: "Camera presentation",
    description:
      "Use webcam overlays and camera layouts that help demos, explainers, and internal training feel more human.",
    icon: "webcam" as const
  },
  {
    title: "Caption styling",
    description:
      "Generate and style captions to improve accessibility, retention, and brand consistency across every export.",
    icon: "captions" as const
  },
  {
    title: "Export and share",
    description:
      "Export in 4K, generate GIFs, create web-ready and social-ready outputs, and publish shareable links without extra tooling.",
    icon: "export" as const
  }
] as const;

export const howItWorksSteps = [
  {
    title: "Capture the story",
    description:
      "Choose full screen, window, or area recording, layer in webcam, microphone, and system audio, then record the walkthrough once."
  },
  {
    title: "Polish the delivery",
    description:
      "Use auto zoom, smart focus, cursor smoothing, click emphasis, keyboard shortcut callouts, scene trims, and layout changes to clean up the take."
  },
  {
    title: "Publish everywhere",
    description:
      "Apply reusable presets, style captions, export the right format for the channel, and send the final asset as a shareable link or ready-to-post file."
  }
] as const;

export const deepFeatureGroups = [
  {
    title: "Presentation control",
    description:
      "Guide attention precisely so viewers never lose the point of the walkthrough or tutorial.",
    bullets: [
      "Auto zoom on key interactions",
      "Smart focus for the active area",
      "Smooth cursor movement and emphasized clicks"
    ]
  },
  {
    title: "Editing without drag",
    description:
      "Tighten the message quickly instead of sending recordings through a heavy post-production process.",
    bullets: [
      "Trim pauses and remove mistakes",
      "Cut and crop scenes for shorter outputs",
      "Switch camera layouts per moment"
    ]
  },
  {
    title: "Distribution-ready exports",
    description:
      "Build once and produce the right output for docs, social, support, onboarding, and launch campaigns.",
    bullets: [
      "4K exports for polished product assets",
      "GIF output for lightweight embeds",
      "Web-ready and social-ready presets"
    ]
  }
] as const;

export const useCaseItems = [
  {
    title: "Product demos",
    description:
      "Launch features with focused walkthroughs that highlight value fast and keep presentation quality high."
  },
  {
    title: "Tutorials and onboarding",
    description:
      "Teach workflows clearly with keyboard prompts, smart zoom, captions, and branded layouts."
  },
  {
    title: "Support and training",
    description:
      "Replace repeated explanations with reusable videos for customers, new hires, and internal enablement."
  },
  {
    title: "Social-ready clips",
    description:
      "Turn longer recordings into concise, captioned clips formatted for social channels and web embeds."
  }
] as const;

export const comparisonRows = [
  {
    label: "Capture options",
    brandname: "Full screen, window, or area with webcam and audio",
    alternatives: "Usually split across recorder, audio routing, and webcam tools"
  },
  {
    label: "Motion polish",
    brandname: "Built-in smart focus, auto zoom, click emphasis, keyboard display",
    alternatives: "Often manual or unavailable without extra plugins"
  },
  {
    label: "Brand consistency",
    brandname: "Reusable presets for layouts, captions, and exports",
    alternatives: "Recreated manually for every asset"
  },
  {
    label: "Output formats",
    brandname: "4K, GIF, web-ready, social-ready, and shareable links",
    alternatives: "Multiple export steps and extra conversion tools"
  }
] as const;

export const presetItems = [
  {
    title: "Brand-safe motion",
    description: "Lock cursor treatment, zoom behavior, and click emphasis to a repeatable standard."
  },
  {
    title: "Camera systems",
    description: "Save webcam overlay positions and camera layouts for demos, tutorials, and training."
  },
  {
    title: "Caption themes",
    description: "Reuse caption styles across support clips, onboarding videos, and social-ready exports."
  },
  {
    title: "Channel exports",
    description: "Create web-ready and social-ready export presets so the right file is one click away."
  }
] as const;

export const captionItems = [
  "Generate captions as part of the edit flow instead of after export",
  "Style captions to match your product presentation and brand system",
  "Improve accessibility for muted autoplay, support content, and internal training"
] as const;

export const pricingPlans = [
  {
    slug: "starter",
    name: "Starter",
    price: "$24",
    yearlyPrice: "$19",
    description: "For solo makers creating polished demos, explainers, and support videos each month.",
    features: [
      "Screen, window, and area recording",
      "Webcam, microphone, and system audio",
      "Basic presets and shareable links"
    ]
  },
  {
    slug: "pro",
    name: "Pro",
    price: "$49",
    yearlyPrice: "$39",
    description:
      "For teams that need the full BrandName workflow with reusable styling and advanced export control.",
    features: [
      "Auto zoom, smart focus, cursor polish",
      "Caption styling and branded presets",
      "4K, GIF, web-ready, and social-ready exports"
    ],
    highlight: true
  },
  {
    slug: "team",
    name: "Team",
    price: "$99",
    yearlyPrice: "$79",
    description:
      "For larger teams managing shared standards, subscriptions, billing visibility, and collaborative rollout.",
    features: [
      "Shared brand presets and admin controls",
      "Priority support and billing management",
      "Team onboarding and advanced access controls"
    ]
  }
] as const;

export const faqItems = [
  {
    question: "Is BrandName only for product marketing videos?",
    answer:
      "No. BrandName is built for product demos, tutorials, walkthrough videos, onboarding videos, feature launch videos, support videos, internal training videos, and social-ready clips."
  },
  {
    question: "Can I record webcam, microphone, and system audio together?",
    answer:
      "Yes. The product supports full screen, window, or area recording alongside webcam, microphone, and system audio so the recording setup stays simple."
  },
  {
    question: "Does the paid SaaS include billing management and invoices?",
    answer:
      "Yes. Customers can access subscription management, upgrades, downgrades, cancellations, payment methods, invoices, and billing history through the portal."
  },
  {
    question: "Can teams keep a consistent look across recordings?",
    answer:
      "Yes. Reusable presets help maintain brand consistency across camera layouts, caption styling, motion treatment, and export settings."
  }
] as const;
