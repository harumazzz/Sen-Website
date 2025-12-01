/**
 * Changelog Types (matches Firebase structure from Flutter app)
 * Mirrors the structure from old/lib/features/changelog/domain/entities/changelog.dart
 */

export interface Changelog {
  version: string | null;
  date: Date | null;
  special_thanks: string[] | null;
  update_changes: string[] | null;
}

/**
 * Firestore Document Response (matches DateConverter from Flutter)
 */
export interface ChangelogFirestoreDoc {
  version: string;
  date: {
    seconds: number;
    nanoseconds: number;
  };
  special_thanks: string[];
  update_changes: string[];
}
