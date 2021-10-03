import React from 'react';
import Link from 'next/link';

type TargetType = '_self' | '_blank' | '_parent' | '_top';

type RelType = 'noreferrer' | 'noopener' | 'nofollow' | 'opener';

interface LinkButtonProps {
  href: string;
  text: string;
  target?: TargetType;
  rel?: RelType;
  className?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  text,
  target,
  rel,
  className,
}) => {
  return (
    <Link href={href}>
      <a
        className={`px-6 py-2 text-xs font-semibold uppercase transition-colors duration-300 border-2 border-black rounded-full lg:text-base hover:text-white hover:bg-black ${className}`}
        target={target}
        rel={rel}
      >
        {text}
      </a>
    </Link>
  );
};

export default LinkButton;
