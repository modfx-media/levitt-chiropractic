import type { PseoSource } from "./types";

const A = "2026-11-23";
const wiki = (id: string, title: string, slug: string): PseoSource => ({ id, title, publisher: "Wikipedia", url: `https://en.wikipedia.org/wiki/${slug}`, accessed: A });
const pubmed = (id: string, title: string, pmid: string, journal: string): PseoSource => ({ id, title, publisher: `${journal} (PubMed ${pmid})`, url: `https://pubmed.ncbi.nlm.nih.gov/${pmid}/`, accessed: A });

/** Every source here was fetched on the accessed date while writing the hub copy. */
export const SRC = {
  edina: wiki("edina", "Edina, Minnesota", "Edina,_Minnesota"),
  southdale: wiki("southdale", "Southdale Center", "Southdale_Center"),
  hopkins: wiki("hopkins", "Hopkins, Minnesota", "Hopkins,_Minnesota"),
  goldenValley: wiki("golden-valley", "Golden Valley, Minnesota", "Golden_Valley,_Minnesota"),
  wirthWiki: wiki("wirth-wiki", "Theodore Wirth Park", "Theodore_Wirth_Park"),
  wirthMprb: { id: "wirth-mprb", title: "Theodore Wirth Regional Park", publisher: "Minneapolis Park & Recreation Board", url: "https://www.minneapolisparks.org/parks-destinations/parks-lakes/theodore_wirth_regional_park/", accessed: A },
  minneapolis: wiki("minneapolis", "Minneapolis", "Minneapolis"),
  bdeMakaSka: { id: "bde-maka-ska", title: "Bde Maka Ska Park: trails, swimming and things to do", publisher: "Minneapolis Park & Recreation Board", url: "https://www.minneapolisparks.org/parks-destinations/parks-lakes/bde_maka_ska_park/", accessed: A },
  cedarLake: wiki("cedar-lake-trail", "Cedar Lake Trail", "Cedar_Lake_Trail"),
  richfield: wiki("richfield", "Richfield, Minnesota", "Richfield,_Minnesota"),
  woodLake: wiki("wood-lake", "Wood Lake Nature Center", "Wood_Lake_Nature_Center"),
  minnetonka: wiki("minnetonka", "Minnetonka, Minnesota", "Minnetonka,_Minnesota"),
  ridgedale: wiki("ridgedale", "Ridgedale Center", "Ridgedale_Center"),
  minnehaha: wiki("minnehaha-creek", "Minnehaha Creek", "Minnehaha_Creek"),
  robbinsdale: wiki("robbinsdale", "Robbinsdale, Minnesota", "Robbinsdale,_Minnesota"),
  hwy100: wiki("hwy-100", "Minnesota State Highway 100", "Minnesota_State_Highway_100"),
  rubinstein: pubmed("rubinstein-2019", "Rubinstein SM et al. Benefits and harms of spinal manipulative therapy for the treatment of chronic low back pain: systematic review and meta-analysis", "30867144", "BMJ 2019"),
  qaseem: pubmed("qaseem-2017", "Qaseem A et al. Noninvasive treatments for acute, subacute, and chronic low back pain: a clinical practice guideline from the American College of Physicians", "28192789", "Ann Intern Med 2017"),
  paige: pubmed("paige-2017", "Paige NM et al. Association of spinal manipulative therapy with clinical benefit and harm for acute low back pain", "28399251", "JAMA 2017"),
  chow: pubmed("chow-2009", "Chow RT et al. Efficacy of low-level laser therapy in the management of neck pain: a systematic review and meta-analysis", "19913903", "Lancet 2009"),
  gross: pubmed("gross-2015", "Gross A et al. Manipulation and mobilisation for neck pain contrasted against an inactive control or another active treatment", "26397370", "Cochrane Database Syst Rev 2015"),
  bronfort: pubmed("bronfort-2012", "Bronfort G et al. Spinal manipulation, medication, or home exercise with advice for acute and subacute neck pain: a randomized trial", "22213489", "Ann Intern Med 2012"),
  cote: pubmed("cote-2008", "Côté P et al. The burden and determinants of neck pain in workers: Bone and Joint Decade 2000–2010 Task Force", "18204402", "Spine 2008"),
} satisfies Record<string, PseoSource>;
