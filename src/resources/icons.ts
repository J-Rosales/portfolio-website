import { IconType } from "react-icons";

import {
  HiArrowUpRight,
  HiOutlineLink,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineDocument,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineRocketLaunch,
  HiOutlineGlobeAmericas,
} from "react-icons/hi2";

import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
} from "react-icons/pi";

import {
  SiJavascript,
  SiNextdotjs,
  SiFigma,
  SiSupabase,
} from "react-icons/si";

import { FaDiscord, FaGithub, FaLinkedin, FaX, FaThreads, FaInstagram, FaXTwitter, FaFacebook, FaPinterest, FaWhatsapp, FaReddit, FaTelegram, FaSteam, FaItchIo, FaNodeJs, FaRobot} from "react-icons/fa6";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { SiAdobephotoshop, SiAdobeaftereffects, SiBlender, SiGit, SiGithub} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";


export const iconLibrary: Record<string, IconType> = {
  photoshop: SiAdobephotoshop,
  aftereffects: SiAdobeaftereffects,
  blender: SiBlender,
  flstudio: BsMusicNoteBeamed,
  git: SiGit,
  github: SiGithub,
  vscode: VscVscode,
  nodejs: FaNodeJs,
  chatgpt: FaRobot,
  codex: FaRobot,
  gemini: FaRobot,
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  email: HiEnvelope,
  globe: HiOutlineGlobeAmericas,
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  openLink: HiOutlineLink,
  calendar: HiCalendarDays,
  home: PiHouseDuotone,
  gallery: PiImageDuotone,
  discord: FaDiscord,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  steam: FaSteam,
  itchio: FaItchIo,
  linkedin: FaLinkedin,
  x: FaX,
  twitter: FaXTwitter,
  threads: FaThreads,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  document: HiOutlineDocument,
  rocket: HiOutlineRocketLaunch,
  javascript: SiJavascript,
  nextjs: SiNextdotjs,
  supabase: SiSupabase,
  figma: SiFigma,
  facebook: FaFacebook,
  pinterest: FaPinterest,
  whatsapp: FaWhatsapp,
  reddit: FaReddit,
  telegram: FaTelegram,
  instagram: FaInstagram,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
