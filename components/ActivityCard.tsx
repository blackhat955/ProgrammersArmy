interface ActivityCardProps {
  type: 'Webinar' | 'Contest';
  title: string;
  date: string;
}

export default function ActivityCard({ type, title, date }: ActivityCardProps) {
  const bgColor = type === 'Webinar' ? 'bg-emerald-200' : 'bg-emerald-300';
  
  return (
    <div className="min-w-[200px]">
      <div className={`${bgColor} rounded-2xl p-6 h-32 flex items-center justify-center mb-4`}>
        <span className="text-emerald-800 text-sm font-medium">Image related<br />to this topic</span>
      </div>
      <h4 className="font-bold text-lg mb-1">{title}</h4>
      <p className="text-gray-600 text-sm">{date}</p>
    </div>
  );
}