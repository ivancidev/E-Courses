export default function CourseProgress() {
  return (
    <div className="mt-16">
      <h2 className="font-bold text-xl">Progress in Courses</h2>
      <div className="mt-2">
        <div className="flex justify-between">
          <p>HTML</p>
          <p>100%</p>
        </div>
        <div className="w-full h-2 bg-gray-300 rounded-full">
          <div className="h-full bg-blue-500 rounded-full"></div>
        </div>
      </div>
      <div className="mt-2">
        <div className="flex justify-between">
          <p>Javascript</p>
          <p>80%</p>
        </div>
        <div className="w-full h-2 bg-gray-300 rounded-full">
          <div className="h-full bg-blue-500 rounded-full w-[80%]"></div>
        </div>
      </div>
      <div className="mt-2">
        <div className="flex justify-between">
          <p>React advanced</p>
          <p>80%</p>
        </div>
        <div className="w-full h-2 bg-gray-300 rounded-full">
          <div className="h-full bg-blue-500 rounded-full w-[80%]"></div>
        </div>
      </div>
    </div>
  );
}
