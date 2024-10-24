import Linkedin from "./../../assets/icons/Vector.png";
interface teamProfile {
  name: string;
  position: string;
  imageUrl: string;
  linkedInUrl: string;
}
const ProfileCard = ({
  name,
  position,
  imageUrl,
  linkedInUrl,
}: teamProfile) => {
  return (
    <div className="relative group w-full max-w-xs mx-auto overflow-hidden">
      <div className="relative group">
        <img
          src={imageUrl}
          alt={name}
          className="w-[278px] h-[278px] object-cover transition-transform duration-300"
        />
        <div className="absolute inset-0 flex justify-center items-center bg-[#F4F6FCD4] bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl"
          >
            <img src={Linkedin} alt="Linkedin" />
          </a>
        </div>
      </div>
      <div className="mt-4 p-4">
        <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
        <p className="text-gray-500">{position}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
