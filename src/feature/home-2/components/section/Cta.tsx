export default function CTA() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Project Status & Vision
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          BusTrack is currently in active development, designed to revolutionize
          college transportation with intelligent real-time tracking.
        </p>

        <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-border">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">
              Real-Time
            </div>
            <p className="text-muted-foreground">Location Tracking</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">
              Intelligent
            </div>
            <p className="text-muted-foreground">Weight-Based System</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">
              Automatic
            </div>
            <p className="text-muted-foreground">Failover Mechanism</p>
          </div>
        </div>

        <div className="mt-12 p-6 bg-primary/5 rounded-xl border border-primary/20">
          <p className="text-lg font-semibold text-primary mb-2">
            Ready for Deployment
          </p>
          <p className="text-muted-foreground">
            Fully functional prototype with production-ready architecture
          </p>
        </div>
      </div>
    </section>
  );
}
