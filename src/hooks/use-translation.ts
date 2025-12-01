import { useTranslations } from "next-intl";

export function useTranslation() {
  return useTranslations();
}

export function useNamespacedTranslation(ns: string) {
  return useTranslations(ns);
}
