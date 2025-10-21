import { Star } from '@mui/icons-material';

const ReviewCard = ({ name, rating, review, timeAgo }) => (
  <div className="w-80 max-w-sm mx-auto p-6 bg-white rounded-lg border-2 border-black shadow-lg">
    <div className="mb-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-lg text-black">{name}</h3>
        {timeAgo && <span className="text-gray-500 text-xs">{timeAgo}</span>}
      </div>
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
            sx={{ fontSize: '1.25rem' }}
          />
        ))}
      </div>
    </div>
    <p className="text-gray-700 text-sm leading-relaxed">{review}</p>
  </div>
);

export default ReviewCard;