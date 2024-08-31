import ProfileIcon from '../shared/ui/icons/profile';

export default function ProfileDetails() {
  return (
    <div className="flex mt-12 gap-16 ml-20">
      <div className="flex items-center">
        <ProfileIcon />
      </div>
      <div>
        <h1 className="font-bold text-2xl">John Doe</h1>
        <p>Student of fronted developer</p>
      </div>
    </div>
  );
}
