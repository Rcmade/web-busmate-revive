export default function Features() {
  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Key Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need for reliable bus tracking
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-8 bg-background rounded-xl border border-border hover:border-primary/50 transition">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📍</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Real-Time Location</h3>
            <p className="text-muted-foreground">
              Get live bus location updates as they happen, with continuous
              monitoring of position and movement.
            </p>
          </div>

          <div className="p-8 bg-background rounded-xl border border-border hover:border-primary/50 transition">
            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🔄</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Automatic Failover</h3>
            <p className="text-muted-foreground">
              If one contributor goes offline, the system automatically switches
              to a backup contributor.
            </p>
          </div>

          <div className="p-8 bg-background rounded-xl border border-border hover:border-primary/50 transition">
            <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-bold mb-3">
              Speed & Distance Tracking
            </h3>
            <p className="text-muted-foreground">
              Monitor bus speed and distance traveled in real-time for better
              planning and insights.
            </p>
          </div>

          <div className="p-8 bg-background rounded-xl border border-border hover:border-primary/50 transition">
            <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Intelligent Routing</h3>
            <p className="text-muted-foreground">
              Smart system that identifies which bus you&apos;re tracking based
              on location proximity and patterns.
            </p>
          </div>

          <div className="p-8 bg-background rounded-xl border border-border hover:border-primary/50 transition">
            <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Privacy First</h3>
            <p className="text-muted-foreground">
              Users control their location sharing with granular permissions and
              background location settings.
            </p>
          </div>

          <div className="p-8 bg-background rounded-xl border border-border hover:border-primary/50 transition">
            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Instant Notifications</h3>
            <p className="text-muted-foreground">
              Receive instant alerts when your bus is approaching or when there
              are any location changes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
