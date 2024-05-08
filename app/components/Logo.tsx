import Image from "next/image";

const Logo = () => (
    <Image
        src="/assets/proode_logo.svg"
        className="h-full w-auto"
        width={500}
        height={500}
        alt="Proode logo"
    />
)

export default Logo