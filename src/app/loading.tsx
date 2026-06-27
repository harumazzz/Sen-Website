import LoadingIndicator from "@/components/ui/loading-indicator";

/**
 * Loading component for page-level lazy loading.
 * Uses the unified LoadingIndicator spinner (inherits theme color via currentColor).
 */
export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <LoadingIndicator size={40} />
    </div>
  );
}
