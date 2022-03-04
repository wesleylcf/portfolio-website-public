import React from "react";

interface EmojiProps {
  emoji: string;
  alt?: string;
}

const Emoji: React.FC<EmojiProps> = ({ emoji, alt }) => (
  <span
    className="emoji"
    role="img"
    aria-label={alt}
    aria-hidden={alt ? "false" : "true"}
  >
    {emoji}
  </span>
);
export default Emoji;
