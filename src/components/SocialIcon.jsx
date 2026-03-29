import * as simpleIcons from "simple-icons";
import * as fa6Icons from "react-icons/fa6";

export default function SocialIcon({ slug, size = 20, color }) {
  // react-icons/fa6 slugs (e.g. "FaAws", "FaMicrosoft")
  if (slug?.startsWith("Fa")) {
    const Icon = fa6Icons[slug];
    if (!Icon) return null;
    return <Icon size={size} color={color} />;
  }

  // simple-icons slugs (PascalCase, e.g. "Postgresql")
  const icon = simpleIcons[`si${slug}`];
  if (!icon) return null;

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color || `#${icon.hex}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{icon.title}</title>
      <path d={icon.path} />
    </svg>
  );
}
