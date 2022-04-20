import { useRouter } from "next/router";

// Components
import Link from "next/link";
import { CSSProperties, ReactElement } from "react";

const style: CSSProperties = {
  borderBottom: "3px solid rgb(152, 189, 243)",
};

interface Props {
  href: string;
  children: ReactElement;
}

const ActiveLink = ({ href, children }: Props) => {
  const { asPath } = useRouter();

  return (
    <Link href={href}>
      <a style={asPath === href ? style : undefined}> {children} </a>
    </Link>
  );
};

export default ActiveLink;
