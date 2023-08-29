import Image from "next/image";

function Memoji() {
  return (
    <Image
      src="portfolio/images/memoji/memoji.svg"
      alt="Arinjay Singh Memoji"
      width={300}
      height={300}
      priority={true}
    />
  );
}

export default Memoji;
