import Link from "next/link";
import { Container } from "./container";
import { GithubIcon } from "./icons/github";
import { Logo } from "./icons/logo";
import { SlackIcon } from "./icons/slack";
import { TwitterIcon } from "./icons/twitter";

export const Footer = () => (
  <footer className="mt-12 border-t border-transparent-white py-[5.6rem] text-sm">
    <Container className="flex flex-col justify-between lg:flex-row">
      <div>
        <div className="flex h-full flex-row justify-between lg:flex-col">
          <div className="flex items-center text-grey">
            <Logo className="mr-4 h-4 w-4" />
            Athena - Grece
          </div>
          <div className="mt-auto flex space-x-4 text-grey">
            <Link href="https://twitter.com" target="_blank">
              <TwitterIcon />
            </Link>
            <Link href="https://github.com" target="_blank">
              <GithubIcon />
            </Link>
            <Link href="https://slack.com" target="_blank">
              <SlackIcon />
            </Link>
          </div>
        </div>
      </div>
    </Container>
  </footer>
);
