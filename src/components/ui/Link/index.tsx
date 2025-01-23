import { Link as LinkMui } from "@mui/material";

type LinkProps = {
  label: string;
  href: string | undefined;
};

const Link = ({ label, href }: LinkProps) => {
  return (
    <LinkMui href={href} variant="body2">
      {label}
    </LinkMui>
  );
};

export default Link;
