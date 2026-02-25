import { useEffect, useState } from 'react';

const LikeButton: React.FC = () => {
  const [likes, setLikes] = useState<number>(0);

  useEffect(() => {
    const storedLikes = localStorage.getItem('likes');
    if (storedLikes) {
      setLikes(parseInt(storedLikes, 10));
    }
  }, []);

  const handleLike = () => {
    const newLikes = likes + 1;
    setLikes(newLikes);
    localStorage.setItem('likes', newLikes.toString());
  };

  return (
    <div className="flex items-center">
      <button onClick={handleLike} className="rounded bg-blue-500 px-4 py-2 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c... (SVG path data) ..." />
        </svg>
      </button>
      <span className="ml-2 text-gray-600">
        {likes} {likes === 1 ? 'like' : 'likes'}
      </span>
    </div>
  );
};

export default LikeButton;
