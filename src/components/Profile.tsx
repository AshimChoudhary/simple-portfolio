import { useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import Tabs from './Tabs';

const Profile = () => {
  const [bannerURL, setBannerURL] = useState(
    'https://4kwallpapers.com/images/walls/thumbs_3t/21897.jpg'
  );

  const [profileURL, setProfileURL] = useState(
    'https://4kwallpapers.com/images/walls/thumbs_3t/22696.png'
  );

  const handleBannerChange = (e: any) => {
    const files = e.target.files[0];
    if (files) {
      setBannerURL(URL.createObjectURL(files));
    }
  };

  const handleProfileChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setProfileURL(URL.createObjectURL(file));
    }
  };

  return (
    <div className="relative w-[full] ml-[5rem]">
      <div className="relative">
        <img
          src={bannerURL}
          alt="Banner Image"
          className="w-full h-60 object-cover"
        />

        <button className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
          <label htmlFor="banner-upload" className="cursor-pointer">
            <FaCamera size={24} />
          </label>

          <input
            type="file"
            id="banner-upload"
            accept="image/*"
            className="hidden"
            onChange={handleBannerChange}
          />
        </button>
      </div>

      <div className="flex items-center ml-4 mt-[2rem]">
        <img
          src={profileURL}
          alt="Profile Image"
          className="w-40 h-40 object-cover border-white relative rounded-2xl"
        />

        <button className="absolute ml-[3.8rem] mt-[10rem] bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 ">
          <label htmlFor="profile-upload" className="cursor-pointer">
            <FaCamera size={18} />
          </label>

          <input
            type="file"
            id="profile-upload"
            accept="image/*"
            className="hidden"
            onChange={handleProfileChange}
          />
        </button>

        <div className="ml-4 mt-4">
          <h1 className="text-2xl font-bold ml-[4rem]">Zenitsu Agatsuma</h1>
          <p className="ml-[4.3rem]">Demon Slayer</p>
          <p className="mt-2 ml-[4rem]">
            Zenitsu Agatsuma may seem cowardly, but he's one of the fastest
            Demon Slayers, unleashing a devastating Thunder Breathing technique
            with blinding speed. When unconscious or driven by emotion, his true
            power and precision make him nearly unstoppable.
          </p>
          <button className="mt-4 ml-[4.3rem] bg-yellow-300 text-white py-2 px-4 rounded hover:bg-yellow-200 hover:text-black">
            Upvote
          </button>
        </div>
      </div>
      <Tabs />
    </div>
  );
};

export default Profile;
