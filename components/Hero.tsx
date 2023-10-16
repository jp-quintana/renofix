import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <div className="main-container flex-center h-full min-h-screen">
        <div className="flex h-full w-full">
          <div className="flex flex-1 flex-col justify-center">
            <h1 className="text-[64px] font-bold">
              Transforming Houses,
              <br />
              Creating Homes
            </h1>
          </div>
          <div>
            <Image
              src={"/images/hero.jpg"}
              alt="hero image"
              width={400}
              height={300}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
