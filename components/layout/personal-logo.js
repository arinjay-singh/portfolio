import Image from "next/image";

function PersonalLogo() {
  return (
    <Image
      src="/public/images/personal-logo/arinjay-logo.svg"
      alt="Arinjay Singh Logo"
      width={195}
      height={78}
    />
  );
}

export default PersonalLogo;
