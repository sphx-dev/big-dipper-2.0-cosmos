import { ReactNode } from 'react';
import { DiscordIcon, LinkedinIcon, TelegramIcon, TwitterIcon } from '@/components/icons';

const LinkedInCustom = () => (
  <img
    src="https://cdn.prod.website-files.com/66c086bc040993453dc5c377/66e2c77a9c63d095a2f8846a_linkedin.svg"
    loading="lazy"
    alt=""
    className="image-2"
  />
);
export const socialMediaLinks: {
  component: ReactNode;
  className: string;
  url: string;
}[] = [
  {
    // component: <LinkedinIcon />,
    component: <LinkedInCustom />,
    className: 'linkedin',
    url: 'https://www.linkedin.com/company/sphx',
  },
  {
    component: <TwitterIcon />,
    className: 'twitter',
    url: 'https://x.com/SphinxProtocol',
  },
  {
    component: <DiscordIcon />,
    className: 'discord',
    url: 'https://discord.gg/58XsUvXH',
  },
  {
    component: <TelegramIcon />,
    className: 'telegram',
    url: 'https://t.me/+tbsFdg8QlR05ZjMx',
  },
];
