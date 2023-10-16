import Image from "next/image";

const Nav = () => {
  return (
    <header className="fixed top-0 z-20 w-full">
      <div className="nav-container flex items-center justify-between">
        <p className="text-[20px] font-bold">Logo</p>

        {/* <Image
          src={"/images/logo.png"}
          alt="logo"
          width={60}
          height={30}
          className="object-contain"
        /> */}
        <nav>
          <ul className="flex gap-[60px] py-[10px]">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
