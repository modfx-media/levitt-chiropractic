import { aboutChiropracticDefaults } from "./defaults/aboutChiropractic";
import { aboutDefaults } from "./defaults/aboutDefaults";
import { adjustmentsDefaults } from "./defaults/adjustmentsDefaults";
import { alternativeMedicineDefaults } from "./defaults/alternativeMedicineDefaults";
import { appointmentRequestDefaults } from "./defaults/appointmentRequest";
import { areaCityDefaults } from "./defaults/areaCity";
import { areaServiceDefaults } from "./defaults/areaService";
import { areasWeServeDefaults } from "./defaults/areasWeServe";
import { backPainTreatmentsDefaults } from "./defaults/backPainTreatmentsDefaults";
import { blogIndexDefaults } from "./defaults/blogIndex";
import { coldLaserTherapyDefaults } from "./defaults/coldLaserTherapyDefaults";
import { commonChiropracticConditionsDefaults } from "./defaults/commonChiropracticConditionsDefaults";
import { contactDefaults } from "./defaults/contact";
import { cryotherapyDefaults } from "./defaults/cryotherapyDefaults";
import { customFootOrthoticsDefaults } from "./defaults/customFootOrthoticsDefaults";
import { degenerativeDiscDiseaseDefaults } from "./defaults/degenerativeDiscDiseaseDefaults";
import { functionalMedicineDefaults } from "./defaults/functionalMedicineDefaults";
import { goodFaithEstimateDefaults } from "./defaults/goodFaithEstimate";
import { hipaaPolicyDefaults } from "./defaults/hipaaPolicy";
import { homeDefaults } from "./defaults/homeDefaults";
import { icePackCryotherapyDefaults } from "./defaults/icePackCryotherapyDefaults";
import { meetTheDoctorDefaults } from "./defaults/meetTheDoctorDefaults";
import { neckPainDefaults } from "./defaults/neckPainDefaults";
import { newPatientCenterDefaults } from "./defaults/newPatientCenterDefaults";
import { privacyPolicyDefaults } from "./defaults/privacyPolicy";
import { qaDefaults } from "./defaults/qa";
import { resourcesHubDefaults } from "./defaults/resourcesHub";
import { servicesDefaults } from "./defaults/servicesDefaults";
import { siteMapDefaults } from "./defaults/siteMap";
import { termsOfUseDefaults } from "./defaults/termsOfUse";
import { testimonialsDefaults } from "./defaults/testimonialsDefaults";
import { therapeuticExerciseDefaults } from "./defaults/therapeuticExerciseDefaults";
import { wellnessTipsDefaults } from "./defaults/wellnessTips";
import { whatToExpectDefaults } from "./defaults/whatToExpectDefaults";

/** Designed section props for every static route, keyed by public path. */
export const designedPages: Record<string, Record<string, unknown>> = {
  "/": homeDefaults,
  "/about": aboutDefaults,
  "/meet-the-doctor": meetTheDoctorDefaults,
  "/testimonials": testimonialsDefaults,
  "/new-patient-center": newPatientCenterDefaults,
  "/new-patient-center/what-to-expect": whatToExpectDefaults,
  "/services": servicesDefaults,
  "/adjustments-and-manipulation": adjustmentsDefaults,
  "/alternative-medicine": alternativeMedicineDefaults,
  "/back-pain-treatments": backPainTreatmentsDefaults,
  "/cold-laser-therapy": coldLaserTherapyDefaults,
  "/common-chiropractic-conditions": commonChiropracticConditionsDefaults,
  "/cryotherapy": cryotherapyDefaults,
  "/custom-foot-orthotics": customFootOrthoticsDefaults,
  "/degenerative-disc-disease": degenerativeDiscDiseaseDefaults,
  "/functional-medicine": functionalMedicineDefaults,
  "/ice-pack-cryotherapy": icePackCryotherapyDefaults,
  "/neck-pain": neckPainDefaults,
  "/therapeutic-exercise": therapeuticExerciseDefaults,
  "/contact": contactDefaults,
  "/contact/new-patient-appointment": appointmentRequestDefaults,
  "/contact/existing-patient-appointment": appointmentRequestDefaults,
  "/blog": blogIndexDefaults,
  "/areas-we-serve": areasWeServeDefaults,
  "/resources": resourcesHubDefaults,
  "/resources/about-chiropractic": aboutChiropracticDefaults,
  "/resources/qa": qaDefaults,
  "/resources/wellness-tips": wellnessTipsDefaults,
  "/site-map": siteMapDefaults,
  "/privacy-policy": privacyPolicyDefaults,
  "/terms-of-use": termsOfUseDefaults,
  "/hipaa-policy": hipaaPolicyDefaults,
  "/good-faith-estimate": goodFaithEstimateDefaults,
};

export const areaTemplates = {
  city: areaCityDefaults,
  service: areaServiceDefaults,
};
