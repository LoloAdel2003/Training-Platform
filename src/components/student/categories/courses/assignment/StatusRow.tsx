// components/assignment/status-row.tsx
interface StatusRowProps {
  label: string;
  value: React.ReactNode;
  isLast?: boolean;
}

export const StatusRow = ({ label, value, isLast }: StatusRowProps) => (
  <div className={`grid grid-cols-2 p-4 ${!isLast ? 'border-b border-border' : ''}`}>
    <span className="font-semibold text-foreground/80">{label}</span>
    <span className="text-muted-foreground">{value}</span>
  </div>
);