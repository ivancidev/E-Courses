import Achievements from '../../components/profile/achievements';
import CourseProgress from '../../components/profile/course-progress';
import ProfileDetails from '../../components/profile/profile-details';
import Stats from '../../components/profile/stats';

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
