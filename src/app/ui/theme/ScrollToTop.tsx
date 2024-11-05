import Link from "next/link";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  return (
    <Link
      href="#top"
      className="btn btn-primary btn-icon rounded-none border-y-white dark:border-y-foreground"
    >
      <ChevronUp />
    </Link>
  );
};

export default ScrollToTop;
