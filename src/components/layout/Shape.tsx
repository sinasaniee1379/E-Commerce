const ShapeIcon = ({ className }: { className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="360"
    height="170"
    fill="none"
    className={className}
    viewBox="0 0 360 170">
    <g filter="url(#filter0_f_5762_459)" opacity="0.7">
      <path
        fill="#0951BE"
        d="M295 205c0 34.242-55.741 62-124.5 62S46 239.242 46 205s55.741-62 124.5-62S295 170.758 295 205"></path>
    </g>
    <defs>
      <filter
        id="filter0_f_5762_459"
        width="649"
        height="524"
        x="-154"
        y="-57"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse">
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feBlend
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"></feBlend>
        <feGaussianBlur
          result="effect1_foregroundBlur_5762_459"
          stdDeviation="100"></feGaussianBlur>
      </filter>
    </defs>
  </svg>
);

export default ShapeIcon;
