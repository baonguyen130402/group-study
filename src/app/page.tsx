import { SiteHeader } from "@/components/Site-Header";
import { CourseCard } from "@/components/course-card";
import { ListCourses } from "@/components/list-of-courses";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <div className="flex justify-center w-screen">
      </div>
      <div className="flex flex-col items-center">
        <div className="w-1/5">
          <ListCourses type="banner" />
        </div>
        <div className="w-2/3 flex flex-col">
          <h1 className="text-2xl my-2">Courses</h1>
          <ListCourses type="card" />
        </div>
        <div className="w-2/3 flex flex-col">
          <h1 className="text-2xl my-2">Courses</h1>
          <ListCourses type="card" />
        </div>
        <div className="w-2/3 flex flex-col">
          <h1 className="text-2xl my-2">Courses</h1>
          <ListCourses type="card" />
        </div>
      </div>
    </>
  );
}
