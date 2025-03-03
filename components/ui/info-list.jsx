export function InfoItem({ icon, label, value, href }) {
  const content = (
    <div className="flex items-start gap-2">
      <div className="text-primary mt-1">{icon}</div>
      <div>
        {value ? (
          <>
            <p className="text-gray-500 text-sm">{label}</p>
            <p className="font-medium">{value}</p>
          </>
        ) : (
          <p className="font-medium">{label}</p>
        )}
      </div>
    </div>
  )

  if (href) {
    return (
      <a href={href} className="hover:text-primary transition-colors">
        {content}
      </a>
    )
  }

  return content
}

export function InfoList({ items, className = "" }) {
  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item, index) => (
        <InfoItem key={index} {...item} />
      ))}
    </div>
  )
}

