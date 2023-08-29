import Image from "next/image";

function PersonalLogo() {
  return (
    <Image
      src="images/personal-logo/arinjay-logo.svg"
      alt="Arinjay Singh Logo"
      width={195}
      height={78}
      key="personal-logo"
    />
  );
}

export default PersonalLogo;
