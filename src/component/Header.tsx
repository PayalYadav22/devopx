"use client";

const Header = ({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow: string;
  description: string;
}) => {
  return (
    <div className="text-center">
      <p className="uppercase text-sm md:text-base  lg:text-lg font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
        {eyebrow}
      </p>
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-6">
        {title}
      </h2>
      <p className="text-white/60 font-poppins mt-4 max-w-md mx-auto text-sm md:text-base lg:text-base">
        {description}
      </p>
    </div>
  );
};

export default Header;
