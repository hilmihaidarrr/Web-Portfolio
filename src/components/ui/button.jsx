export function Button({ asChild, variant = "default", className = "", children, ...props }) {
  const base = "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium border transition";
  const styles = variant === "outline"
    ? "bg-white border-gray-300 text-gray-900 hover:bg-gray-50"
    : "bg-gray-900 border-gray-900 text-white hover:opacity-90";
  if (asChild) return <span className={`${base} ${styles} ${className}`} {...props}>{children}</span>;
  return <button className={`${base} ${styles} ${className}`} {...props}>{children}</button>;
}
