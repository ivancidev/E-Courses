import cupStart from '@/assets/icons/cup-star.svg';
import graduate from '@/assets/icons/graduate.svg';
import clock from '@/assets/icons/clock.svg';

export default function Achievements() {
  return (
    <div className="mt-4">
      <h2 className="font-bold text-xl">Achievements</h2>
      <div className="mt-2 flex justify-center">
        <div>
          <div className="grid grid-cols-2 gap-12 lg:grid-cols-3 lg:gap-36">
            <div className="flex gap-2 p-3 bg-blue-300 rounded-lg justify-center items-center h-20 w-60">
              <img src={cupStart} alt="CupStart" />
              <p>Javascript Master</p>
            </div>
            <div className="flex gap-2 p-3 bg-blue-300 rounded-lg justify-center items-center h-20 w-60">
              <img src={graduate} alt="CupStart" />
              <p>React Certificate</p>
            </div>
            <div className="flex gap-2 p-3 bg-blue-300 rounded-lg justify-center items-center h-20 w-60">
              <img src={clock} alt="CupStart" />
              <p>Hours of Studio</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
