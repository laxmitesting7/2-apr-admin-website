import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

type HeroProps = {
  metrics: ReadonlyArray<{
    label: string;
    value: string;
  }>;
};

export function Hero({ metrics }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-slate-950 pb-24 pt-14 text-white sm:pb-28">
      <div className="absolute inset-0 bg-hero-radial" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/50 to-transparent" />
      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl">
            <Badge>Premium workflow for polished videos</Badge>
            <h1 className="mt-6 max-w-3xl font-display text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Record once. Polish quickly. Publish everywhere.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              BrandName is the screen recording and editing SaaS for product demos, tutorials,
              walkthrough videos, onboarding videos, feature launch videos, support videos,
              internal training videos, and social-ready clips.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/auth/sign-up" variant="secondary">
                Start 14-day free trial
              </Button>
              <Button href="/portal" variant="ghost">
                Explore the portal
              </Button>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 shadow-panel"
                >
                  <p className="font-display text-2xl font-semibold text-white">{metric.value}</p>
                  <p className="mt-1 text-sm text-slate-400">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-2xl">
            <div className="absolute -left-10 top-10 hidden h-40 w-40 rounded-full bg-brand-500/20 blur-3xl lg:block" />
            <div className="absolute -right-8 bottom-6 hidden h-36 w-36 rounded-full bg-emerald-400/15 blur-3xl lg:block" />
            <div className="relative rounded-[32px] border border-white/10 bg-white/5 p-4 shadow-glow">
              <div className="rounded-[28px] border border-white/10 bg-slate-900/80 p-4">
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3">
                  <div>
                    <p className="text-sm font-semibold text-white">BrandName Studio</p>
                    <p className="text-xs text-slate-400">Capture, edit, caption, brand, export</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-rose-400" />
                    <span className="h-3 w-3 rounded-full bg-amber-400" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                  </div>
                </div>

                <div className="mt-4 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
                  <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-brand-950/80 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-white">Recorder</p>
                        <p className="text-xs text-slate-400">
                          Full screen, window, or area with webcam and audio
                        </p>
                      </div>
                      <Badge tone="dark">Live</Badge>
                    </div>
                    <div className="mt-5 rounded-[24px] border border-white/10 bg-slate-950/80 p-4">
                      <div className="grid gap-4 sm:grid-cols-[1fr_160px]">
                        <div className="rounded-[20px] border border-white/10 bg-slate-900 p-4">
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-white/80">Product walkthrough</p>
                            <span className="rounded-full bg-rose-500/15 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-rose-200">
                              REC
                            </span>
                          </div>
                          <div className="mt-4 h-52 rounded-[20px] bg-gradient-to-br from-brand-500/20 via-slate-900 to-emerald-400/10 p-4">
                            <div className="section-grid flex h-full items-end justify-between rounded-[18px] border border-white/10 bg-slate-950/70 p-4">
                              <div className="space-y-2">
                                <div className="h-3 w-28 rounded-full bg-white/15" />
                                <div className="h-3 w-20 rounded-full bg-white/10" />
                              </div>
                              <div className="rounded-[18px] border border-white/10 bg-slate-900/80 p-2">
                                <div className="h-24 w-20 rounded-[14px] bg-gradient-to-b from-slate-200/70 to-slate-400/20" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="rounded-[20px] border border-white/10 bg-slate-900 p-4">
                            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Capture</p>
                            <div className="mt-3 space-y-3 text-sm text-slate-300">
                              <p>Webcam overlay</p>
                              <p>System audio</p>
                              <p>Mic input</p>
                              <p>Cursor emphasis</p>
                            </div>
                          </div>
                          <div className="rounded-[20px] border border-white/10 bg-slate-900 p-4">
                            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Polish</p>
                            <div className="mt-3 space-y-3 text-sm text-slate-300">
                              <p>Auto zoom</p>
                              <p>Smart focus</p>
                              <p>Keyboard shortcuts</p>
                              <p>Reusable presets</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
                      <p className="text-sm font-semibold text-white">Scene refinement</p>
                      <p className="mt-1 text-sm text-slate-400">
                        Trim, cut, crop, add camera layouts, and refine scenes without leaving the
                        workflow.
                      </p>
                      <div className="mt-5 space-y-3">
                        {["Trim dead air", "Crop for social", "Switch layouts"].map((item) => (
                          <div
                            key={item}
                            className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3"
                          >
                            <span className="text-sm text-slate-200">{item}</span>
                            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-[28px] border border-brand-400/20 bg-gradient-to-br from-brand-500/15 to-emerald-400/10 p-5">
                      <p className="text-sm font-semibold text-white">Export everywhere</p>
                      <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                        {["4K video", "GIFs", "Shareable links", "Web-ready exports"].map((item) => (
                          <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
