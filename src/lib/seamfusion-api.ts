/**
 * SeamFusion API Client
 *
 * Build-time data fetching for Astro components.
 * All functions are safe — they never throw, returning null on failure.
 *
 * Environment variables (set as GitHub repository variables):
 *   PUBLIC_ACADEMY_ID — Firestore academy document ID
 *   PUBLIC_API_URL    — Cloud Functions base URL
 */

const API_URL = import.meta.env.PUBLIC_API_URL || '';
const ACADEMY_ID = import.meta.env.PUBLIC_ACADEMY_ID || '';

type Section = 'coaches' | 'programs' | 'branding' | 'gallery';

export interface AcademyData {
  branding?: Record<string, unknown>;
  coaches?: Array<Record<string, unknown>>;
  programs?: Array<Record<string, unknown>>;
  gallery?: Array<Record<string, unknown>>;
}

/**
 * Fetch public academy data at build time.
 * Returns null if the API is unreachable or env vars are missing.
 */
export async function fetchAcademyData(
  sections?: Section[]
): Promise<AcademyData | null> {
  if (!API_URL || !ACADEMY_ID) return null;

  try {
    const params = new URLSearchParams({ academyId: ACADEMY_ID });
    if (sections?.length) {
      params.set('sections', sections.join(','));
    }

    const res = await fetch(
      `${API_URL}/getPublicAcademyData?${params}`,
      { signal: AbortSignal.timeout(10_000) }
    );

    if (!res.ok) return null;
    return (await res.json()) as AcademyData;
  } catch {
    console.warn('[SeamFusion] API fetch failed — using static fallback data');
    return null;
  }
}
