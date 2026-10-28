/** Minnesota cities served by Levitt Chiropractic Center.
 *  Each entry powers a programmatic page at /areas-we-serve/[citySlug]
 *  and a service-specific page at /areas-we-serve/[citySlug]/[serviceSlug].
 *
 *  `distanceMi` is approximate driving distance from 6200 Excelsior Blvd, Suite 201, Saint Louis Park, MN 55416,
 *  Saint Louis Park, MN. `neighbors` are 3-5 cities most commonly grouped with
 *  the entry for local-relevance copy.
 */

export type ServedCity = {
  slug: string;
  name: string;
  county: string;
  distanceMi: number;
  population: number;
  zips: string[];
  neighbors: string[];
  landmark: string;
  region: "West Metro" | "Minneapolis" | "South Metro" | "North Metro" | "East Metro" | "Saint Paul";
};

export const servedCities: ServedCity[] = [
  // Home city
  { slug: "saint-louis-park", name: "Saint Louis Park", county: "Hennepin", distanceMi: 0, population: 50000, zips: ["55416", "55426", "55436"], neighbors: ["Edina", "Hopkins", "Minneapolis"], landmark: "central Saint Louis Park", region: "West Metro" },

  // Minneapolis core
  { slug: "minneapolis", name: "Minneapolis", county: "Hennepin", distanceMi: 5, population: 425000, zips: ["55401", "55402", "55403", "55404", "55405", "55408", "55409", "55410", "55411", "55416", "55418"], neighbors: ["Saint Louis Park", "Edina", "Saint Paul"], landmark: "the Chain of Lakes", region: "Minneapolis" },
  { slug: "saint-paul", name: "Saint Paul", county: "Ramsey", distanceMi: 12, population: 312000, zips: ["55101", "55102", "55103", "55104", "55105", "55106", "55107", "55108", "55116"], neighbors: ["Minneapolis", "Roseville", "Maplewood"], landmark: "the Mississippi River", region: "Saint Paul" },

  // West Metro
  { slug: "edina", name: "Edina", county: "Hennepin", distanceMi: 3, population: 53000, zips: ["55410", "55416", "55435", "55436", "55439"], neighbors: ["Saint Louis Park", "Minneapolis", "Bloomington"], landmark: "50th & France", region: "West Metro" },
  { slug: "hopkins", name: "Hopkins", county: "Hennepin", distanceMi: 4, population: 19000, zips: ["55305", "55343"], neighbors: ["Saint Louis Park", "Minnetonka", "Edina"], landmark: "the Mainstreet shopping district", region: "West Metro" },
  { slug: "minnetonka", name: "Minnetonka", county: "Hennepin", distanceMi: 7, population: 53000, zips: ["55305", "55343", "55345", "55391"], neighbors: ["Hopkins", "Plymouth", "Wayzata"], landmark: "Ridgedale Center", region: "West Metro" },
  { slug: "plymouth", name: "Plymouth", county: "Hennepin", distanceMi: 9, population: 80000, zips: ["55441", "55442", "55446", "55447"], neighbors: ["Minnetonka", "Maple Grove", "New Hope"], landmark: "the Plymouth Creek Center", region: "West Metro" },
  { slug: "wayzata", name: "Wayzata", county: "Hennepin", distanceMi: 11, population: 4400, zips: ["55391"], neighbors: ["Minnetonka", "Orono", "Plymouth"], landmark: "Lake Minnetonka", region: "West Metro" },
  { slug: "golden-valley", name: "Golden Valley", county: "Hennepin", distanceMi: 4, population: 22000, zips: ["55416", "55422", "55426", "55427"], neighbors: ["Saint Louis Park", "Minneapolis", "Crystal"], landmark: "Theodore Wirth Park", region: "West Metro" },
  { slug: "crystal", name: "Crystal", county: "Hennepin", distanceMi: 8, population: 23000, zips: ["55427", "55428", "55429"], neighbors: ["New Hope", "Robbinsdale", "Golden Valley"], landmark: "Becker Park", region: "West Metro" },
  { slug: "new-hope", name: "New Hope", county: "Hennepin", distanceMi: 9, population: 21000, zips: ["55427", "55428"], neighbors: ["Crystal", "Plymouth", "Brooklyn Park"], landmark: "Northwood Park", region: "West Metro" },
  { slug: "robbinsdale", name: "Robbinsdale", county: "Hennepin", distanceMi: 7, population: 14500, zips: ["55422"], neighbors: ["Crystal", "Golden Valley", "Brooklyn Center"], landmark: "Whiz Bang Days festival", region: "West Metro" },
  { slug: "richfield", name: "Richfield", county: "Hennepin", distanceMi: 6, population: 36500, zips: ["55423"], neighbors: ["Edina", "Bloomington", "Minneapolis"], landmark: "Wood Lake Nature Center", region: "West Metro" },
  { slug: "excelsior", name: "Excelsior", county: "Hennepin", distanceMi: 13, population: 2500, zips: ["55331"], neighbors: ["Minnetonka", "Wayzata", "Chanhassen"], landmark: "the Lake Minnetonka shoreline", region: "West Metro" },
  { slug: "chanhassen", name: "Chanhassen", county: "Carver", distanceMi: 14, population: 27000, zips: ["55317", "55331"], neighbors: ["Eden Prairie", "Excelsior", "Chaska"], landmark: "the Minnesota Landscape Arboretum", region: "West Metro" },
  { slug: "chaska", name: "Chaska", county: "Carver", distanceMi: 17, population: 27500, zips: ["55318"], neighbors: ["Chanhassen", "Carver", "Eden Prairie"], landmark: "Hazeltine National Golf Club", region: "West Metro" },
  { slug: "eden-prairie", name: "Eden Prairie", county: "Hennepin", distanceMi: 10, population: 64000, zips: ["55344", "55346", "55347"], neighbors: ["Minnetonka", "Chanhassen", "Bloomington"], landmark: "Eden Prairie Center", region: "West Metro" },
  { slug: "orono", name: "Orono", county: "Hennepin", distanceMi: 14, population: 8200, zips: ["55356", "55364", "55391"], neighbors: ["Wayzata", "Long Lake", "Mound"], landmark: "Big Island on Lake Minnetonka", region: "West Metro" },
  { slug: "long-lake", name: "Long Lake", county: "Hennepin", distanceMi: 14, population: 1800, zips: ["55356"], neighbors: ["Orono", "Medina", "Wayzata"], landmark: "Long Lake Bays", region: "West Metro" },
  { slug: "medina", name: "Medina", county: "Hennepin", distanceMi: 17, population: 7000, zips: ["55340", "55356", "55357", "55359"], neighbors: ["Plymouth", "Long Lake", "Maple Plain"], landmark: "Hamel rodeo grounds", region: "West Metro" },
  { slug: "maple-plain", name: "Maple Plain", county: "Hennepin", distanceMi: 19, population: 1800, zips: ["55359"], neighbors: ["Medina", "Independence", "Orono"], landmark: "Baker Park Reserve", region: "West Metro" },
  { slug: "mound", name: "Mound", county: "Hennepin", distanceMi: 17, population: 9500, zips: ["55364"], neighbors: ["Orono", "Spring Park", "Minnetrista"], landmark: "the West Lake Minnetonka shoreline", region: "West Metro" },
  { slug: "spring-park", name: "Spring Park", county: "Hennepin", distanceMi: 16, population: 1700, zips: ["55384"], neighbors: ["Mound", "Orono", "Minnetonka Beach"], landmark: "Lord Fletcher's on the Lake", region: "West Metro" },
  { slug: "deephaven", name: "Deephaven", county: "Hennepin", distanceMi: 12, population: 4000, zips: ["55331", "55391"], neighbors: ["Excelsior", "Wayzata", "Greenwood"], landmark: "St. Alban's Bay", region: "West Metro" },
  { slug: "shorewood", name: "Shorewood", county: "Hennepin", distanceMi: 13, population: 8000, zips: ["55331"], neighbors: ["Excelsior", "Chanhassen", "Deephaven"], landmark: "the Excelsior Bay shoreline", region: "West Metro" },
  { slug: "tonka-bay", name: "Tonka Bay", county: "Hennepin", distanceMi: 13, population: 1500, zips: ["55331"], neighbors: ["Excelsior", "Shorewood", "Greenwood"], landmark: "the Lower Lake South", region: "West Metro" },
  { slug: "minnetonka-beach", name: "Minnetonka Beach", county: "Hennepin", distanceMi: 14, population: 600, zips: ["55361"], neighbors: ["Orono", "Spring Park", "Wayzata"], landmark: "the historic Lafayette Club", region: "West Metro" },
  { slug: "victoria", name: "Victoria", county: "Carver", distanceMi: 17, population: 9700, zips: ["55386"], neighbors: ["Chanhassen", "Chaska", "Waconia"], landmark: "Carver Park Reserve", region: "West Metro" },
  { slug: "waconia", name: "Waconia", county: "Carver", distanceMi: 23, population: 13000, zips: ["55387"], neighbors: ["Victoria", "Chaska", "Chanhassen"], landmark: "Lake Waconia", region: "West Metro" },

  // South Metro
  { slug: "bloomington", name: "Bloomington", county: "Hennepin", distanceMi: 7, population: 89000, zips: ["55420", "55425", "55431", "55435", "55437", "55438"], neighbors: ["Edina", "Richfield", "Eden Prairie"], landmark: "the Mall of America", region: "South Metro" },
  { slug: "burnsville", name: "Burnsville", county: "Dakota", distanceMi: 14, population: 64000, zips: ["55306", "55337"], neighbors: ["Bloomington", "Eagan", "Apple Valley"], landmark: "Burnsville Center", region: "South Metro" },
  { slug: "eagan", name: "Eagan", county: "Dakota", distanceMi: 14, population: 68000, zips: ["55121", "55122", "55123"], neighbors: ["Burnsville", "Mendota Heights", "Apple Valley"], landmark: "the Twin Cities Premium Outlets", region: "South Metro" },
  { slug: "apple-valley", name: "Apple Valley", county: "Dakota", distanceMi: 17, population: 56000, zips: ["55124"], neighbors: ["Burnsville", "Eagan", "Lakeville"], landmark: "the Minnesota Zoo", region: "South Metro" },
  { slug: "lakeville", name: "Lakeville", county: "Dakota", distanceMi: 22, population: 73000, zips: ["55044"], neighbors: ["Apple Valley", "Burnsville", "Farmington"], landmark: "Lake Marion", region: "South Metro" },
  { slug: "savage", name: "Savage", county: "Scott", distanceMi: 14, population: 32500, zips: ["55378"], neighbors: ["Burnsville", "Prior Lake", "Shakopee"], landmark: "Hidden Valley Park", region: "South Metro" },
  { slug: "prior-lake", name: "Prior Lake", county: "Scott", distanceMi: 17, population: 28000, zips: ["55372"], neighbors: ["Savage", "Shakopee", "Lakeville"], landmark: "Mystic Lake Casino", region: "South Metro" },
  { slug: "shakopee", name: "Shakopee", county: "Scott", distanceMi: 17, population: 43000, zips: ["55379"], neighbors: ["Prior Lake", "Savage", "Chaska"], landmark: "Valleyfair", region: "South Metro" },
  { slug: "farmington", name: "Farmington", county: "Dakota", distanceMi: 25, population: 24000, zips: ["55024"], neighbors: ["Lakeville", "Apple Valley", "Rosemount"], landmark: "downtown Farmington", region: "South Metro" },
  { slug: "rosemount", name: "Rosemount", county: "Dakota", distanceMi: 22, population: 25000, zips: ["55068"], neighbors: ["Apple Valley", "Eagan", "Farmington"], landmark: "Rosemount High School", region: "South Metro" },
  { slug: "inver-grove-heights", name: "Inver Grove Heights", county: "Dakota", distanceMi: 18, population: 35500, zips: ["55076", "55077"], neighbors: ["Eagan", "South Saint Paul", "Mendota Heights"], landmark: "Inver Hills Community College", region: "South Metro" },
  { slug: "mendota-heights", name: "Mendota Heights", county: "Dakota", distanceMi: 14, population: 11500, zips: ["55118", "55120"], neighbors: ["Eagan", "West Saint Paul", "Lilydale"], landmark: "Fort Snelling State Park", region: "South Metro" },
  { slug: "west-saint-paul", name: "West Saint Paul", county: "Dakota", distanceMi: 13, population: 20000, zips: ["55118"], neighbors: ["Saint Paul", "Mendota Heights", "South Saint Paul"], landmark: "Thompson Park", region: "South Metro" },
  { slug: "south-saint-paul", name: "South Saint Paul", county: "Dakota", distanceMi: 14, population: 20500, zips: ["55075"], neighbors: ["West Saint Paul", "Inver Grove Heights", "Newport"], landmark: "Kaposia Landing", region: "South Metro" },

  // North Metro
  { slug: "maple-grove", name: "Maple Grove", county: "Hennepin", distanceMi: 13, population: 70000, zips: ["55311", "55369"], neighbors: ["Plymouth", "Brooklyn Park", "Osseo"], landmark: "the Shoppes at Arbor Lakes", region: "North Metro" },
  { slug: "brooklyn-park", name: "Brooklyn Park", county: "Hennepin", distanceMi: 13, population: 86500, zips: ["55428", "55443", "55444", "55445"], neighbors: ["Maple Grove", "Brooklyn Center", "Champlin"], landmark: "the Eidem Homestead", region: "North Metro" },
  { slug: "brooklyn-center", name: "Brooklyn Center", county: "Hennepin", distanceMi: 9, population: 33000, zips: ["55429", "55430"], neighbors: ["Brooklyn Park", "Robbinsdale", "Minneapolis"], landmark: "the Mississippi River Heritage Trail", region: "North Metro" },
  { slug: "champlin", name: "Champlin", county: "Hennepin", distanceMi: 18, population: 25000, zips: ["55316"], neighbors: ["Brooklyn Park", "Anoka", "Dayton"], landmark: "Mississippi Point Park", region: "North Metro" },
  { slug: "osseo", name: "Osseo", county: "Hennepin", distanceMi: 14, population: 2700, zips: ["55369"], neighbors: ["Maple Grove", "Brooklyn Park", "Plymouth"], landmark: "downtown Osseo", region: "North Metro" },
  { slug: "anoka", name: "Anoka", county: "Anoka", distanceMi: 19, population: 17600, zips: ["55303"], neighbors: ["Coon Rapids", "Champlin", "Ramsey"], landmark: "the Halloween Capital downtown", region: "North Metro" },
  { slug: "coon-rapids", name: "Coon Rapids", county: "Anoka", distanceMi: 18, population: 64000, zips: ["55433", "55448"], neighbors: ["Anoka", "Blaine", "Andover"], landmark: "Coon Rapids Dam Regional Park", region: "North Metro" },
  { slug: "blaine", name: "Blaine", county: "Anoka", distanceMi: 18, population: 73000, zips: ["55434", "55449"], neighbors: ["Coon Rapids", "Spring Lake Park", "Lino Lakes"], landmark: "the National Sports Center", region: "North Metro" },
  { slug: "andover", name: "Andover", county: "Anoka", distanceMi: 21, population: 33000, zips: ["55304"], neighbors: ["Coon Rapids", "Ham Lake", "Anoka"], landmark: "Bunker Hills Regional Park", region: "North Metro" },
  { slug: "ham-lake", name: "Ham Lake", county: "Anoka", distanceMi: 22, population: 16500, zips: ["55304"], neighbors: ["Andover", "Blaine", "Lino Lakes"], landmark: "Coon Lake", region: "North Metro" },
  { slug: "lino-lakes", name: "Lino Lakes", county: "Anoka", distanceMi: 21, population: 22000, zips: ["55014", "55038"], neighbors: ["Blaine", "Centerville", "Circle Pines"], landmark: "Rice Creek Chain of Lakes", region: "North Metro" },
  { slug: "centerville", name: "Centerville", county: "Anoka", distanceMi: 22, population: 4400, zips: ["55038"], neighbors: ["Lino Lakes", "Hugo", "Forest Lake"], landmark: "Peltier Lake", region: "North Metro" },
  { slug: "spring-lake-park", name: "Spring Lake Park", county: "Anoka", distanceMi: 15, population: 7000, zips: ["55432"], neighbors: ["Blaine", "Fridley", "Mounds View"], landmark: "Springbrook Nature Center", region: "North Metro" },
  { slug: "mounds-view", name: "Mounds View", county: "Ramsey", distanceMi: 13, population: 13500, zips: ["55112"], neighbors: ["New Brighton", "Spring Lake Park", "Shoreview"], landmark: "Silver View Park", region: "North Metro" },
  { slug: "new-brighton", name: "New Brighton", county: "Ramsey", distanceMi: 11, population: 23000, zips: ["55112"], neighbors: ["Mounds View", "Saint Anthony", "Roseville"], landmark: "Long Lake Regional Park", region: "North Metro" },
  { slug: "saint-anthony", name: "Saint Anthony", county: "Hennepin", distanceMi: 8, population: 9000, zips: ["55418"], neighbors: ["Minneapolis", "Roseville", "New Brighton"], landmark: "Silver Lake", region: "North Metro" },
  { slug: "fridley", name: "Fridley", county: "Anoka", distanceMi: 11, population: 29500, zips: ["55421", "55432"], neighbors: ["Columbia Heights", "New Brighton", "Spring Lake Park"], landmark: "Locke Park", region: "North Metro" },
  { slug: "columbia-heights", name: "Columbia Heights", county: "Anoka", distanceMi: 8, population: 21500, zips: ["55421"], neighbors: ["Minneapolis", "Fridley", "Saint Anthony"], landmark: "Sullivan Lake", region: "North Metro" },
  { slug: "shoreview", name: "Shoreview", county: "Ramsey", distanceMi: 14, population: 27000, zips: ["55112", "55126"], neighbors: ["Arden Hills", "Mounds View", "North Oaks"], landmark: "Snail Lake Regional Park", region: "North Metro" },
  { slug: "arden-hills", name: "Arden Hills", county: "Ramsey", distanceMi: 12, population: 10500, zips: ["55112", "55126"], neighbors: ["Shoreview", "Roseville", "New Brighton"], landmark: "Bethel University", region: "North Metro" },
  { slug: "north-oaks", name: "North Oaks", county: "Ramsey", distanceMi: 14, population: 5300, zips: ["55127"], neighbors: ["Shoreview", "Vadnais Heights", "Lino Lakes"], landmark: "Pleasant Lake", region: "North Metro" },
  { slug: "vadnais-heights", name: "Vadnais Heights", county: "Ramsey", distanceMi: 14, population: 13500, zips: ["55127"], neighbors: ["White Bear Lake", "Shoreview", "North Oaks"], landmark: "Vadnais Lake Regional Park", region: "North Metro" },
  { slug: "white-bear-lake", name: "White Bear Lake", county: "Ramsey", distanceMi: 16, population: 26000, zips: ["55110", "55115"], neighbors: ["Vadnais Heights", "Mahtomedi", "Hugo"], landmark: "White Bear Lake itself", region: "North Metro" },
  { slug: "roseville", name: "Roseville", county: "Ramsey", distanceMi: 9, population: 36500, zips: ["55113"], neighbors: ["Saint Paul", "Lauderdale", "Falcon Heights"], landmark: "Rosedale Center", region: "North Metro" },
  { slug: "falcon-heights", name: "Falcon Heights", county: "Ramsey", distanceMi: 10, population: 5400, zips: ["55108", "55113"], neighbors: ["Saint Paul", "Roseville", "Lauderdale"], landmark: "the Minnesota State Fairgrounds", region: "North Metro" },
  { slug: "lauderdale", name: "Lauderdale", county: "Ramsey", distanceMi: 9, population: 2400, zips: ["55108"], neighbors: ["Saint Paul", "Falcon Heights", "Roseville"], landmark: "the U of M St Paul campus", region: "North Metro" },

  // East Metro
  { slug: "maplewood", name: "Maplewood", county: "Ramsey", distanceMi: 13, population: 42000, zips: ["55109", "55117", "55119"], neighbors: ["Saint Paul", "Oakdale", "North Saint Paul"], landmark: "the Maplewood Mall", region: "East Metro" },
  { slug: "oakdale", name: "Oakdale", county: "Washington", distanceMi: 16, population: 28000, zips: ["55128"], neighbors: ["Maplewood", "Lake Elmo", "Woodbury"], landmark: "Tanners Lake", region: "East Metro" },
  { slug: "woodbury", name: "Woodbury", county: "Washington", distanceMi: 18, population: 80000, zips: ["55125", "55129"], neighbors: ["Oakdale", "Maplewood", "Cottage Grove"], landmark: "Woodbury Lakes", region: "East Metro" },
  { slug: "cottage-grove", name: "Cottage Grove", county: "Washington", distanceMi: 23, population: 39000, zips: ["55016"], neighbors: ["Woodbury", "Saint Paul Park", "Newport"], landmark: "Old Cottage Grove", region: "East Metro" },
  { slug: "saint-paul-park", name: "Saint Paul Park", county: "Washington", distanceMi: 20, population: 5500, zips: ["55071"], neighbors: ["Cottage Grove", "Newport", "Saint Paul"], landmark: "Heritage Days", region: "East Metro" },
  { slug: "newport", name: "Newport", county: "Washington", distanceMi: 18, population: 3700, zips: ["55055"], neighbors: ["South Saint Paul", "Saint Paul Park", "Cottage Grove"], landmark: "the Pig's Eye Lake area", region: "East Metro" },
  { slug: "lake-elmo", name: "Lake Elmo", county: "Washington", distanceMi: 18, population: 12500, zips: ["55042"], neighbors: ["Oakdale", "Stillwater", "Woodbury"], landmark: "Lake Elmo Park Reserve", region: "East Metro" },
  { slug: "mahtomedi", name: "Mahtomedi", county: "Washington", distanceMi: 18, population: 8500, zips: ["55115"], neighbors: ["White Bear Lake", "Stillwater", "Willernie"], landmark: "the historic Wildwood area", region: "East Metro" },
  { slug: "stillwater", name: "Stillwater", county: "Washington", distanceMi: 22, population: 19000, zips: ["55082"], neighbors: ["Bayport", "Lake Elmo", "Oak Park Heights"], landmark: "the historic St. Croix riverfront", region: "East Metro" },
  { slug: "bayport", name: "Bayport", county: "Washington", distanceMi: 23, population: 3700, zips: ["55003"], neighbors: ["Stillwater", "Lakeland", "Oak Park Heights"], landmark: "Andersen Windows", region: "East Metro" },
  { slug: "north-saint-paul", name: "North Saint Paul", county: "Ramsey", distanceMi: 14, population: 12000, zips: ["55109"], neighbors: ["Maplewood", "Oakdale", "Saint Paul"], landmark: "Silver Lake", region: "East Metro" },
  { slug: "hugo", name: "Hugo", county: "Washington", distanceMi: 21, population: 16000, zips: ["55038"], neighbors: ["White Bear Lake", "Forest Lake", "Centerville"], landmark: "the Oneka Lake region", region: "East Metro" },
  { slug: "forest-lake", name: "Forest Lake", county: "Washington", distanceMi: 26, population: 21000, zips: ["55025"], neighbors: ["Hugo", "Wyoming", "Lino Lakes"], landmark: "Forest Lake itself", region: "East Metro" },
];

/**
 * Sitemap priority helper. Closer cities rank higher in the sitemap;
 * every city URL is still indexed.
 */
export function citySitemapPriority(city: Pick<ServedCity, "slug" | "distanceMi">): number {
  if (city.slug === "saint-louis-park") return 0.8;
  if (city.distanceMi <= 10) return 0.6;
  if (city.distanceMi <= 16) return 0.55;
  return 0.5;
}

/** Reverse-lookup helper. */
export function getCityBySlug(slug: string): ServedCity | undefined {
  return servedCities.find((c) => c.slug === slug);
}
