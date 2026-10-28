import type { ServedCity } from "./areasData";

/** City-specific complaint pattern, without driving directions.
 *  Used so /areas-we-serve pages are not template-swapped siblings. */
export type CityLocalFact = {
  note: string;
  typical: string;
};

const FACTS: Record<string, CityLocalFact> = {
  "saint-louis-park": {
    note: "The office is at 6200 Excelsior Blvd, Suite 201, Saint Louis Park, MN 55416. Most first visits are people who already live or work in 55416 and 55426, not a long-haul appointment.",
    typical:
      "Commute-related neck strain, weekend walking, and follow-up after a fender-bender. Desk days plus winter sidewalks show up as low-back and hip tightness more than dramatic injuries.",
  },
  minneapolis: {
    note: "Uptown, Linden Hills, and the lakes loop are a short trip in light traffic. People usually come after a week of sitting downtown or after a Midtown Greenway ride that left the neck and mid-back locked up. The visit is a dedicated appointment, not a downtown office.",
    typical:
      "Bike-commute tightness, desk posture from downtown towers, and winter slip-and-falls on packed snow. Cervical strain after a rear-end is common once the ER at Hennepin Healthcare has cleared the acute work.",
  },
  "saint-paul": {
    note: "Saint Paul is a real drive — typically around 25 minutes if I-94 is behaving. Patients who make it usually want one thorough evaluation, not a five-minute pop-and-go. Summit, Mac-Groveland, and Highland folks often pair the visit with something else on the west side of the metro.",
    typical:
      "River-city commuting on I-94, long sits at the Capitol corridor or downtown St. Paul desks, and leftover stiffness after a Regions or United Hospital discharge.",
  },
  edina: {
    note: "From 50th & France the drive is about ten minutes to 6200 Excelsior Blvd, Suite 201, Saint Louis Park, MN 55416. Golf at Braemar, pickleball, and desk days in the 50th & France offices are the mix we see.",
    typical:
      "Lumbar strain from golf and yard work, cervical tightness from France Avenue traffic, and foot or knee pain that started as “just walking the creek trail.”",
  },
  hopkins: {
    note: "Hopkins Mainstreet is close enough that some patients come on a lunch hour. The light-rail and the industrial stretch along 7th Street mean we see both office necks and warehouse backs. You do not need a Minneapolis address to be taken seriously here.",
    typical:
      "Standing-all-day retail and shop floors, plus the Highway 7 sit between Hopkins and the lakes. Recurring mid-back tightness after a week on the Mainstreet pavement is a regular story.",
  },
  minnetonka: {
    note: "Ridgedale is the usual starting point. Minnetonka patients often treat this as a planned stop after a Ridgedale errand rather than a separate expedition. Lake-path walking and long freeway sits are both in the chart more often than people expect.",
    typical:
      "Hip and low-back stiffness after Ridgedale desk weeks, neck strain from the commute, and overuse from walking the lake loops or the Dakota Trail.",
  },
  plymouth: {
    note: "Plymouth Creek and the drive in make this a 20-minute appointment for most people, not a quick drop-in. We plan the first visit so the drive is worth it: history, exam, and a plan you can keep once you are home.",
    typical:
      "Tech-corridor sitting, youth-sports sideline backs, and the 169 grind. Plantar and knee complaints show up when people add miles on the Plymouth Creek trails without changing shoes.",
  },
  wayzata: {
    note: "Lake Street and the Wayzata Bay walk are gorgeous and hard on hips if you already sit at a desk. Most Wayzata patients would rather make one good trip than shop for a storefront on Lake Street. Bring lake-path shoes if you want the gait look included.",
    typical:
      "Walking the lake promenade on stiff hips, golf-related lumbar strain, and neck pain after the commute back from downtown.",
  },
  "golden-valley": {
    note: "Theodore Wirth Park is the landmark Golden Valley patients mention. Many work in Minneapolis and live nearby. Parking at 6200 Excelsior Blvd, Suite 201, Saint Louis Park, MN 55416 is simpler than a downtown office.",
    typical:
      "Wirth Park trail miles, winter skating stiffness, and a commute that leaves shoulders up around the ears.",
  },
  crystal: {
    note: "Becker Park and the 81 corridor are the mental map. Crystal patients usually share the car with a New Hope or Robbinsdale household, so we keep the first visit efficient and send home work that does not require living next door.",
    typical:
      "Retail and warehouse shifts, plus neck pain from the commute. Kids’ sports at local parks show up as parental sideline backs more than the kids themselves.",
  },
  "new-hope": {
    note: "Northwood Park is why New Hope patients often ask whether this is closer than Maple Grove. For many, yes — and the visit is built for people who already hate extra appointments.",
    typical:
      "Standing retail, long 169 sits, and low-back flare-ups after weekend projects in the 55428 grid.",
  },
  robbinsdale: {
    note: "Whiz Bang Days energy aside, most Robbinsdale patients come because North Memorial already handled the acute piece and they want conservative care that is not the hospital campus.",
    typical:
      "Post-hospital stiffness, nurse and shift-work backs from the North Memorial orbit, and winter sidewalk falls on the 55422 hills.",
  },
  richfield: {
    note: "Wood Lake is the usual landmark. Richfield patients sit between the airport noise and the south Minneapolis grid. The drive is short when traffic is moving. We see a lot of people who tried stretching at home and got two days of relief.",
    typical:
      "62 commute necks, standing retail near the Hub, and hip tightness from the Wood Lake loops in the same shoes they wear to work.",
  },
  excelsior: {
    note: "The office is at 6200 Excelsior Blvd, Suite 201, Saint Louis Park, MN 55416. Lake-town patients often stop on the way to or from Minneapolis rather than making a special trip. Bring the boat-dock story; it is usually a hip and low-back story.",
    typical:
      "Dock and deck work, bicycle miles around the lower lake, and the Highway 7 sit after a full day on the water.",
  },
  chanhassen: {
    note: "The Arboretum weekend plus a 212 commute is a specific pattern: long sits, then long walks on uneven ground. Chanhassen patients usually come after they have already tried the local PT mill and still cannot sit through a workday.",
    typical:
      "Garden and trail overuse, 212 corridor stiffness, and neck pain from looking down at phones in school-pickup traffic.",
  },
  chaska: {
    note: "Hazeltine and downtown Chaska make this a planned 30-minute drive. We do not pretend it is around the corner. The first visit is built so you leave with a plan you can run from Carver County, not a schedule that assumes you live next door.",
    typical:
      "Golf-related lumbar strain, warehouse and production shifts, and the 212 sit after a 10-hour day.",
  },
  "eden-prairie": {
    note: "Eden Prairie Center is why EP patients ask about parking before they ask about the adjustment. Tech-campus sitting plus weekend trail miles on the same body is the usual chart.",
    typical:
      "Standing at EP Center, sitting at the tech campuses, and IT-band / low-back pain after the Minnesota River Bluffs trails.",
  },
  orono: {
    note: "Big Island weekends and Highway 12 weekdays do not use the same muscles. Orono patients often wait until they cannot get comfortable in the car. We plan around that: one thorough visit, homework you can do at the lake, and no pressure to live next door.",
    typical:
      "Boat-lift and dock work, long Highway 12 sits, and neck pain from looking over the shoulder on winding lake roads.",
  },
  "long-lake": {
    note: "The village is small; the commute is not. Long Lake patients usually combine the visit with another errand. We keep the first visit unhurried because you did not drive this far for a script.",
    typical:
      "Highway 12 stiffness, weekend lake-path walking, and mid-back tightness from remote-work setups that were never meant to be permanent.",
  },
  medina: {
    note: "Hamel and the horse-country roads mean Medina patients often arrive after a week of sitting plus a weekend of physical work. The drive is real. We treat it like a dedicated appointment, not a retail stop.",
    typical:
      "Barn and property work, 55 corridor sits, and hip tightness that started as “just the tractor” and became a daily limp.",
  },
  "maple-plain": {
    note: "Baker Park is the landmark people mention. Maple Plain patients are used to driving for anything specialized; they care that the visit is specific, not that it is two minutes away. We do not pad the schedule with filler visits.",
    typical:
      "Park-reserve hiking, Highway 12 commuting, and low-back pain after stacking firewood or clearing driveways.",
  },
  mound: {
    note: "West Lake Minnetonka patients often decide on a weekday when they already have a reason to come east. Dock, deck, and winter ice are the three seasons of the same spine. We send home work that fits a lake house, not a gym membership.",
    typical:
      "Lifting coolers and boat batteries, long sits around the lake loop, and sciatica that showed up after a weekend of guests.",
  },
  "spring-park": {
    note: "Lord Fletcher’s is the landmark; the clinic is the eastbound 7 trip after. Spring Park is tiny, so patients are used to leaving town for care. We respect that with a first visit that actually changes the next week.",
    typical:
      "Hospitality and restaurant shifts, lake-path walking in bad shoes, and neck pain from looking down at POS screens.",
  },
  deephaven: {
    note: "St. Alban’s Bay households usually have a Minneapolis workday and a lake evening. That split — sitting, then sudden yard or dock work — is exactly when discs complain. We see you in Saint Louis Park so the west-metro day already includes the stop.",
    typical:
      "Split sit-stand days, kayak and paddle overuse, and low-back tightness after a week of commuting plus a Saturday of yard work.",
  },
  shorewood: {
    note: "Shorewood patients are already on the same boulevard as the clinic. The visit is often on the way to Minneapolis. We still do a full exam — proximity is not an excuse for a two-minute adjustment.",
    typical:
      "Bay-path walking, school-run necks, and the Highway 7 grind between the lower lake and the city.",
  },
  "tonka-bay": {
    note: "Lower Lake South is beautiful and inconvenient for clinics. Tonka Bay patients make a point of coming; we make a point of not wasting the trip. Bring the story of the stairs down to the water — that is usually the hip.",
    typical:
      "Steep driveway and dock stairs, weekend hosting, and neck pain from looking over the shoulder on narrow lake roads.",
  },
  "minnetonka-beach": {
    note: "The Lafayette Club is the landmark people mention. This is a small community. We do not advertise at the club. People come because a neighbor already did.",
    typical:
      "Golf and social-calendar weeks, long sits around the lake, and flare-ups after a weekend of guests and extra driving.",
  },
  victoria: {
    note: "Carver Park Reserve weekends plus a Chanhassen-corridor job is a Victoria chart in one sentence. The drive is 30-plus minutes. We plan care you can continue from Carver County.",
    typical:
      "Trail and park-reserve overuse, 5 / 212 commuting, and low-back pain after a week of sitting and a Saturday of property work.",
  },
  waconia: {
    note: "Lake Waconia patients are used to driving for specialty care. We do not pretend Saint Louis Park is local. If you are making the trip, the first visit covers exam, a clear plan, and what to do on the weeks you stay in Carver County.",
    typical:
      "Lake-town walking, hospital and clinic shift work at Ridgeview, and the Highway 5 sit after a full day on your feet.",
  },
  bloomington: {
    note: "Mall of America standing plus long freeway sits is a specific spine. Bloomington patients often come after a holiday-season shift or after a rear-end the ER called “soft tissue.” We are not in the mall orbit, and parking is simpler.",
    typical:
      "Retail standing, airport-adjacent shift work, and lumbar strain after the MOA concrete. Hip tightness from the commute is the usual story.",
  },
  burnsville: {
    note: "Burnsville Center and the south-metro drive mean this is a planned visit, not a lunch-hour pop-in. We see a lot of people who already tried the south-metro chains and wanted a doctor, not a mill.",
    typical:
      "Retail and warehouse standing, freeway stiffness, and low-back pain after the Burnsville trails in worn trainers.",
  },
  eagan: {
    note: "Eagan’s office parks and the 35E/77 mix create long sits and sudden weekend sports. The Premium Outlets standing days show up too. Plan on about half an hour; we use that time for a real exam.",
    typical:
      "Corporate-campus sitting, weekend soccer sidelines, and neck pain from the 35E merge.",
  },
  "apple-valley": {
    note: "The Zoo is the landmark people joke about; the real story is Cedar Avenue traffic. Apple Valley patients make a dedicated trip. We send home work that survives a Dakota County week, not a fantasy of daily visits.",
    typical:
      "Cedar Avenue sits, walking the zoo loops with kids, and low-back flare-ups after a week of hybrid-desk plus youth sports.",
  },
  lakeville: {
    note: "Lake Marion and I-35 make this one of the longer south-metro drives. Lakeville patients usually come because a family member already did, not because they saw an ad. We treat the visit accordingly.",
    typical:
      "Growing-suburb youth sports, I-35 stiffness, and hip pain after Lake Marion walking in the same shoes they commute in.",
  },
  savage: {
    note: "Hidden Valley is the landmark people mention. Savage patients often work in Bloomington or Eden Prairie and live south of the river.",
    typical:
      "River-crossing commutes, park-run overuse, and mid-back tightness from laptops in the passenger seat of the school run.",
  },
  "prior-lake": {
    note: "Mystic Lake traffic is real; so is the lake-town weekend. Prior Lake patients usually pick a weekday morning. We do not schedule you like you live next door.",
    typical:
      "Hospitality shifts, boat and dock work, and lumbar strain after a week of 169 plus a Saturday of guests.",
  },
  shakopee: {
    note: "Valleyfair season and downtown Shakopee are two different spines: standing all day, then sitting in 169 traffic. We see both. The first visit is built for Scott County, not a west-metro fantasy schedule.",
    typical:
      "Seasonal standing work, 169 commuting, and low-back pain after a week in production or warehouse roles.",
  },
  farmington: {
    note: "Downtown Farmington is a genuine drive. People who come usually want a doctor who will look at the whole pattern, not a coupon clinic. We keep the plan realistic for Dakota County miles.",
    typical:
      "Long south-metro sits, farm and yard work, and necks that started as “just the truck” and became daily headaches.",
  },
  rosemount: {
    note: "Rosemount High and the 3 corridor are the local map. This is a planned appointment. We would rather see you well once than invent a weekly drive you will cancel.",
    typical:
      "Youth-sports parental backs, highway sits, and plantar pain after adding miles on suburban trails.",
  },
  "inver-grove-heights": {
    note: "Inver Hills and the 52 corridor mean a longer east-south mix. Patients often work in St. Paul or Bloomington. We plan the visit around that commute so you are not stacking errands forever.",
    typical:
      "52 / 494 stiffness, campus walking, and hip tightness after a week that mixed warehouse floors with a long sit home.",
  },
  "mendota-heights": {
    note: "Fort Snelling and the airport overlay make Mendota Heights patients already comfortable on 62. The clinic is a straight west shot. We still do the full exam — easy geography is not a shortcut.",
    typical:
      "62 commute necks, airport-adjacent shift work, and walking the river bluffs in dress shoes.",
  },
  "west-saint-paul": {
    note: "Thompson Park and Robert Street are the landmarks. West St. Paul patients often work in downtown St. Paul and live just south of the river. The west-metro clinic is a dedicated trip; we make it count.",
    typical:
      "Robert Street retail standing, downtown sits, and winter hills that punish knees and low backs.",
  },
  "south-saint-paul": {
    note: "Kaposia Landing walks plus 494 sits are the chart. South St. Paul patients usually come after a family referral, not a billboard. We keep the first visit honest about the drive.",
    typical:
      "River-road walking, industrial and warehouse shifts, and neck pain from 494.",
  },
  "maple-grove": {
    note: "Arbor Lakes is the landmark people mention. Maple Grove has plenty of clinics. People who drive here usually want a specific doctor, not another storefront in the Shoppes.",
    typical:
      "Retail standing at Arbor Lakes, 94 / 169 sits, and youth-sports sideline backs.",
  },
  "brooklyn-park": {
    note: "Brooklyn Park is big; the drive is not tiny. Patients often work the 169 corridor and live north of 610. We plan visits that respect that, including home work you can do without a gym.",
    typical:
      "Warehouse and production shifts, 169 stiffness, and low-back pain after a week on concrete.",
  },
  "brooklyn-center": {
    note: "The river trail puts Brooklyn Center closer than people think. Some patients come on the way home from a Minneapolis shift. Parking at 6200 Excelsior Blvd, Suite 201, Saint Louis Park, MN 55416 is straightforward.",
    typical:
      "94 commute necks, trail walking, and standing retail along the Brookdale stretch.",
  },
  champlin: {
    note: "Mississippi Point is the landmark. Champlin patients are used to 169. We do not sell a fantasy of three visits a week from Anoka County; we sell a plan you can keep.",
    typical:
      "River-town walking, 169 sits, and hip tightness after a week of hybrid work plus weekend yard projects.",
  },
  osseo: {
    note: "Downtown Osseo is small; the surrounding grid is not. Patients often live in the Maple Grove / Brooklyn Park smear and still say Osseo. We treat the actual commute, not the city-limit sign.",
    typical:
      "Short-town walking plus long corridor sits, and necks from looking down at shop counters all day.",
  },
  anoka: {
    note: "Halloween Capital energy aside, Anoka patients make a real north-metro drive. We keep the first visit thorough because you did not come for a coupon. Rum River walks and 10 / 169 sits live in the same spine.",
    typical:
      "Downtown standing events, highway commuting, and low-back pain after a week in production or county-shift work.",
  },
  "coon-rapids": {
    note: "The Coon Rapids Dam trail is lovely and unforgiving on hips if you already sit at a desk. Patients usually come after they have tried the local options. Plan on a dedicated appointment.",
    typical:
      "Trail overuse, 10 corridor sits, and shift-work backs from the Mercy orbit.",
  },
  blaine: {
    note: "The National Sports Center means Blaine charts include both athletes and the parents who sit in cold bleachers. This is not a five-minute drive. We plan care you can run from Anoka County.",
    typical:
      "Tournament weekends, freeway stiffness, and necks from looking down at phones in pickup lines.",
  },
  andover: {
    note: "Bunker Hills is the weekend; 65 is the weekday. Andover patients who come here usually want a doctor who will look at both. We do not pretend this is local.",
    typical:
      "Park-reserve hiking, long 65 sits, and low-back pain after a week of remote work in a dining chair.",
  },
  "ham-lake": {
    note: "Coon Lake weekends plus 65 weekdays. Ham Lake patients are used to driving. We respect that with a first visit that produces a plan, not a sales stack.",
    typical:
      "Lake-property work, highway sits, and sciatica after a weekend of guests and extra lifting.",
  },
  "lino-lakes": {
    note: "Rice Creek chain walking is the local joy and the local overuse. Lino Lakes patients often work in the north-metro office parks. The clinic is a planned west-metro stop.",
    typical:
      "Trail miles, 35E sits, and neck pain from looking at monitors in windowless offices.",
  },
  centerville: {
    note: "Peltier Lake is the landmark. Centerville is small; the drive is not. People who come usually already decided they want this clinic. We do not waste the trip.",
    typical:
      "Lake-town walking, 35E commuting, and mid-back tightness from hybrid work.",
  },
  "spring-lake-park": {
    note: "Springbrook Nature Center walks are the local pattern. Spring Lake Park is closer than Blaine; patients still treat it as a dedicated visit. We keep the exam full.",
    typical:
      "Nature-center miles, corridor sits, and standing retail along the 65 strip.",
  },
  "mounds-view": {
    note: "Silver View Park is the local landmark. Mounds View patients often work in Roseville or downtown. Choosing this clinic is a decision, not the default. We treat it like one.",
    typical:
      "Park walking, freeway stiffness, and necks from looking down at warehouse scanners.",
  },
  "new-brighton": {
    note: "Long Lake Regional Park is the weekend; the commute is the week. New Brighton is closer than people who live north of Minneapolis assume. Some patients come on the way home from Minneapolis.",
    typical:
      "Park loops, freeway sits, and low-back pain after a week of hybrid desks.",
  },
  "saint-anthony": {
    note: "Silver Lake and the Minneapolis line put Saint Anthony closer than a map-app “north metro” label. The visit is a dedicated appointment, not an expedition.",
    typical:
      "Lake walking, city-edge commuting, and desk necks from the industrial/office mix along Stinson.",
  },
  fridley: {
    note: "Locke Park and the river industrial strip. Fridley patients often work shifts and need a visit that does not assume a 9-to-5. We will say so if a plan needs daytime frequency they cannot keep.",
    typical:
      "Shift-work backs, 694 sits, and winter falls on the river-adjacent sidewalks.",
  },
  "columbia-heights": {
    note: "Sullivan Lake is the landmark. Columbia Heights is a short city-edge drive when traffic is moving. Patients often work in Minneapolis and live just north. Parking here is easier than downtown.",
    typical:
      "City-edge commuting, lake walking, and standing retail along 65.",
  },
  shoreview: {
    note: "Snail Lake loops plus 694 sits. Shoreview patients usually work in Roseville, Arden Hills, or downtown. This is a planned west-metro appointment. We send home work that fits a lake-suburb week.",
    typical:
      "Park-reserve walking, 694 stiffness, and neck pain from looking at two monitors all day.",
  },
  "arden-hills": {
    note: "Bethel and the TCAAP-adjacent roads mean Arden Hills charts mix campus walking with long corridor sits. Patients often already use Roseville clinics; they come here for a different doctor, not a closer door.",
    typical:
      "Campus walking, 694 commuting, and mid-back tightness from lecture-hall and office chairs.",
  },
  "north-oaks": {
    note: "Pleasant Lake is the landmark. North Oaks patients are used to driving for everything. We do not sell volume care. The first visit is an evaluation with a plan you can run from a gated lake suburb.",
    typical:
      "Lake-path walking, long sits, and hip tightness after a week of quiet remote work plus a weekend of guests.",
  },
  "vadnais-heights": {
    note: "Vadnais Lake Regional Park is the weekend story. Vadnais Heights patients often work the 35E office parks. The clinic is a dedicated trip; we keep the plan realistic.",
    typical:
      "Park-reserve miles, 35E sits, and plantar pain after adding trail miles in old trainers.",
  },
  "white-bear-lake": {
    note: "The lake is the identity and the overuse. White Bear patients who drive this far usually already tried closer options. We respect the trip with a full exam and homework that fits a lake-town week.",
    typical:
      "Lake walking and biking, downtown standing, and necks from 61 / 694 commuting.",
  },
  roseville: {
    note: "Rosedale standing plus 36 sits is a Roseville chart. The drive is shorter than east-metro neighbors. Some patients come after a Rosedale shift. We still do the full first visit.",
    typical:
      "Mall standing, freeway stiffness, and desk necks from the office parks along Snelling.",
  },
  "falcon-heights": {
    note: "State Fair season is its own injury pattern: miles of walking, then a week of sitting. The rest of the year is campus and Snelling traffic. We are a west shot from the Fairgrounds, not a fair-week pop-up.",
    typical:
      "Fairgrounds walking, Snelling sits, and necks from looking down at campus laptops.",
  },
  lauderdale: {
    note: "The St. Paul campus edge is the landmark. Lauderdale is small and close to 94. Patients often work at the U and live in a tiny grid. The west-metro clinic is a choice for a specific doctor.",
    typical:
      "Campus walking, 94 sits, and mid-back tightness from lab stools and library chairs.",
  },
  maplewood: {
    note: "Maplewood Mall standing plus 94 sits. Maplewood patients who come here have usually decided against another east-side mill. We plan care you can keep from Ramsey County.",
    typical:
      "Mall and retail standing, 94 commuting, and low-back pain after a week on concrete.",
  },
  oakdale: {
    note: "Tanners Lake is the landmark. Oakdale patients are already on 94. The clinic is the westbound decision, not a mystery. We still treat the first visit as a full evaluation.",
    typical:
      "Lake-path walking, 94 stiffness, and necks from looking down at warehouse or office screens.",
  },
  woodbury: {
    note: "Woodbury Lakes walking plus 94 sits. This is one of the longer east-metro drives. People who make it usually want a specific clinician. We do not invent a three-times-a-week plan you will hate by week two.",
    typical:
      "Retail walking, 94 commuting, and hip tightness after a week of hybrid desks plus youth sports.",
  },
  "cottage-grove": {
    note: "Old Cottage Grove and the 61 corridor. This is a genuine east-south drive. We are honest about it. The first visit is built so the next month can happen from Washington County.",
    typical:
      "Highway 61 sits, river-town walking, and low-back pain after a week in production or warehouse roles.",
  },
  "saint-paul-park": {
    note: "Heritage Days aside, Saint Paul Park patients make a real trip. We keep the plan realistic and the exam complete. River-town hills plus 61 traffic live in the same neck.",
    typical:
      "River-road walking, 61 commuting, and standing work along the industrial strip.",
  },
  newport: {
    note: "Pig’s Eye and the 494 bridge are the mental map. Newport is small; the drive is not nothing. Patients usually come with a St. Paul workday already in the calendar.",
    typical:
      "494 sits, river-adjacent walking, and mid-back tightness from mixed sitting and lifting jobs.",
  },
  "lake-elmo": {
    note: "Lake Elmo Park Reserve is the weekend and the overuse. Patients who drive from here usually already like trails more than treadmills. We look at the shoes, the sit, and the reserve miles together.",
    typical:
      "Park-reserve hiking, 94 commuting, and plantar or knee pain after adding miles too fast.",
  },
  mahtomedi: {
    note: "Wildwood and the White Bear shoreline. Mahtomedi patients often share a household with White Bear Lake. The west-metro clinic is a choice. We keep the visit worth the choice.",
    typical:
      "Lake walking, school-run necks, and 694 stiffness.",
  },
  stillwater: {
    note: "The St. Croix riverfront is steep, charming, and hard on knees. Stillwater patients who come this far usually want a doctor, not another Main Street storefront. We plan care you can run from Washington County, including the weeks you stay on the river.",
    typical:
      "Hill walking, downtown standing, and 36 / 94 sits after a full day on your feet.",
  },
  bayport: {
    note: "Andersen and the river industrial stretch. Bayport patients often work shifts. We will not write a plan that assumes you can leave the line three times a week.",
    typical:
      "Plant and shift-work backs, river-town walking, and necks from looking down at production screens.",
  },
  "north-saint-paul": {
    note: "Silver Lake and the 36 corridor. North St. Paul is closer than Woodbury; patients still treat it as a dedicated visit. We keep the exam full and the homework practical.",
    typical:
      "Lake walking, 36 sits, and standing retail along the Margaret / 36 mix.",
  },
  hugo: {
    note: "Oneka Lake country plus 35E. Hugo patients are used to driving south for anything specialized. We do not pad the plan with visits you will cancel when 35E is a parking lot.",
    typical:
      "Lake-property work, 35E commuting, and low-back pain after a week of sitting plus a weekend of projects.",
  },
  "forest-lake": {
    note: "Forest Lake itself is the landmark and the longest north-metro drive we routinely see. People who come usually already decided. The first visit is an evaluation and a plan you can keep when you stay in Washington / Anoka County most weeks.",
    typical:
      "Lake-town walking, I-35 stiffness, and hip tightness after a week of highway miles plus weekend guests.",
  },
};

export function localFact(city: Pick<ServedCity, "slug" | "name" | "landmark" | "region">): CityLocalFact {
  const found = FACTS[city.slug];
  if (found) return found;
  return {
    note: `${city.name} patients are seen at 6200 Excelsior Blvd, Suite 201, Saint Louis Park, MN 55416. The first visit is built as a dedicated appointment, not a drop-in.`,
    typical: `Commute stiffness and the weekend pattern around ${city.landmark}.`,
  };
}
