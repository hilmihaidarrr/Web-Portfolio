export function Card({ className = "", children }) {
  return <div className={`bg-white border rounded-2xl shadow-sm ${className}`}>{children}</div>;
}
export function CardContent({ className = "", children }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}
