/**
 * Changelog API Client
 * Matches the original Flutter app's changelog remote datasource
 * Implements Firebase Firestore integration like ChangelogRemoteDataSourceImpl
 */

import { collection, getDocs, query, orderBy, type DocumentData } from "firebase/firestore";
import { getFirestoreDb } from "@/lib/firebase";
import type { Changelog, ChangelogFirestoreDoc } from "@/types/changelog";

/**
 * Fetches changelog data from Firebase Firestore
 * Matches: ChangelogRemoteDataSource.getChangelog()
 * Collection: 'changelog' (same as Flutter app)
 */
export async function fetchChangelogs(): Promise<Changelog[]> {
  try {
    const db = getFirestoreDb();
    const changelogRef = collection(db, "changelog");
    const q = query(changelogRef, orderBy("date", "desc"));
    const snapshot = await getDocs(q);

    const changelogs: Changelog[] = snapshot.docs.map((doc) => {
      const data = doc.data() as ChangelogFirestoreDoc;
      return {
        version: data.version || null,
        date: data.date ? new Date(data.date.seconds * 1000) : null,
        special_thanks: data.special_thanks || null,
        update_changes: data.update_changes || null,
      };
    });

    return changelogs;
  } catch (error) {
    console.error("Error fetching changelogs from Firestore:", error);
    throw new Error("Failed to fetch changelogs from Firebase");
  }
}

/**
 * Fetches a single changelog by version
 */
export async function fetchChangelogByVersion(version: string): Promise<Changelog | null> {
  try {
    const changelogs = await fetchChangelogs();
    return changelogs.find((changelog) => changelog.version === version) || null;
  } catch (error) {
    console.error(`Error fetching changelog for version ${version}:`, error);
    throw error;
  }
}

/**
 * Gets recent changelogs (last n versions)
 */
export function getRecentChangelogs(changelogs: Changelog[], count: number): Changelog[] {
  return changelogs.slice(0, count);
}
