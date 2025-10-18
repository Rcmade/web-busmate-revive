export default function WeightSystem() {
  return (
    <section id="how-it-works" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The Weight System
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            How we determine the most reliable location contributor
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="p-6 bg-background rounded-xl border border-border">
              <h3 className="text-xl font-bold mb-3">Initial Weight</h3>
              <p className="text-muted-foreground mb-4">
                Every driver and student starts with a weight value of{" "}
                <span className="font-semibold text-foreground">1.0</span>
              </p>
              <div className="bg-primary/5 p-3 rounded border border-primary/20">
                <code className="text-sm">Driver Weight: 1.0</code>
                <br />
                <code className="text-sm">Student Weight: 1.0</code>
              </div>
            </div>

            <div className="p-6 bg-background rounded-xl border border-border">
              <h3 className="text-xl font-bold mb-3">Weight Increase</h3>
              <p className="text-muted-foreground mb-4">
                When a user contributes location data successfully, their weight
                increases by{" "}
                <span className="font-semibold text-foreground">+0.01</span>
              </p>
              <div className="bg-green-500/5 p-3 rounded border border-green-500/20">
                <code className="text-sm text-green-600">
                  Day 1: 1.0 → 1.01 (contributed)
                </code>
              </div>
            </div>

            <div className="p-6 bg-background rounded-xl border border-border">
              <h3 className="text-xl font-bold mb-3">Weight Decrease</h3>
              <p className="text-muted-foreground mb-4">
                If a contributor turns off location or become unavailable, their
                weight decreases by{" "}
                <span className="font-semibold text-foreground">-0.01</span>
              </p>
              <div className="bg-red-500/5 p-3 rounded border border-red-500/20">
                <code className="text-sm text-red-600">
                  Day 2: 1.01 → 1.00 (turned off)
                </code>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-background rounded-xl border border-border">
              <h3 className="text-xl font-bold mb-3">Contributor Selection</h3>
              <p className="text-muted-foreground mb-4">
                The system automatically selects the contributor with the
                highest weight as the primary location source.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-primary/10 rounded">
                  <span>Driver A</span>
                  <span className="font-bold text-primary">
                    1.15 ⭐ Primary
                  </span>
                </div>
                <div className="flex justify-between items-center p-2 bg-secondary/50 rounded">
                  <span>Student A</span>
                  <span className="font-semibold">1.08 (Backup)</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-secondary/50 rounded">
                  <span>Student B</span>
                  <span className="font-semibold">0.95</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-background rounded-xl border border-border">
              <h3 className="text-xl font-bold mb-3">Automatic Failover</h3>
              <p className="text-muted-foreground mb-4">
                If the primary contributor goes offline, the backup
                automatically becomes the primary.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Seamless transition</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>No data loss</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Continuous tracking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
