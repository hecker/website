import type { Metadata } from "next";
import {
  GitHubIcon,
  YouTubeIcon,
  LinkedInIcon,
  TwitchIcon,
  PolyworkIcon,
  TwitterIcon,
  SpotifyIcon,
  TikTokIcon,
  InstagramIcon,
  BeRealIcon,
  DiscordIcon,
  WhatsAppIcon,
  ClashRoyaleIcon,
  StravaIcon,
  JodelIcon,
} from "components/icons";
import Link from "next/link";

function SocialLink({
  href,
  icon,
  title,
  active,
}: {
  href: string;
  icon: JSX.Element;
  title: string;
  active: boolean;
}) {
  return (
    <a
      rel="noopener noreferrer"
      target="_blank"
      href={href}
      className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
    >
      <div className="flex items-center">
        {icon}
        <div className="ml-3">{title}</div>
      </div>
      {active && (
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
      )}
    </a>
  );
}

export const metadata: Metadata = {
  title: "Socials",
  description: "All important socials from me.",
};

export default function SocialsPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-4">Socials</h1>
      <div className="grid gap-2 grid-cols-1 md:grid-cols-3">
        <SocialLink
          href="https://github.com/hecker"
          icon={<GitHubIcon />}
          title="GitHub"
          active={true}
        />
        <SocialLink
          href="https://www.youtube.com/@janhecker00"
          icon={<YouTubeIcon />}
          title="YouTube"
          active={true}
        />
        <SocialLink
          href="https://www.linkedin.com/in/janhecker/"
          icon={<LinkedInIcon />}
          title="LinkedIn"
          active={true}
        />
        <SocialLink
          href="https://www.tiktok.com/@janhecker"
          icon={<TikTokIcon />}
          title="TikTok"
          active={true}
        />
        <SocialLink
          href="https://www.instagram.com/janhecker00/"
          icon={<InstagramIcon />}
          title="Instagram"
          active={true}
        />
        <SocialLink
          href="https://open.spotify.com/user/eja8fqoy7qpqdm4bk7e5nt8o3?si=43929b476d604ad4"
          icon={<SpotifyIcon />}
          title="Spotify"
          active={false}
        />
        <SocialLink
          href="https://bere.al/janhecker"
          icon={<BeRealIcon />}
          title="BeReal"
          active={false}
        />
        <SocialLink
          // Save for later: https://discordapp.com/users/220992532836777985
          href="https://discord.gg/YYuraFejJX"
          icon={<DiscordIcon />}
          title="Discord"
          active={false}
        />
        <SocialLink
          href="https://chat.whatsapp.com/LhFGMUMgsylHwZF5Irfh8l"
          icon={<WhatsAppIcon />}
          title="WhatsApp"
          active={false}
        />
        <SocialLink
          href="https://link.clashroyale.com/invite/friend/de?tag=2YJCG20LL&token=8myh8tjx&platform=iOS"
          icon={<ClashRoyaleIcon />}
          title="Clash Royale"
          active={false}
        />
        <SocialLink
          href="https://www.strava.com/athletes/janhecker"
          icon={<StravaIcon />}
          title="Strava"
          active={false}
        />
        <SocialLink
          href="https://shared.jodel.com/3rxqoI9ixzb"
          icon={<JodelIcon />}
          title="Jodel"
          active={false}
        />
        <SocialLink
          href="https://www.twitch.tv/hecker"
          icon={<TwitchIcon />}
          title="Twitch"
          active={false}
        />
        <SocialLink
          href="https://www.polywork.com/hecker"
          icon={<PolyworkIcon />}
          title="Polywork"
          active={false}
        />
        <SocialLink
          href="https://twitter.com/janhecker29"
          icon={<TwitterIcon />}
          title="Twitter"
          active={false}
        />
      </div>
      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
        <p>
          I'm most active on LinkedIn. But don't you dare not follow me on every
          single channel. ;){"  "}
          <span className="inline-flex items-center">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </span>
          {"  "}
          indicates that I am active and publicly available on the platform. All
          icons are from{" "}
          <Link className="font-normal no-underline" href="https://icons8.com/">
            Icons8
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
