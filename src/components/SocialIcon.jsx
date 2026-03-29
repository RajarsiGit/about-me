import * as simpleIcons from "simple-icons";

export default function SocialIcon({ slug, size = 20, color }) {
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
