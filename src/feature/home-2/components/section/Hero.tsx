import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 bg-gradient-to-br from-background via-background to-secondary/5">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6 flex justify-center">
          <Image
            src="/images/logoTransparent.png"
            alt="BusTrack Logo"
            width={20}
            height={20}
          />
        </div>

        <div className="mb-6 inline-block">
          <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-primary text-sm font-medium">
              Live on Google Play Store
            </span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
          Real-Time Bus Tracking for Your College
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance max-w-2xl mx-auto">
          Never miss your bus again. Track your college bus location in
          real-time with our intelligent location-sharing system.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            // onClick={() => scrollToSection("problem")}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition"
          >
            Learn More
          </button>
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition"
          >
            Download App
          </a>
        </div>

        <div className="grid grid-cols-3 gap-4 md:gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary">
              100+
            </div>
            <div className="text-sm text-muted-foreground">Active Users</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary">
              Real-Time
            </div>
            <div className="text-sm text-muted-foreground">
              Location Tracking
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary">
              Smart
            </div>
            <div className="text-sm text-muted-foreground">Weight System</div>
          </div>
        </div>
      </div>
    </section>
  );
}
