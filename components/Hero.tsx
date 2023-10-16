import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero">
      <div className="main-container flex-center h-full min-h-screen">
        <div className="flex">
          <div className="flex flex-1 flex-col justify-center ">
            <h1 className="text-[64px] font-bold">
              Transforming Houses,
              <br />
              Creating Homes
            </h1>
            <div className="mt-[10px] w-1/2">
              <p className=" text-[32px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor,
                sint.
              </p>
            </div>
            <div className="mt-[60px]">
              <button
                type="button"
                className="bg-black px-[48px] py-[24px] text-[16px] text-white"
              >
                Contact Us
              </button>
            </div>
          </div>
          <div>
            <Image
              src={"/images/hero.jpg"}
              alt="hero image"
              width={360}
              height={360}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
