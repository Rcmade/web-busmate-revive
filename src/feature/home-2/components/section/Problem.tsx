export default function Problem() {
  return (
    <section id="problem" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">The Problem</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            College students struggle with uncertainty about bus arrival times
            and locations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-background rounded-xl border border-border hover:border-primary/50 transition">
            <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">⏰</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Uncertainty</h3>
            <p className="text-muted-foreground">
              Students don&apos;t know when the bus will arrive, leading to
              missed buses and frustration.
            </p>
          </div>

          <div className="p-8 bg-background rounded-xl border border-border hover:border-primary/50 transition">
            <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📍</span>
            </div>
            <h3 className="text-xl font-bold mb-3">No Location Data</h3>
            <p className="text-muted-foreground">
              Without real-time tracking, there&apos;s no way to know where
              buses are on their routes.
            </p>
          </div>

          <div className="p-8 bg-background rounded-xl border border-border hover:border-primary/50 transition">
            <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🚌</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Poor Planning</h3>
            <p className="text-muted-foreground">
              Students can&apos;t plan their day effectively without knowing bus
              schedules and locations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
