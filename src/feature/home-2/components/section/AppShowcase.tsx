import Image from "next/image";

export default function AppShowcase() {
  return (
    <section id="app-showcase" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            See It In Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Beautiful, intuitive interface designed for students and drivers
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Light Mode Screenshots */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4">Light Mode</h3>
            <div className="bg-background rounded-xl border border-border overflow-hidden shadow-lg">
              <Image
                src="/images/lightAllScreenScreenshot.png"
                alt="Light mode app screenshots showing all screens"
                // className="w-full h-auto"
                width={500}
                height={500}
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Clean, bright interface perfect for daytime use
            </p>
          </div>

          {/* Dark Mode Screenshots */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4">Dark Mode</h3>
            <div className="bg-background rounded-xl border border-border overflow-hidden shadow-lg">
              <Image
                src="/images/darkAllScreenScreenshot.png"
                alt="Dark mode app screenshots showing all screens"
                className="object-contain"
                width={500}
                height={500}
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Easy on the eyes for evening use
            </p>
          </div>
        </div>

        {/* Main Tracking View */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4 text-center">
            Real-Time Bus Tracking View
          </h3>
          <div className="bg-background relative  rounded-xl w-fit border border-border overflow-hidden shadow-lg max-w-2xl mx-auto">
            <Image
              src="/images/darkBusTrackingView.png"
              alt="Main bus tracking view with real-time location map"
              className="object-contain  mx-auto"
              width={400}
              height={400}
              quality={100}
              priority
            />
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Live map showing bus location, speed, and distance to your stop
          </p>
        </div>
      </div>
    </section>
  );
}
