const StarComponent = ({ className }: { className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 13 13">
    <path
      className={className}
      // fill="#063A88"
      d="M5.793.415c.18-.553.961-.553 1.14 0l1.092 3.357a.6.6 0 0 0 .57.414h3.53c.581 0 .823.744.353 1.086L9.622 7.346a.6.6 0 0 0-.218.671l1.09 3.357c.18.553-.452 1.013-.922.671L6.716 9.97a.6.6 0 0 0-.705 0l-2.856 2.075c-.47.342-1.103-.118-.923-.67l1.09-3.358a.6.6 0 0 0-.218-.67L.25 5.271C-.221 4.93.02 4.186.6 4.186h3.53a.6.6 0 0 0 .57-.414z"></path>
  </svg>
);

export default StarComponent;
