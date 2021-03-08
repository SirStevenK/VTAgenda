import NextImage from "next/image";

const Logo: React.FC = () => {
  return (
    <div>
      <NextImage
        src="/images/VTAgenda.png"
        alt="logo"
        height={108 / 2.5}
        width={585 / 2.5}
        quality={100}
      />
    </div>
  );
};

export default Logo;
