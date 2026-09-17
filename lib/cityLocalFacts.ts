import type { ServedCity } from "./areasData";

/** City-specific commute, complaint pattern, and nearby hospital.
 *  Used so /areas-we-serve pages are not template-swapped siblings. */
export type CityLocalFact = {
  corridor: string;
  note: string;
  typical: string;
  hospital: string;
};

const FACTS: Record<string, CityLocalFact> = {
  "saint-louis-park": {
    corridor:
      "Highway 100 and Excelsior Boulevard, a few blocks west of Park Nicollet Methodist Hospital",
    note: "The office is in Suite 201 at 6200 Excelsior Blvd. Methodist Hospital sits less than a mile east on the same street, and the West End is the usual landmark people use when they give directions. Most first visits are people who already live or work in 55416 and 55426, not a long-haul appointment.",
    typical:
      "Highway 100 commute necks, weekend walking around the West End, and follow-up after a fender-bender on Excelsior or Highway 7. Desk days plus winter sidewalks show up as low-back and hip tightness more than dramatic injuries.",
    hospital: "Park Nicollet Methodist Hospital on Excelsior Blvd",
  },
  minneapolis: {
    corridor: "I-394 west to Highway 100, or Excelsior Blvd from the Chain of Lakes",
    note: "Uptown, Linden Hills, and the lakes loop sit about 15–20 minutes east of the clinic in light traffic. People usually come after a week of sitting downtown or after a Midtown Greenway ride that left the neck and mid-back locked up. We are not a downtown skyway clinic — the visit is a dedicated west-metro stop.",
    typical:
      "Bike-commute tightness, desk posture from downtown towers, and winter slip-and-falls on packed snow. Cervical strain after a rear-end on I-94 or 35W is common once the ER at Hennepin Healthcare has cleared the acute work.",
    hospital: "Hennepin Healthcare (HCMC) downtown, then follow-up here",
  },
  "saint-paul": {
    corridor: "I-94 west to I-394, then south on Highway 100 to Excelsior",
    note: "Saint Paul is a real drive — typically around 25 minutes if I-94 is behaving. Patients who make it usually want one thorough evaluation, not a five-minute pop-and-go. Summit, Mac-Groveland, and Highland folks often pair the visit with something else on the west side of the metro.",
    typical:
      "River-city commuting on I-94, long sits at the Capitol corridor or downtown St. Paul desks, and leftover stiffness after a Regions or United Hospital discharge.",
    hospital: "Regions Hospital or United Hospital, then conservative follow-up here",
  },
  edina: {
    corridor: "France Avenue or Highway 100 north to Excelsior Boulevard",
    note: "From 50th & France you are about ten minutes from Suite 201 in ordinary traffic. Fairview Southdale is the hospital most Edina patients already know; we sit a short hop north of that campus, not inside it. Golf at Braemar, pickleball, and desk days in the 50th & France offices are the mix we see.",
    typical:
      "Lumbar strain from golf and yard work, cervical tightness from France Avenue traffic, and foot or knee pain that started as “just walking the creek trail.”",
    hospital: "Fairview Southdale Hospital on France Avenue",
  },
  hopkins: {
    corridor: "Highway 7 east or Excelsior Boulevard straight into Saint Louis Park",
    note: "Hopkins Mainstreet is close enough that some patients come on a lunch hour. The light-rail and the industrial stretch along 7th Street mean we see both office necks and warehouse backs. You do not need a Minneapolis address to be taken seriously here.",
    typical:
      "Standing-all-day retail and shop floors, plus the Highway 7 sit between Hopkins and the lakes. Recurring mid-back tightness after a week on the Mainstreet pavement is a regular story.",
    hospital: "Park Nicollet Methodist Hospital, a few minutes east",
  },
  minnetonka: {
    corridor: "Highway 7 or I-394 east to Highway 100, then Excelsior",
    note: "Ridgedale and the 394 frontage are the usual starting points. Minnetonka patients often treat this as a planned stop after a Ridgedale errand rather than a separate expedition. Lake-path walking and long 394 sits are both in the chart more often than people expect.",
    typical:
      "Hip and low-back stiffness after Ridgedale desk weeks, neck strain from 394, and overuse from walking the lake loops or the Dakota Trail.",
    hospital: "Park Nicollet Methodist Hospital, then this office for the follow-up plan",
  },
  plymouth: {
    corridor: "I-494 or Highway 169 south to I-394, then Highway 100",
    note: "Plymouth Creek and the 494/169 mix make this a 20-minute appointment for most people, not a quick drop-in. We plan the first visit so the drive is worth it: history, exam, and a plan you can keep on the north side of 394.",
    typical:
      "Tech-corridor sitting, youth-sports sideline backs, and the 169 grind. Plantar and knee complaints show up when people add miles on the Plymouth Creek trails without changing shoes.",
    hospital: "North Memorial in Robbinsdale, or Methodist if they already use Park Nicollet",
  },
  wayzata: {
    corridor: "I-394 east to Highway 100, then south to Excelsior",
    note: "Lake Street and the Wayzata Bay walk are gorgeous and hard on hips if you already sit at a desk. Most Wayzata patients would rather make one good trip than shop for a storefront on Lake Street. Bring lake-path shoes if you want the gait look included.",
    typical:
      "Walking the lake promenade on stiff hips, golf-related lumbar strain, and neck pain after the 394 commute back from downtown.",
    hospital: "Park Nicollet Methodist Hospital is the usual west-metro stop",
  },
  "golden-valley": {
    corridor: "Highway 100 south to Excelsior, or Highway 55 to 100",
    note: "Theodore Wirth Park is the landmark; the office is a short hop south of the parkway. Golden Valley patients often work in Minneapolis and live just west of it, so the 100 corridor is already part of the day. Parking at Suite 201 is simpler than hunting a skyway clinic.",
    typical:
      "Wirth Park trail miles, winter skating stiffness, and the Highway 55 / 100 merge that leaves shoulders up around the ears.",
    hospital: "North Memorial nearby, Methodist if they already use Excelsior Blvd",
  },
  crystal: {
    corridor: "Highway 100 south, or County Road 81 to 100",
    note: "Becker Park and the 81 corridor are the mental map. Crystal patients usually share the car with a New Hope or Robbinsdale household, so we keep the first visit efficient and send home work that does not require living next door.",
    typical:
      "Retail and warehouse shifts along 81, plus neck pain from the 100 sit. Kids’ sports at local parks show up as parental sideline backs more than the kids themselves.",
    hospital: "North Memorial Health in Robbinsdale",
  },
  "new-hope": {
    corridor: "Highway 169 or 100 south toward Excelsior Boulevard",
    note: "Northwood Park and the 169/100 split are why New Hope patients often ask “is this really closer than Maple Grove?” For many, yes — and the visit is built for people who already hate extra appointments.",
    typical:
      "Standing retail, long 169 sits, and low-back flare-ups after weekend projects in the 55428 grid.",
    hospital: "North Memorial in Robbinsdale",
  },
  robbinsdale: {
    corridor: "Highway 100 south, or 36th Avenue to 100",
    note: "Whiz Bang Days energy aside, most Robbinsdale patients come because North Memorial already handled the acute piece and they want conservative care that is not the hospital campus. We are a short 100 hop south.",
    typical:
      "Post-hospital stiffness, nurse and shift-work backs from the North Memorial orbit, and winter sidewalk falls on the 55422 hills.",
    hospital: "North Memorial Health — then this clinic for the non-surgical plan",
  },
  richfield: {
    corridor: "Highway 62 west to Highway 100 north, or Lyndale to 62",
    note: "Wood Lake and the 62/100 interchange are the usual story. Richfield patients sit between the airport noise and the south Minneapolis grid; the drive is short if 62 is moving. We see a lot of people who tried stretching at home and got two days of relief.",
    typical:
      "62 commute necks, standing retail near the Hub, and hip tightness from the Wood Lake loops in the same shoes they wear to work.",
    hospital: "Fairview Southdale, a few minutes west",
  },
  excelsior: {
    corridor: "Highway 7 east the whole way, or County 19 to 7",
    note: "The clinic is literally on Excelsior Boulevard — just several miles east of the village. Lake-town patients often stop on the way to or from Minneapolis rather than making a special trip. Bring the boat-dock story; it is usually a hip and low-back story.",
    typical:
      "Dock and deck work, bicycle miles around the lower lake, and the Highway 7 sit after a full day on the water.",
    hospital: "Park Nicollet Methodist Hospital, east on the same boulevard",
  },
  chanhassen: {
    corridor: "Highway 5 to Highway 41 / 212, then 62 or 7 east, or 212 to 100",
    note: "The Arboretum weekend plus a 212 commute is a specific pattern: long sits, then long walks on uneven ground. Chanhassen patients usually come after they have already tried the local PT mill and still cannot sit through a workday.",
    typical:
      "Garden and trail overuse, 212 corridor stiffness, and neck pain from looking down at phones in school-pickup traffic.",
    hospital: "Ridgeview or Fairview Southdale, depending on which campus they already use",
  },
  chaska: {
    corridor: "Highway 212 east to Highway 100, then Excelsior",
    note: "Hazeltine and downtown Chaska make this a planned 30-minute drive. We do not pretend it is around the corner. The first visit is built so you leave with a plan you can run from Carver County, not a schedule that assumes you live on Excelsior.",
    typical:
      "Golf-related lumbar strain, warehouse and production shifts, and the 212 sit after a 10-hour day.",
    hospital: "Ridgeview Medical Center in Waconia / Chaska orbit",
  },
  "eden-prairie": {
    corridor: "Highway 212 or 494 to Highway 100 north, or Flying Cloud to 62",
    note: "Eden Prairie Center and the 494/212 tangle are why EP patients ask about parking before they ask about the adjustment. The drive is straightforward once you are on 100. Tech-campus sitting plus weekend trail miles on the same body is the usual chart.",
    typical:
      "Standing at EP Center, sitting at the tech campuses, and IT-band / low-back pain after the Minnesota River Bluffs trails.",
    hospital: "Fairview Southdale or Methodist, depending on insurance campus",
  },
  orono: {
    corridor: "County 15 / Highway 12 to I-394, then Highway 100",
    note: "Big Island weekends and Highway 12 weekdays do not use the same muscles. Orono patients often wait until they cannot get comfortable in the car. We plan around that: one thorough visit, homework you can do at the lake, and no pressure to live next door.",
    typical:
      "Boat-lift and dock work, long Highway 12 sits, and neck pain from looking over the shoulder on winding lake roads.",
    hospital: "Park Nicollet Methodist Hospital once they are already in the west metro",
  },
  "long-lake": {
    corridor: "Highway 12 east to I-394 and Highway 100",
    note: "The village is small; the commute is not. Long Lake patients usually combine the visit with a 12 / 394 errand. We keep the first visit unhurried because you did not drive this far for a script.",
    typical:
      "Highway 12 stiffness, weekend lake-path walking, and mid-back tightness from remote-work setups that were never meant to be permanent.",
    hospital: "Methodist Hospital in Saint Louis Park",
  },
  medina: {
    corridor: "Highway 55 or 12 to I-394, then Highway 100",
    note: "Hamel and the horse-country roads mean Medina patients often arrive after a week of sitting plus a weekend of physical work. The drive is real. We treat it like a dedicated appointment, not a retail stop.",
    typical:
      "Barn and property work, 55 corridor sits, and hip tightness that started as “just the tractor” and became a daily limp.",
    hospital: "Methodist or North Memorial, depending on which way they already drive",
  },
  "maple-plain": {
    corridor: "Highway 12 east all the way to 394 and 100",
    note: "Baker Park is the landmark people mention. Maple Plain patients are used to driving for anything specialized; they care that the visit is specific, not that it is two minutes away. We do not pad the schedule with filler visits.",
    typical:
      "Park-reserve hiking, Highway 12 commuting, and low-back pain after stacking firewood or clearing driveways.",
    hospital: "Methodist Hospital once they reach the west metro",
  },
  mound: {
    corridor: "County 15 to Highway 7 east, or 15 to 394",
    note: "West Lake Minnetonka patients often decide on a weekday when they already have a reason to come east. Dock, deck, and winter ice are the three seasons of the same spine. We send home work that fits a lake house, not a gym membership.",
    typical:
      "Lifting coolers and boat batteries, long sits around the lake loop, and sciatica that showed up after a weekend of guests.",
    hospital: "Methodist Hospital on Excelsior Blvd",
  },
  "spring-park": {
    corridor: "County 15 to Highway 7 east into Saint Louis Park",
    note: "Lord Fletcher’s is the landmark; the clinic is the eastbound 7 trip after. Spring Park is tiny, so patients are used to leaving town for care. We respect that with a first visit that actually changes the next week.",
    typical:
      "Hospitality and restaurant shifts, lake-path walking in bad shoes, and neck pain from looking down at POS screens.",
    hospital: "Methodist Hospital, east on Highway 7 / Excelsior",
  },
  deephaven: {
    corridor: "County 19 or 101 to Highway 7 east",
    note: "St. Alban’s Bay households usually have a Minneapolis workday and a lake evening. That split — sitting, then sudden yard or dock work — is exactly when discs complain. We see you in Saint Louis Park so the west-metro day already includes the stop.",
    typical:
      "Split sit-stand days, kayak and paddle overuse, and low-back tightness after a week of 394 plus a Saturday of yard work.",
    hospital: "Methodist Hospital on Excelsior",
  },
  shorewood: {
    corridor: "Highway 7 east from Excelsior Bay",
    note: "Shorewood patients are already on the same boulevard as the clinic. The visit is often on the way to Minneapolis. We still do a full exam — proximity is not an excuse for a two-minute adjustment.",
    typical:
      "Bay-path walking, school-run necks, and the Highway 7 grind between the lower lake and the city.",
    hospital: "Methodist Hospital, further east on Excelsior",
  },
  "tonka-bay": {
    corridor: "County 19 to Highway 7 east",
    note: "Lower Lake South is beautiful and inconvenient for clinics. Tonka Bay patients make a point of coming; we make a point of not wasting the trip. Bring the story of the stairs down to the water — that is usually the hip.",
    typical:
      "Steep driveway and dock stairs, weekend hosting, and neck pain from looking over the shoulder on narrow lake roads.",
    hospital: "Methodist Hospital in Saint Louis Park",
  },
  "minnetonka-beach": {
    corridor: "County 15 to I-394 east, then Highway 100",
    note: "The Lafayette Club is the landmark; the clinic is the eastbound 394 decision. This is a small community. We do not advertise at the club. People come because a neighbor already did.",
    typical:
      "Golf and social-calendar weeks, long sits around the lake, and flare-ups after a weekend of guests and extra driving.",
    hospital: "Methodist Hospital once they are on the east side of the lake",
  },
  victoria: {
    corridor: "Highway 5 to 41 / 212, then east toward 100",
    note: "Carver Park Reserve weekends plus a Chanhassen-corridor job is a Victoria chart in one sentence. The drive is 30-plus minutes. We plan care you can continue from Carver County.",
    typical:
      "Trail and park-reserve overuse, 5 / 212 commuting, and low-back pain after a week of sitting and a Saturday of property work.",
    hospital: "Ridgeview Medical Center in Waconia",
  },
  waconia: {
    corridor: "Highway 5 east toward 212 and the west metro",
    note: "Lake Waconia patients are used to driving for specialty care. We do not pretend Saint Louis Park is local. If you are making the trip, the first visit covers exam, a clear plan, and what to do on the weeks you stay in Carver County.",
    typical:
      "Lake-town walking, hospital and clinic shift work at Ridgeview, and the Highway 5 sit after a full day on your feet.",
    hospital: "Ridgeview Medical Center — then conservative care here when you want a second opinion",
  },
  bloomington: {
    corridor: "I-35W or Highway 77 to 62 west, then Highway 100 north",
    note: "Mall of America standing plus 494 sitting is a specific spine. Bloomington patients often come after a holiday-season shift or after a 35W rear-end that the ER called “soft tissue.” We are north of 494, not in the mall orbit, and parking is simpler.",
    typical:
      "Retail standing, airport-adjacent shift work, and lumbar strain after the MOA concrete. Hip tightness from 35W is the commute story.",
    hospital: "M Health Fairview or Fairview Southdale, depending on the campus they already use",
  },
  burnsville: {
    corridor: "I-35W north to 62 west, then Highway 100",
    note: "Burnsville Center and the 35W/35E split mean this is a planned drive, not a lunch-hour pop-in. We see a lot of people who already tried the south-metro chains and wanted a doctor, not a mill.",
    typical:
      "Retail and warehouse standing, 35W stiffness, and low-back pain after the Burnsville trails in worn trainers.",
    hospital: "M Health Fairview Ridges Hospital",
  },
  eagan: {
    corridor: "I-35E or 77 to 62 west, then Highway 100",
    note: "Eagan’s office parks and the 35E/77 mix create long sits and sudden weekend sports. The Premium Outlets standing days show up too. Plan on about half an hour; we use that time for a real exam.",
    typical:
      "Corporate-campus sitting, weekend soccer sidelines, and neck pain from the 35E merge.",
    hospital: "Fairview Ridges or Southdale, depending on which side of 35 they already use",
  },
  "apple-valley": {
    corridor: "Cedar Avenue / 77 north to 62 west, then 100",
    note: "The Zoo is the landmark people joke about; the real story is Cedar Avenue traffic. Apple Valley patients make a dedicated trip. We send home work that survives a Dakota County week, not a fantasy of daily visits.",
    typical:
      "Cedar Avenue sits, walking the zoo loops with kids, and low-back flare-ups after a week of hybrid-desk plus youth sports.",
    hospital: "Fairview Ridges in Burnsville",
  },
  lakeville: {
    corridor: "I-35 north to 62 west, then Highway 100",
    note: "Lake Marion and I-35 make this one of the longer south-metro drives. Lakeville patients usually come because a family member already did, not because they saw an ad. We treat the visit accordingly.",
    typical:
      "Growing-suburb youth sports, I-35 stiffness, and hip pain after Lake Marion walking in the same shoes they commute in.",
    hospital: "Fairview Ridges, then this office for a second look",
  },
  savage: {
    corridor: "Highway 13 to 35W or 169, then 62/100",
    note: "Hidden Valley and the 13 corridor are the map. Savage patients often work in Bloomington or Eden Prairie and live south of the river. The clinic is on the way home if you already use 169 or 100.",
    typical:
      "River-crossing commutes, park-run overuse, and mid-back tightness from laptops in the passenger seat of the school run.",
    hospital: "Fairview Ridges or St. Francis in Shakopee",
  },
  "prior-lake": {
    corridor: "County 42 to 169 north, or 13 to 35W, then west to 100",
    note: "Mystic Lake traffic is real; so is the lake-town weekend. Prior Lake patients usually pick a weekday morning. We do not schedule you like you live on Excelsior.",
    typical:
      "Hospitality shifts, boat and dock work, and lumbar strain after a week of 169 plus a Saturday of guests.",
    hospital: "St. Francis Regional Medical Center in Shakopee",
  },
  shakopee: {
    corridor: "Highway 169 north to 62 or 394, then Highway 100",
    note: "Valleyfair season and downtown Shakopee are two different spines: standing all day, then sitting in 169 traffic. We see both. The first visit is built for Scott County, not a west-metro fantasy schedule.",
    typical:
      "Seasonal standing work, 169 commuting, and low-back pain after a week in production or warehouse roles.",
    hospital: "St. Francis Regional Medical Center",
  },
  farmington: {
    corridor: "Highway 3 or 50 to 35W/77, then 62 west to 100",
    note: "Downtown Farmington is a genuine drive. People who come usually want a doctor who will look at the whole pattern, not a coupon clinic. We keep the plan realistic for Dakota County miles.",
    typical:
      "Long south-metro sits, farm and yard work, and necks that started as “just the truck” and became daily headaches.",
    hospital: "Fairview Ridges or Regina in Hastings if they already use that campus",
  },
  rosemount: {
    corridor: "Highway 3 / 149 to 77 or 35E, then 62 west to 100",
    note: "Rosemount High and the 3 corridor are the local map. This is a planned appointment. We would rather see you well once than invent a weekly drive you will cancel.",
    typical:
      "Youth-sports parental backs, highway sits, and plantar pain after adding miles on suburban trails.",
    hospital: "Fairview Ridges",
  },
  "inver-grove-heights": {
    corridor: "Highway 52 or 55 to I-494, then west toward 100",
    note: "Inver Hills and the 52 corridor mean a longer east-south mix. Patients often work in St. Paul or Bloomington. We plan the visit around that commute so you are not stacking errands forever.",
    typical:
      "52 / 494 stiffness, campus walking, and hip tightness after a week that mixed warehouse floors with a long sit home.",
    hospital: "United or Regions if they already use St. Paul campuses",
  },
  "mendota-heights": {
    corridor: "Highway 62 west the whole way to Highway 100, or 55 to 62",
    note: "Fort Snelling and the airport overlay make Mendota Heights patients already comfortable on 62. The clinic is a straight west shot. We still do the full exam — easy geography is not a shortcut.",
    typical:
      "62 commute necks, airport-adjacent shift work, and walking the river bluffs in dress shoes.",
    hospital: "Fairview Southdale or United, depending on insurance",
  },
  "west-saint-paul": {
    corridor: "Robert Street to I-494 or 62 west, then Highway 100",
    note: "Thompson Park and Robert Street are the landmarks. West St. Paul patients often work in downtown St. Paul and live just south of the river. The west-metro clinic is a dedicated trip; we make it count.",
    typical:
      "Robert Street retail standing, downtown sits, and winter hills that punish knees and low backs.",
    hospital: "United Hospital across the river",
  },
  "south-saint-paul": {
    corridor: "I-494 west to Highway 100, or Concord to 494",
    note: "Kaposia Landing walks plus 494 sits are the chart. South St. Paul patients usually come after a family referral, not a billboard. We keep the first visit honest about the drive.",
    typical:
      "River-road walking, industrial and warehouse shifts, and neck pain from 494.",
    hospital: "United or Regions",
  },
  "maple-grove": {
    corridor: "I-94 or 169 south to I-394, then Highway 100",
    note: "Arbor Lakes is the landmark; the clinic is a southbound 169/394 decision. Maple Grove has plenty of clinics. People who drive here usually want a specific doctor, not another storefront in the Shoppes.",
    typical:
      "Retail standing at Arbor Lakes, 94 / 169 sits, and youth-sports sideline backs.",
    hospital: "Maple Grove Hospital, then this office if they want a different approach",
  },
  "brooklyn-park": {
    corridor: "Highway 169 or 81 south to 394, then 100",
    note: "Brooklyn Park is big; the drive is not tiny. Patients often work the 169 corridor and live north of 610. We plan visits that respect that, including home work you can do without a gym.",
    typical:
      "Warehouse and production shifts, 169 stiffness, and low-back pain after a week on concrete.",
    hospital: "North Memorial or Maple Grove Hospital",
  },
  "brooklyn-center": {
    corridor: "I-94 or Highway 100 south to Excelsior",
    note: "The river trail and the 94/100 mix put Brooklyn Center closer than people think. Some patients come on the way home from a Minneapolis shift. Parking at Suite 201 is easier than the North Loop.",
    typical:
      "94 commute necks, trail walking, and standing retail along the Brookdale stretch.",
    hospital: "North Memorial in Robbinsdale",
  },
  champlin: {
    corridor: "Highway 169 south to 394, then Highway 100",
    note: "Mississippi Point is the landmark. Champlin patients are used to 169. We do not sell a fantasy of three visits a week from Anoka County; we sell a plan you can keep.",
    typical:
      "River-town walking, 169 sits, and hip tightness after a week of hybrid work plus weekend yard projects.",
    hospital: "Mercy Hospital in Coon Rapids / Anoka",
  },
  osseo: {
    corridor: "Highway 169 or 81 south toward 394 and 100",
    note: "Downtown Osseo is small; the surrounding grid is not. Patients often live in the Maple Grove / Brooklyn Park smear and still say Osseo. We treat the actual commute, not the city-limit sign.",
    typical:
      "Short-town walking plus long corridor sits, and necks from looking down at shop counters all day.",
    hospital: "Maple Grove Hospital or North Memorial",
  },
  anoka: {
    corridor: "Highway 10 or 169 south, then 394 to 100",
    note: "Halloween Capital energy aside, Anoka patients make a real north-metro drive. We keep the first visit thorough because you did not come for a coupon. Rum River walks and 10 / 169 sits live in the same spine.",
    typical:
      "Downtown standing events, highway commuting, and low-back pain after a week in production or county-shift work.",
    hospital: "Mercy Hospital",
  },
  "coon-rapids": {
    corridor: "Highway 10 or 47 to 694/94, then west toward 394 and 100",
    note: "The Coon Rapids Dam trail is lovely and unforgiving on hips if you already sit at a desk. Patients usually come after they have tried the local options. Plan on a dedicated appointment.",
    typical:
      "Trail overuse, 10 corridor sits, and shift-work backs from the Mercy orbit.",
    hospital: "Mercy Hospital in Coon Rapids",
  },
  blaine: {
    corridor: "I-35W south to 694/94 west, or 65 to 694, then 394 to 100",
    note: "The National Sports Center means Blaine charts include both athletes and the parents who sit in cold bleachers. This is not a five-minute drive. We plan care you can run from Anoka County.",
    typical:
      "Tournament weekends, 35W stiffness, and necks from looking down at phones in pickup lines.",
    hospital: "Mercy or M Health Fairview in the north-metro campuses",
  },
  andover: {
    corridor: "Highway 65 or 47 south to 694, then west to 394 and 100",
    note: "Bunker Hills is the weekend; 65 is the weekday. Andover patients who come here usually want a doctor who will look at both. We do not pretend this is local.",
    typical:
      "Park-reserve hiking, long 65 sits, and low-back pain after a week of remote work in a dining chair.",
    hospital: "Mercy Hospital",
  },
  "ham-lake": {
    corridor: "Highway 65 south to 694, then west toward 100",
    note: "Coon Lake weekends plus 65 weekdays. Ham Lake patients are used to driving. We respect that with a first visit that produces a plan, not a sales stack.",
    typical:
      "Lake-property work, highway sits, and sciatica after a weekend of guests and extra lifting.",
    hospital: "Mercy Hospital",
  },
  "lino-lakes": {
    corridor: "I-35E or 35W south to 694, then west to 394 and 100",
    note: "Rice Creek chain walking is the local joy and the local overuse. Lino Lakes patients often work in the north-metro office parks. The clinic is a planned west-metro stop.",
    typical:
      "Trail miles, 35E sits, and neck pain from looking at monitors in windowless offices.",
    hospital: "M Health Fairview or Mercy, depending on campus",
  },
  centerville: {
    corridor: "I-35E south to 694 west, then 394 to 100",
    note: "Peltier Lake is the landmark. Centerville is small; the drive is not. People who come usually already decided they want this clinic. We do not waste the trip.",
    typical:
      "Lake-town walking, 35E commuting, and mid-back tightness from hybrid work.",
    hospital: "Fairview or Regions if they already use those campuses",
  },
  "spring-lake-park": {
    corridor: "Highway 65 or I-35W south, then 694/94 west toward 100",
    note: "Springbrook Nature Center walks plus the 65/35W mix. Spring Lake Park is closer than Blaine; patients still treat it as a dedicated visit. We keep the exam full.",
    typical:
      "Nature-center miles, corridor sits, and standing retail along the 65 strip.",
    hospital: "North Memorial or Mercy",
  },
  "mounds-view": {
    corridor: "I-35W south to 694/94, then west to 394 and 100",
    note: "Silver View Park and the 10 / 35W smear. Mounds View patients often work in Roseville or downtown. The west-metro clinic is a choice, not the default. We treat it like one.",
    typical:
      "Park walking, 35W stiffness, and necks from looking down at warehouse scanners.",
    hospital: "M Health Fairview in the north-metro or United",
  },
  "new-brighton": {
    corridor: "I-35W or 694 to 94 west, then 394 to 100",
    note: "Long Lake Regional Park is the weekend; 35W is the week. New Brighton is closer than people who live “north” assume. Some patients come on the way home from Minneapolis.",
    typical:
      "Park loops, 35W sits, and low-back pain after a week of hybrid desks.",
    hospital: "M Health Fairview or United",
  },
  "saint-anthony": {
    corridor: "I-35W or Stinson to 94 west, then 394 to 100 — or Highway 100 south from 694",
    note: "Silver Lake and the Minneapolis/Ramsey line put Saint Anthony closer than a map-app “north metro” label. Many patients already drive 100 or 94. The clinic is a west hop, not an expedition.",
    typical:
      "Lake walking, city-edge commuting, and desk necks from the industrial/office mix along Stinson.",
    hospital: "University or HCMC if they already use Minneapolis campuses",
  },
  fridley: {
    corridor: "I-694 or 65 to 94/100 south",
    note: "Locke Park and the river industrial strip. Fridley patients often work shifts and need a visit that does not assume a 9-to-5. We will say so if a plan needs daytime frequency they cannot keep.",
    typical:
      "Shift-work backs, 694 sits, and winter falls on the river-adjacent sidewalks.",
    hospital: "Unity / Mercy north-metro campuses, or North Memorial",
  },
  "columbia-heights": {
    corridor: "Highway 65 or 35W to 94 west, then 394 to 100",
    note: "Sullivan Lake is the landmark. Columbia Heights is a short city-edge drive if 35W is moving. Patients often work in Minneapolis and live just north. Parking here is easier than downtown.",
    typical:
      "City-edge commuting, lake walking, and standing retail along 65.",
    hospital: "HCMC or North Memorial",
  },
  shoreview: {
    corridor: "I-694 to I-94 west, then 394 to Highway 100",
    note: "Snail Lake loops plus 694 sits. Shoreview patients usually work in Roseville, Arden Hills, or downtown. This is a planned west-metro appointment. We send home work that fits a lake-suburb week.",
    typical:
      "Park-reserve walking, 694 stiffness, and neck pain from looking at two monitors all day.",
    hospital: "M Health Fairview or United",
  },
  "arden-hills": {
    corridor: "I-694 or Highway 51 to 94 west, then 394 to 100",
    note: "Bethel and the TCAAP-adjacent roads mean Arden Hills charts mix campus walking with long corridor sits. Patients often already use Roseville clinics; they come here for a different doctor, not a closer door.",
    typical:
      "Campus walking, 694 commuting, and mid-back tightness from lecture-hall and office chairs.",
    hospital: "M Health Fairview campuses in the north-central metro",
  },
  "north-oaks": {
    corridor: "Highway 96 to 35E or 694, then west to 394 and 100",
    note: "Pleasant Lake is the landmark. North Oaks patients are used to driving for everything. We do not sell volume care. The first visit is an evaluation with a plan you can run from a gated lake suburb.",
    typical:
      "Lake-path walking, long sits, and hip tightness after a week of quiet remote work plus a weekend of guests.",
    hospital: "M Health Fairview or United",
  },
  "vadnais-heights": {
    corridor: "I-35E or 694 west toward 94, then 394 to 100",
    note: "Vadnais Lake Regional Park is the weekend story. Vadnais Heights patients often work the 35E office parks. The clinic is a dedicated trip; we keep the plan realistic.",
    typical:
      "Park-reserve miles, 35E sits, and plantar pain after adding trail miles in old trainers.",
    hospital: "M Health Fairview or Regions",
  },
  "white-bear-lake": {
    corridor: "Highway 61 or 96 to 35E/694, then west to 394 and 100",
    note: "The lake is the identity and the overuse. White Bear patients who drive this far usually already tried closer options. We respect the trip with a full exam and homework that fits a lake-town week.",
    typical:
      "Lake walking and biking, downtown standing, and necks from 61 / 694 commuting.",
    hospital: "M Health Fairview or Lakeview in Stillwater if they already use the east side",
  },
  roseville: {
    corridor: "Highway 36 or I-35W to I-94 west, then 394 to 100",
    note: "Rosedale standing plus 36 sits is a Roseville chart. The drive is shorter than east-metro neighbors. Some patients come after a Rosedale shift. We still do the full first visit.",
    typical:
      "Mall standing, 36 / 35W stiffness, and desk necks from the office parks along Snelling.",
    hospital: "M Health Fairview or United",
  },
  "falcon-heights": {
    corridor: "Snelling to I-94 west, then 394 to Highway 100",
    note: "State Fair season is its own injury pattern: miles of walking, then a week of sitting. The rest of the year is campus and Snelling traffic. We are a west shot from the Fairgrounds, not a fair-week pop-up.",
    typical:
      "Fairgrounds walking, Snelling sits, and necks from looking down at campus laptops.",
    hospital: "University of Minnesota campuses or United",
  },
  lauderdale: {
    corridor: "I-94 west to 394, then Highway 100 south to Excelsior",
    note: "The St. Paul campus edge is the landmark. Lauderdale is small and close to 94. Patients often work at the U and live in a tiny grid. The west-metro clinic is a choice for a specific doctor.",
    typical:
      "Campus walking, 94 sits, and mid-back tightness from lab stools and library chairs.",
    hospital: "University of Minnesota Medical Center",
  },
  maplewood: {
    corridor: "I-94 west the whole way, then 394 to Highway 100",
    note: "Maplewood Mall standing plus 94 sits. Maplewood patients who come here have usually decided against another east-side mill. We plan care you can keep from Ramsey County.",
    typical:
      "Mall and retail standing, 94 commuting, and low-back pain after a week on concrete.",
    hospital: "M Health Fairview St. John’s in Maplewood",
  },
  oakdale: {
    corridor: "I-94 west to 394, then Highway 100",
    note: "Tanners Lake is the landmark. Oakdale patients are already on 94. The clinic is the westbound decision, not a mystery. We still treat the first visit as a full evaluation.",
    typical:
      "Lake-path walking, 94 stiffness, and necks from looking down at warehouse or office screens.",
    hospital: "M Health Fairview or Woodwinds in Woodbury",
  },
  woodbury: {
    corridor: "I-94 west across the metro to 394 and Highway 100",
    note: "Woodbury Lakes walking plus 94 sits. This is one of the longer east-metro drives. People who make it usually want a specific clinician. We do not invent a three-times-a-week plan you will hate by week two.",
    typical:
      "Retail walking, 94 commuting, and hip tightness after a week of hybrid desks plus youth sports.",
    hospital: "M Health Fairview Woodwinds Hospital",
  },
  "cottage-grove": {
    corridor: "Highway 61 or 10 to I-94 west, then 394 to 100",
    note: "Old Cottage Grove and the 61 corridor. This is a genuine east-south drive. We are honest about it. The first visit is built so the next month can happen from Washington County.",
    typical:
      "Highway 61 sits, river-town walking, and low-back pain after a week in production or warehouse roles.",
    hospital: "Woodwinds or Regions",
  },
  "saint-paul-park": {
    corridor: "Highway 61 to I-494/94 west, then 394 to 100",
    note: "Heritage Days aside, Saint Paul Park patients make a real trip. We keep the plan realistic and the exam complete. River-town hills plus 61 traffic live in the same neck.",
    typical:
      "River-road walking, 61 commuting, and standing work along the industrial strip.",
    hospital: "Regions or United",
  },
  newport: {
    corridor: "I-494 west to Highway 100, or 61 to 494",
    note: "Pig’s Eye and the 494 bridge are the mental map. Newport is small; the drive is not nothing. Patients usually come with a St. Paul workday already in the calendar.",
    typical:
      "494 sits, river-adjacent walking, and mid-back tightness from mixed sitting and lifting jobs.",
    hospital: "United or Regions",
  },
  "lake-elmo": {
    corridor: "I-94 west, or Highway 5 to 94, then 394 to 100",
    note: "Lake Elmo Park Reserve is the weekend and the overuse. Patients who drive from here usually already like trails more than treadmills. We look at the shoes, the sit, and the reserve miles together.",
    typical:
      "Park-reserve hiking, 94 commuting, and plantar or knee pain after adding miles too fast.",
    hospital: "Lakeview in Stillwater or Woodwinds",
  },
  mahtomedi: {
    corridor: "Highway 244 / 96 to 694 or 94 west, then 394 to 100",
    note: "Wildwood and the White Bear shoreline. Mahtomedi patients often share a household with White Bear Lake. The west-metro clinic is a choice. We keep the visit worth the choice.",
    typical:
      "Lake walking, school-run necks, and 694 stiffness.",
    hospital: "Lakeview or M Health Fairview",
  },
  stillwater: {
    corridor: "Highway 36 or I-94 west across the metro to 394 and 100",
    note: "The St. Croix riverfront is steep, charming, and hard on knees. Stillwater patients who come this far usually want a doctor, not another Main Street storefront. We plan care you can run from Washington County, including the weeks you stay on the river.",
    typical:
      "Hill walking, downtown standing, and 36 / 94 sits after a full day on your feet.",
    hospital: "Lakeview Hospital in Stillwater",
  },
  bayport: {
    corridor: "Highway 95 to 36 or 94 west, then 394 to 100",
    note: "Andersen and the river industrial stretch. Bayport patients often work shifts. We will not write a plan that assumes you can leave the line three times a week.",
    typical:
      "Plant and shift-work backs, river-town walking, and necks from looking down at production screens.",
    hospital: "Lakeview Hospital",
  },
  "north-saint-paul": {
    corridor: "Highway 36 or I-694 to I-94 west, then 394 to 100",
    note: "Silver Lake and the 36 corridor. North St. Paul is closer than Woodbury; patients still treat it as a dedicated visit. We keep the exam full and the homework practical.",
    typical:
      "Lake walking, 36 sits, and standing retail along the Margaret / 36 mix.",
    hospital: "St. John’s in Maplewood",
  },
  hugo: {
    corridor: "I-35E south to 694/94 west, then 394 to 100",
    note: "Oneka Lake country plus 35E. Hugo patients are used to driving south for anything specialized. We do not pad the plan with visits you will cancel when 35E is a parking lot.",
    typical:
      "Lake-property work, 35E commuting, and low-back pain after a week of sitting plus a weekend of projects.",
    hospital: "Fairview or Regions",
  },
  "forest-lake": {
    corridor: "I-35 south to 694/94 west, then 394 to Highway 100",
    note: "Forest Lake itself is the landmark and the longest north-metro drive we routinely see. People who come usually already decided. The first visit is an evaluation and a plan you can keep when you stay in Washington / Anoka County most weeks.",
    typical:
      "Lake-town walking, I-35 stiffness, and hip tightness after a week of highway miles plus weekend guests.",
    hospital: "Fairview Lakes or Mercy, depending on which campus they already use",
  },
};

export function localFact(city: Pick<ServedCity, "slug" | "name" | "landmark" | "region">): CityLocalFact {
  const found = FACTS[city.slug];
  if (found) return found;
  return {
    corridor: `the main Twin Cities highways toward Saint Louis Park from the ${city.region}`,
    note: `${city.name} patients are seen at our Saint Louis Park clinic near ${city.landmark}. The first visit is built as a dedicated appointment, not a drop-in.`,
    typical: `Commute stiffness and the weekend pattern around ${city.landmark}.`,
    hospital: "Park Nicollet Methodist Hospital on Excelsior Blvd",
  };
}
