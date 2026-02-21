import { FaUser } from "react-icons/fa";
import { setUser } from "@/redux/auth/authSlice";
import { toast } from "react-toastify";
import { updateProfileImage } from "@/api/user";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Image from "next/image";
import Spinner from "../Spinner";

const ProfileImage = () => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [localUrl, setLocalUrl] = useState(null);

  const { user } = useSelector((state) => state.authReducer);

  const dispatch = useDispatch();

  function updateImage() {
    if (!image) return;

    setLoading(true);

    const formdata = new FormData();

    formdata.append("image", image);

    updateProfileImage(formdata)
      .then((data) => {
        dispatch(setUser(data));
        toast.success("Image update successful.");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Image update failed.");
      })
      .finally(() => {
        setLoading(false);
        setImage(null);
      });
  }

  return (
    <div className="flex items-center pt-2 pb-10 gap-5">
      {localUrl || user?.profileImageUrl   ? (
        <Image
          src={localUrl || user.profileImageUrl}
          height={200}
          width={200}
          alt={user.name}
          className="h-36 w-36 rounded-full bg-gray-100 border-5 border-gray-300"
        />
      ) : (
        <div className="flex items-center justify-center h-36 w-36 rounded-full bg-gray-100 border-5 border-gray-300">
          <FaUser className="h-16 w-16 text-gray-400" />
        </div>
      )}

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Upload file
        </label>
        <input
          className="p-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          type="file"
          accept=".png,.jpg,.jpeg"
          onChange={(e) => {
            const file = e.target.files[0];

            setImage(file);
            setLocalUrl(URL.createObjectURL(file));
          }}
        />
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
          SVG, PNG, JPG or GIF (MAX. 800x400px).
        </p>
      </div>
      <button
        onClick={updateImage}
        className="inline-flex gap-2 items-center px-5 py-2.5 cursor-pointer text-sm font-medium text-center text-white bg-primary rounded-lg focus:ring-4 focus:ring-primary/20 dark:focus:ring-primary hover:bg-blue-800"
      >
        Update Image
        {loading && <Spinner className="h-6 w-6 fill-primary" />}
      </button>
    </div>
  );
};

export default ProfileImage;