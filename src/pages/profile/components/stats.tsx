export default function Stats() {
  return (
    <div className="flex justify-center mt-16">
      <ul className="flex gap-8 lg:gap-24">
        <li className="text-center">
          <p className="font-bold text-2xl">12</p>
          <p>Completed courses</p>
        </li>
        <li className="text-center">
          <p className="font-bold text-2xl">3</p>
          <p>Progress courses</p>
        </li>
        <li className="text-center">
          <p className="font-bold text-2xl">256</p>
          <p>Study hours</p>
        </li>
        <li className="text-center">
          <p className="font-bold text-2xl">12</p>
          <p>Certifications</p>
        </li>
      </ul>
    </div>
  );
}
