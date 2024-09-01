import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();
  return (
    <div
      className="w-full h-screen justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/presentation.jpg)' }}
    >
      <div className="flex justify-center items-center h-full bg-black bg-opacity-45">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl">Welcome to the online course platform</h1>
          <button
            onClick={() => navigate('courses')}
            className="mt-4 bg-red-600 px-4 py-3 rounded-md text-sm md:text-lg"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
