type CheckIconProps = {
  className?: string;
};

export function CheckIcon({ className }: CheckIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className={`mt-0.5 h-4 w-4 shrink-0 ${className ?? ""}`}
      aria-hidden="true"
    >
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
