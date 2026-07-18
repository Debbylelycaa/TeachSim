export default function Card({ children, className = '' }) {
  return (
    <div
      className={`
        w-full bg-white rounded-2xl border border-slate-200
        shadow-sm shadow-slate-200/50
        p-6 sm:p-8
        ${className}
      `}
    >
      {children}
    </div>
  )
}
