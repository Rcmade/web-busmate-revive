export default function CTA() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Interested in BusTrack?
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          We&apos;re currently developing BusTrack to revolutionize college
          transportation. Get in touch to learn more or collaborate.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="	connect.busmate@gmail.com"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition text-lg"
          >
            Contact Us
          </a>

          <a
            href="#problem"
            className="px-8 py-4 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition text-lg"
          >
            Learn More
          </a>
        </div>

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
            <p className="text-muted-foreground">Weight System</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">
              Automatic
            </div>
            <p className="text-muted-foreground">Failover</p>
          </div>
        </div>
      </div>
    </section>
  );
}
