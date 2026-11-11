type Props = { className?: string; filled?: boolean };

export default function Heart({ className, filled = true }: Props) {
  return (
    <svg className={className} viewBox="0 0 32 29" aria-hidden="true">
      <path
        d="M16 28.2 13.8 26.2C5.9 19.1 0.8 14.4 0.8 8.7 0.8 4 4.4 0.4 9 0.4c2.6 0 5.1 1.2 7 3.1 1.9-1.9 4.4-3.1 7-3.1 4.6 0 8.2 3.6 8.2 8.3 0 5.7-5.1 10.4-13 17.5L16 28.2Z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth={filled ? 0 : 1.2}
      />
    </svg>
  );
}
