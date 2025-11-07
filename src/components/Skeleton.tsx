import { twMerge } from "tailwind-merge";

interface SkeletonProps {
  className?: string;
}

const Skeleton = ({ className }: SkeletonProps) => {
  return (
    <span
      className={twMerge(
        "bg-gray-100 inline-block h-3 w-full animate-pulse rounded-sm",
        className
      )}
    />
  );
};

export default Skeleton;
