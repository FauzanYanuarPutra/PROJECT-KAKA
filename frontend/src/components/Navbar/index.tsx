import Link from "next/link";
import { usePathname } from "next/navigation";

const LinkNavbar = (props: { href: string; name?: string; onClick?: () => void; className?: string }) => {
  const { href, name, onClick, className } = props;
  const pathname = usePathname();
  const isActive = href.split("/")[1] === pathname.split("/")[1];
  return (
    <>
      <Link onClick={onClick} href={href} className={`text-lg  ${isActive ? 'text-white  font-black ' : 'text-white font-medium'}  ${className || ''}`}>{name}</Link>
    </>
  );
}

export default LinkNavbar;

