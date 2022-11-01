interface HomeProps {
  count: number;
}

import Image from "next/image";
import appPreviewImg from "../assets/app-preview.png";
import logoImg from "../assets/logo.svg";
import usersAvatarExampleImg from "../assets/users-avatars-examples.png";
import checkIconImg from "../assets/check-icon.svg";

export default function Home({ count }: HomeProps) {
  return (
    <div className="max-w-[1124px] h-screen mx-auto grid grid-cols-2 items-center">
      <main>
        <Image src={logoImg} alt="app logo" />
        <h1 className="mt-14 text-white text-5xl font-bold leading-tight">
          Create your own World Cup Pool and share with your friends!
        </h1>
        <div className="mt-10 flex items-center gap-2">
          <Image src={usersAvatarExampleImg} alt="platform users avatars" />
          <strong className="text-gray-100 text-xl">
            <span className="text-green-500">+123</span> persons are already
            using
          </strong>
        </div>
        <form className="mt-10 flex">
          <input
            type="text"
            className="flex-1"
            required
            placeholder="What's the name of your pool?"
          />
          <button type="submit" className="bg-yellow-500">
            Create a new pool
          </button>
        </form>
        <p>
          Upon the creation of your pool, you will receive an unique code to
          share with your friends!
        </p>
        <div>
          <div>
            <Image src={checkIconImg} alt="check icon" />
            <div>
              <span>+{count}</span>
              <span>Pools created</span>
            </div>
          </div>
          <div>
            <Image src={checkIconImg} alt="check icon" />
            <div>
              <span>+{count}</span>
              <span>Guesses sent</span>
            </div>
          </div>
        </div>
      </main>
      <Image
        src={appPreviewImg}
        alt="App Preview Image with two phones"
        quality={100}
      />
    </div>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:3333/pools/count");
  const data = await response.json();
  console.log(data);
  return {
    props: {
      count: data.count,
    },
  };
};
