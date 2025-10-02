"use client";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";

export default function CourseNavigation() {
  const pathname = usePathname();
  const params = useParams();
  const cid = params.cid;
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link
        href={`/Courses/${cid}/Home`}
        id="wd-course-home-link"
        className={`list-group-item border-0 ${
          pathname.endsWith("/Home") ? "active" : "text-danger"
        }`}
      >
        Home
      </Link>
      <br />
      <Link
        href={`/Courses/${cid}/CourseModules`}
        id="wd-course-modules-link"
        className={`list-group-item border-0 ${
          pathname.endsWith("/CourseModules") ? "active" : "text-danger"
        }`}
      >
        Modules
      </Link>
      <br />
      <Link
        href={`/Courses/${cid}/Piazza`}
        id="wd-course-piazza-link"
        className={`list-group-item border-0 ${
          pathname.endsWith("/Piazza") ? "active" : "text-danger"
        }`}
      >
        Piazza
      </Link>
      <br />
      <Link
        href={`/Courses/${cid}/Zoom`}
        id="wd-course-zoom-link"
        className={`list-group-item border-0 ${
          pathname.endsWith("/Zoom") ? "active" : "text-danger"
        }`}
      >
        Zoom
      </Link>
      <br />
      <Link
        href={`/Courses/${cid}/Assignments`}
        id="wd-course-assignments-link"
        className={`list-group-item border-0 ${
          pathname.includes("/Assignments") ? "active" : "text-danger"
        }`}
      >
        Assignments
      </Link>
      <br />
      <Link
        href={`/Courses/${cid}/Quizzes`}
        id="wd-course-quizzes-link"
        className={`list-group-item border-0 ${
          pathname.endsWith("/Quizzes") ? "active" : "text-danger"
        }`}
      >
        Quizzes
      </Link>
      <br />
      <Link
        href={`/Courses/${cid}/Grades`}
        id="wd-course-grades-link"
        className={`list-group-item border-0 ${
          pathname.endsWith("/Grades") ? "active" : "text-danger"
        }`}
      >
        Grades
      </Link>
      <br />
      <Link
        href={`/Courses/${cid}/People/Table`}
        id="wd-course-people-link"
        className={`list-group-item border-0 ${
          pathname.endsWith("/People") ? "active" : "text-danger"
        }`}
      >
        People
      </Link>
      <br />
    </div>
  );
}
