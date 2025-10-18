import { ArrowDown, CheckCircle, AlertCircle, Zap } from "lucide-react";
export default function HowWeightWorks() {
  return (
    <section id="how-weight-works" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How the Weight System Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Simple visual flow of how we choose the best location
          </p>
        </div>

        {/* Step 1: Collect Locations */}
        <div className="mb-12">
          <div className="bg-background rounded-xl p-8 border-2 border-primary/30">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                1
              </div>
              <h3 className="text-2xl font-bold">Collect Locations</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Multiple users (drivers & students) share their GPS location
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-secondary/50 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">👨‍✈️</div>
                <p className="font-semibold">Driver A</p>
                <p className="text-sm text-muted-foreground">Weight: 1.15</p>
              </div>
              <div className="bg-secondary/50 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">👨‍🎓</div>
                <p className="font-semibold">Student A</p>
                <p className="text-sm text-muted-foreground">Weight: 1.08</p>
              </div>
              <div className="bg-secondary/50 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">👨‍🎓</div>
                <p className="font-semibold">Student B</p>
                <p className="text-sm text-muted-foreground">Weight: 0.95</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center my-4">
            <ArrowDown className="w-8 h-8 text-primary" />
          </div>
        </div>

        {/* Step 2: Compare Weights */}
        <div className="mb-12">
          <div className="bg-background rounded-xl p-8 border-2 border-primary/30">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                2
              </div>
              <h3 className="text-2xl font-bold">Compare Weights</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              System ranks all contributors by reliability score
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-primary/10 rounded-lg p-4 border-l-4 border-primary">
                <span className="font-semibold">Driver A</span>
                <div className="flex items-center gap-2">
                  <div className="w-32 h-2 bg-primary rounded-full"></div>
                  <span className="font-bold text-primary">1.15</span>
                </div>
              </div>
              <div className="flex items-center justify-between bg-secondary/50 rounded-lg p-4">
                <span className="font-semibold">Student A</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-secondary rounded-full"></div>
                  <span className="font-semibold">1.08</span>
                </div>
              </div>
              <div className="flex items-center justify-between bg-secondary/50 rounded-lg p-4">
                <span className="font-semibold">Student</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-2 bg-secondary rounded-full"></div>
                  <span className="font-semibold">0.95</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center my-4">
            <ArrowDown className="w-8 h-8 text-primary" />
          </div>
        </div>

        {/* Step 3: Select Primary */}
        <div className="mb-12">
          <div className="bg-background rounded-xl p-8 border-2 border-primary/30">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                3
              </div>
              <h3 className="text-2xl font-bold">Select Primary Contributor</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Highest weight becomes the main location source
            </p>
            <div className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg p-6 border-2 border-primary/50">
              <div className="flex items-center justify-center gap-3">
                <CheckCircle className="w-8 h-8 text-primary" />
                <span className="text-xl font-bold">
                  Driver A (1.15) is PRIMARY
                </span>
              </div>
              <p className="text-center text-muted-foreground mt-3">
                Their location is shown on the map
              </p>
            </div>
          </div>
          <div className="flex justify-center my-4">
            <ArrowDown className="w-8 h-8 text-primary" />
          </div>
        </div>

        {/* Step 4: Automatic Failover */}
        <div className="mb-12">
          <div className="bg-background rounded-xl p-8 border-2 border-primary/30">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                4
              </div>
              <h3 className="text-2xl font-bold">Automatic Failover</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              If primary goes offline, instantly switch to backup
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/30">
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <span className="font-semibold text-red-600">
                    Driver A Offline
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Lost internet connection
                </p>
              </div>
              <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/30">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-green-600">
                    Switch to Student A
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Instant automatic switch (no delay!)
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center my-4">
            <ArrowDown className="w-8 h-8 text-primary" />
          </div>
        </div>

        {/* Step 5: Weight Updates */}
        <div>
          <div className="bg-background rounded-xl p-8 border-2 border-primary/30">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                5
              </div>
              <h3 className="text-2xl font-bold">Weight Updates</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Weights change based on reliability
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/30">
                <p className="font-semibold text-green-600 mb-2">
                  ✓ Shares Location
                </p>
                <p className="text-sm text-muted-foreground">
                  Weight increases by +0.01
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Rewards consistent contributors
                </p>
              </div>
              <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/30">
                <p className="font-semibold text-red-600 mb-2">
                  ✗ Turns Off Location
                </p>
                <p className="text-sm text-muted-foreground">
                  Weight decreases by -0.01
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Penalizes unreliable contributors
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
