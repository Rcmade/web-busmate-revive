export default function TechStack() {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technology Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built with modern, reliable technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Frontend</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>React Native for Android</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>Real-time location services</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>Background location tracking</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>Push notifications</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Backend</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>Location processing engine</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>Weight-based contributor system</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>Real-time data distribution</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>Automatic failover mechanism</span>
              </li>
            </ul>
          </div>
        </div>

        {/* <div className="mt-12 p-8 bg-background rounded-xl border border-border">
          <h3 className="text-xl font-bold mb-4">Deployment</h3>
          <div className="flex flex-wrap gap-4">
            <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg text-sm font-semibold text-primary">
              Google Play Store
            </div>
            <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg text-sm font-semibold text-primary">
              Production Ready
            </div>
            <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg text-sm font-semibold text-primary">
              100+ Active Users
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
