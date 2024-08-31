import Achievements from './components/achievements';
import CourseProgress from './components/course-progress';
import ProfileDetails from './components/profile-details';
import Stats from './components/stats';

export default function Profile() {
  return (
    <div className="flex h-full justify-center items-center w-full">
      <div className="w-full p-8">
        <ProfileDetails />
        <Stats />
        <CourseProgress />
        <Achievements />
      </div>
    </div>
  );
}
