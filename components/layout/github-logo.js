import Image from "next/image";

function GithubLogo() {
  return (
    <a href="https://github.com/arinjay-singh" target="_blank">
      <Image
        src="/images/links/github.png"
        alt="GitHub Logo"
        width={25}
        height={25}
      />
    </a>
  );
}

export default GithubLogo;
