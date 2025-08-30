import { FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import { LuPartyPopper } from "react-icons/lu";
import { FaPhone } from "react-icons/fa";

export const navValues = [
  { label: "Home", link: "/", icon: FaHome },
  { label: "Book now", link: "/booknow", icon: FaCalendarCheck },
  { label: "Packages", link: "/packages", icon: LuPartyPopper },
  { label: "Contact us", link: "/contactus", icon: FaPhone },
  { label: "About", link: "/about", icon: FaInfoCircle },
];
