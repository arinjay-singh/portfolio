import Image from "next/image";

function LinkedinLogo() {
  return (
    <a href="https://www.linkedin.com/in/arinjay-singh/" target="_blank">
      <Image
        src="/images/links/linkedin.png"
        alt="LinkedIn Logo"
        width={30}
        height={25}
      />
    </a>
  );
}

export default LinkedinLogo;
