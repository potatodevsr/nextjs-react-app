"use client";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      {error.message}{" "}
      <button onClick={reset} className="bg-red-500 border-spacing-20">
        Try again
      </button>
    </div>
  );
}
