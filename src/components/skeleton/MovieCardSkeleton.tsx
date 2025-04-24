import { Skeleton } from "../ui/skeleton"

const MovieCardSkeleton = () => {
  return (
    <div className="">
    <Skeleton className="h-[125px] w-[250px] lg:w-50 lg:h-75 rounded-xl" />
  </div>
  )
}

export default MovieCardSkeleton