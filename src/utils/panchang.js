import { MakeTime, Body, GeoVector, Ecliptic } from 'astronomy-engine';

// Approximate Lahiri Ayanamsa for the year
function getAyanamsa(year) {
  return 24.42 + (year - 2024) * 0.0139;
}

// Ensure angles are in 0-360 range
function normalizeAngle(angle) {
  let result = angle % 360;
  if (result < 0) result += 360;
  return result;
}

export function getPanchangForDate(date) {
  try {
    const time = MakeTime(date);
    const year = date.getFullYear();
    const ayanamsa = getAyanamsa(year);

    // Use GeoVector (geocentric) which does NOT need an Observer
    const sunVec = GeoVector(Body.Sun, time, true);
    const moonVec = GeoVector(Body.Moon, time, true);

    // Convert to ecliptic coordinates
    const sunEcliptic = Ecliptic(sunVec);
    const moonEcliptic = Ecliptic(moonVec);

    // Sidereal Longitudes
    const sunLon = normalizeAngle(sunEcliptic.elon - ayanamsa);
    const moonLon = normalizeAngle(moonEcliptic.elon - ayanamsa);

    // Tithi = floor((Moon - Sun) / 12) + 1
    const tithiDiff = normalizeAngle(moonLon - sunLon);
    const tithiNum = Math.min(30, Math.max(1, Math.floor(tithiDiff / 12) + 1));

    // Nakshatra = floor(Moon / 13.333) + 1
    const nakshatraNum = Math.min(27, Math.max(1, Math.floor(moonLon / (13 + 1 / 3)) + 1));

    // Yoga = floor((Sun + Moon) / 13.333) + 1
    const yogaDiff = normalizeAngle(sunLon + moonLon);
    const yogaNum = Math.min(27, Math.max(1, Math.floor(yogaDiff / (13 + 1 / 3)) + 1));

    // Karana = floor((Moon - Sun) / 6) + 1
    const karanaNum = Math.floor(tithiDiff / 6) + 1;

    return {
      tithi: tithiNum,
      nakshatra: nakshatraNum,
      yoga: yogaNum,
      karana: karanaNum,
      siderealSun: sunLon,
      siderealMoon: moonLon,
    };
  } catch (e) {
    console.warn('Panchang calculation failed for', date, e);
    return { tithi: 1, nakshatra: 1, yoga: 1, karana: 1, siderealSun: 0, siderealMoon: 0 };
  }
}

// Reference arrays for naming
export const tithiNames = [
  "Pratipada", "Dwitiya", "Tritiya", "Chaturthi", "Panchami", "Shashthi",
  "Saptami", "Ashtami", "Navami", "Dashami", "Ekadashi", "Dwadashi",
  "Trayodashi", "Chaturdashi", "Purnima", "Pratipada", "Dwitiya",
  "Tritiya", "Chaturthi", "Panchami", "Shashthi", "Saptami", "Ashtami",
  "Navami", "Dashami", "Ekadashi", "Dwadashi", "Trayodashi", "Chaturdashi", "Amavasya"
];

export const nakshatraNames = [
  "Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashirsha", "Ardra",
  "Punarvasu", "Pushya", "Ashlesha", "Magha", "Purva Phalguni", "Uttara Phalguni",
  "Hasta", "Chitra", "Swati", "Vishakha", "Anuradha", "Jyeshtha",
  "Mula", "Purva Ashadha", "Uttara Ashadha", "Shravana", "Dhanishta", "Shatabhisha",
  "Purva Bhadrapada", "Uttara Bhadrapada", "Revati"
];

export const yogaNames = [
  "Vishkambha", "Priti", "Ayushman", "Saubhagya", "Shobhana", "Atiganda",
  "Sukarma", "Dhriti", "Shula", "Ganda", "Vriddhi", "Dhruva",
  "Vyaghata", "Harshana", "Vajra", "Siddhi", "Vyatipata", "Variyana",
  "Parigha", "Shiva", "Siddha", "Sadhya", "Shubha", "Shukla",
  "Brahma", "Indra", "Vaidhriti"
];

export const karanaNames = [
  "Bava", "Balava", "Kaulava", "Taitila", "Gara", "Vanija", "Vishti",
  "Shakuni", "Chatushpada", "Naga", "Kintughna"
];

export function getPanchangStrings(date) {
  const data = getPanchangForDate(date);
  return {
    tithi: tithiNames[data.tithi - 1] || "Pratipada",
    nakshatra: nakshatraNames[data.nakshatra - 1] || "Ashwini",
    yoga: yogaNames[data.yoga - 1] || "Vishkambha",
    karana: karanaNames[(data.karana - 1) % 11] || "Bava",
  };
}
