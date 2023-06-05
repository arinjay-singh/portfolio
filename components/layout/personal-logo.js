import Image from "next/image";

function PersonalLogo() {
  return (
    <Image
      src="/images/personal-logo/arinjay-singh-logo-2.svg"
      alt="Arinjay Singh Logo"
      width={190}
      height={76}
      priority={true}
    />
  );
}

export default PersonalLogo;
