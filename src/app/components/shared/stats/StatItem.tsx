interface StatItemProps {
  title: string
  value: string | number
  bgColor: string
  textColor: string
  icon: React.ReactNode
}

export default function StatItem({
  title,
  value,
  bgColor,
  textColor,
  icon,
}: StatItemProps) {
  return (
    <div className={`relative overflow-hidden ${bgColor} rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
      <div className="flex items-center justify-between relative z-10">
        <div>
          <p className={`text-sm font-medium ${textColor}`}>{title}</p>
          <p className="text-3xl font-bold text-white mt-1">{value}</p>
        </div>

        <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
          {icon}
        </div>
      </div>

      <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full"></div>
      <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/5 rounded-full"></div>
    </div>
  )
}
