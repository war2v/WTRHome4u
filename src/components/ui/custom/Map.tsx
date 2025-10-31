import { MapPin } from "lucide-react";
import { Card, CardContent } from "../card";

export function Map() {
  return (
    <section className=" py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-4">
          Serving Middle Tennessee
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          WTR Capital proudly manages residential and commercial properties
          throughout Middle Tennessee — including Rutherford, Davidson,
          Williamson, and surrounding counties.
        </p>

        <Card className=" flex justify-center rounded-2xl shadow-md border-2 border-gray-200 max-w-3xl mx-auto">
          <CardContent className=" flex justify-center">
            <iframe
              width="600"
              height="450"
              className="border-0"
              loading="lazy"
              src="https://www.google.com/maps/embed/v1/view?key=AIzaSyDg7NRViZNRgGjt5ZLg3rULX-54lehs_MM&center=35.8452,-86.3952&zoom=10"
            ></iframe>
          </CardContent>
        </Card>

        {/* Optional: Areas Served List */}
        <Card className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-gray-700">
          {[
            "Murfreesboro",
            "Nashville",
            "Franklin",
            "Brentwood",
            "Smyrna",
            "La Vergne",
            "Lebanon",
            "Spring Hill",
          ].map((city) => (
            <div key={city} className="flex items-center justify-center gap-2">
              <MapPin className="h-5 w-5 text-green-700" />
              <span>{city}</span>
            </div>
          ))}
        </Card>
      </div>
    </section>
  );
}
