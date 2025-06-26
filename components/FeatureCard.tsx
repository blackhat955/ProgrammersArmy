interface FeatureCardProps {
  title: string;
  description: string;
  iconColor?: string;
}

export default function FeatureCard({ title, description, iconColor = "bg-yellow-300" }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className={`w-20 h-20 ${iconColor} rounded-full mx-auto mb-4`}></div>
      <h3 className="text-xl font-bold text-center mb-3">{title}</h3>
      <p className="text-gray-600 text-center text-sm leading-relaxed">{description}</p>
    </div>
  );
}