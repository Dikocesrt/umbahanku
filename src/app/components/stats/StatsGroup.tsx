import StatItem from "./StatItem"

interface StatsData {
    title: string
    value: string | number
    bgColor: string
    textColor: string
    icon: React.ReactNode
}

interface StatsGroupProps {
    stats: StatsData[]
}

export default function StatsGroup({ stats }: StatsGroupProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">


            {stats.map((item, index) => (
                <StatItem
                    key={index}
                    title={item.title}
                    value={item.value}
                    bgColor={item.bgColor}
                    textColor={item.textColor}
                    icon={item.icon}
                />
            ))}
        </div>
    )
}
