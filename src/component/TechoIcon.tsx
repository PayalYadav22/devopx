import Image from "next/image";

const Techolcon = ({
  src,
  alt,
  w,
  h,
}: {
  src: string;
  alt: string;
  w: number;
  h: number;
}) => {
  return (
    <>
      <Image src={src} alt={alt} width={w} height={w} />
    </>
  );
};

export default Techolcon;
