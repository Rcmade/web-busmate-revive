export default function Solution() {
  return (
    <section id="solution" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Solution</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A smart, real-time bus tracking system that uses intelligent
            location sharing
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">How BusTrack Works</h3>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location Sharing</h4>
                  <p className="text-muted-foreground">
                    Drivers and students share their location with the server
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Smart Processing</h4>
                  <p className="text-muted-foreground">
                    Our system processes location data and identifies the bus
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Real-Time Distribution</h4>
                  <p className="text-muted-foreground">
                    All students receive live bus location updates instantly
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                  4
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Continuous Monitoring</h4>
                  <p className="text-muted-foreground">
                    Track speed, distance, and location continuously
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 border border-primary/20">
            <div className="space-y-6">
              <div className="p-4 bg-background rounded-lg border border-border">
                <div className="text-sm font-semibold text-primary mb-2">
                  Key Feature
                </div>
                <p className="font-semibold">Intelligent Weight System</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Each contributor has a weight value that determines how much
                  we trust their location data. Higher weight = more reliable.
                </p>
              </div>
              <div className="p-4 bg-background rounded-lg border border-border">
                <div className="text-sm font-semibold text-primary mb-2">
                  Backup System
                </div>
                <p className="font-semibold">Redundancy Built-In</p>
                <p className="text-sm text-muted-foreground mt-2">
                  If the primary contributor goes offline, backup contributors
                  automatically take over seamlessly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
