import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, MapPin, Users } from "lucide-react";
import React from "react";

const SolutionSection = () => {
  return (
    <>
      <div className="text-center max-w-3xl mx-auto mt-32">
        <Badge
          variant="outline"
          className="mb-4 px-4 py-1.5 text-sm font-medium border-primary/20 bg-primary/5 text-primary"
        >
          Solution
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
          How Busmate Works
        </h2>
        <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
          Busmate uses advanced technology to provide real-time bus tracking and
          a seamless user experience.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-8">Technical Process</h3>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20"></div>
            <div className="space-y-12 relative">
              <div className="pl-16 relative">
                <div className="absolute left-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20">
                  1
                </div>
                <h4 className="font-bold text-lg mb-2">GPS Integration</h4>
                <p className="text-muted-foreground">
                  GPS module installed on the bus captures location data every
                  5-15 seconds.
                </p>
              </div>
              <div className="pl-16 relative">
                <div className="absolute left-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20">
                  2
                </div>
                <h4 className="font-bold text-lg mb-2">Data Transmission</h4>
                <p className="text-muted-foreground">
                  The app sends real-time data to a secure server.
                </p>
              </div>
              <div className="pl-16 relative">
                <div className="absolute left-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20">
                  3
                </div>
                <h4 className="font-bold text-lg mb-2">Server Processing</h4>
                <p className="text-muted-foreground">
                  Data is processed and prepared for distribution.
                </p>
              </div>
              <div className="pl-16 relative">
                <div className="absolute left-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20">
                  4
                </div>
                <h4 className="font-bold text-lg mb-2">User Display</h4>
                <p className="text-muted-foreground">
                  Server distributes live location to students&apos; devices.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8">User Journey</h3>
          <Card className="overflow-hidden border border-border/40 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
            <div className="bg-gradient-to-r from-primary/10 to-transparent p-6 border-b border-border/40">
              <h4 className="font-bold text-lg">Student Experience</h4>
            </div>
            <CardContent className="p-0">
              <div className="divide-y divide-border/40">
                <div className="p-6 flex gap-6">
                  <div className="bg-gradient-to-br from-primary/20 to-primary/5 h-14 w-14 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-2">Registration</h5>
                    <p className="text-muted-foreground">
                      Students sign up using their college email or by uploading
                      their college ID.
                    </p>
                  </div>
                </div>
                <div className="p-6 flex gap-6">
                  <div className="bg-gradient-to-br from-primary/20 to-primary/5 h-14 w-14 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-2">Admin Approval</h5>
                    <p className="text-muted-foreground">
                      Registration is verified and approved by college
                      administration.
                    </p>
                  </div>
                </div>
                <div className="p-6 flex gap-6">
                  <div className="bg-gradient-to-br from-primary/20 to-primary/5 h-14 w-14 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-2">Login & Access</h5>
                    <p className="text-muted-foreground">
                      Approved students log in and can view bus routes and
                      real-time location on a map.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default SolutionSection;
