export default function Glossary() {
  const terms = [
    {
      term: "Weight System",
      definition: "Reliability score that ranks location contributors",
    },
    {
      term: "Location Contributor",
      definition: "Any user (driver or student) sharing GPS location",
    },
    {
      term: "Primary Contributor",
      definition: "The highest-weighted contributor used for tracking",
    },
    {
      term: "Automatic Failover",
      definition: "Instant switch to backup if primary goes offline",
    },
    {
      term: "Weight Increase (+0.01)",
      definition: "Reward for consistently sharing location",
    },
    {
      term: "Weight Decrease (-0.01)",
      definition: "Penalty for turning off location sharing",
    },
    {
      term: "Real-Time Tracking",
      definition: "Live, continuous bus location updates",
    },
    {
      term: "GPS Location",
      definition: "Exact geographic coordinates (latitude & longitude)",
    },
    {
      term: "Intelligent Routing",
      definition: "System identifies which bus based on location patterns",
    },
    {
      term: "Background Location",
      definition: "App tracks location even when closed",
    },
  ];

  return (
    <section id="glossary" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Quick Reference
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Key terms explained in one sentence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {terms.map((item, index) => (
            <div
              key={index}
              className="p-4 bg-background rounded-lg border border-border hover:border-primary/50 transition"
            >
              <h3 className="font-bold text-primary mb-1">{item.term}</h3>
              <p className="text-sm text-muted-foreground">{item.definition}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
