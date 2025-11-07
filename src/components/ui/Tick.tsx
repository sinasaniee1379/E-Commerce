import { twMerge } from "tailwind-merge";

const TickIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    className={twMerge("lucide lucide-check-icon lucide-check stroke-white")}
    viewBox="0 0 24 24">
    <path d="M20 6 9 17l-5-5"></path>
  </svg>
);

export default TickIcon;
