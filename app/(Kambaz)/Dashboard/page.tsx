import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image
              src="/images/reactjs.jpg"
              width={200}
              height={150}
              alt={""}
            />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/2345" className="wd-dashboard-course-link">
            <Image
              src="/images/history.jpg"
              width={200}
              height={150}
              alt={""}
            />
            <div>
              <h5> HIST2345 World History </h5>
              <p className="wd-dashboard-course-title">
                Ancient civilizations to modern times
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/3456" className="wd-dashboard-course-link">
            <Image
              src="/images/english.jpg"
              width={200}
              height={150}
              alt={""}
            />
            <div>
              <h5> ENG3456 Creative Writing </h5>
              <p className="wd-dashboard-course-title">
                Fiction, poetry, and narrative techniques
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/4567" className="wd-dashboard-course-link">
            <Image
              src="/images/calculus.jpg"
              width={200}
              height={150}
              alt={""}
            />
            <div>
              <h5> MATH4567 Calculus I </h5>
              <p className="wd-dashboard-course-title">
                Limits, derivatives, and integration
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/5678" className="wd-dashboard-course-link">
            <Image src="/images/python.jpg" width={200} height={150} alt={""} />
            <div>
              <h5> CS5678 Data Structures </h5>
              <p className="wd-dashboard-course-title">
                Algorithms and computational thinking
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/6789" className="wd-dashboard-course-link">
            <Image
              src="/images/shakespeare.jpg"
              width={200}
              height={150}
              alt={""}
            />
            <div>
              <h5> ENG6789 Shakespeare Studies </h5>
              <p className="wd-dashboard-course-title">
                Analysis of major plays and sonnets
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/7890" className="wd-dashboard-course-link">
            <Image
              src="/images/american-history.jpg"
              width={200}
              height={150}
              alt={""}
            />
            <div>
              <h5> HIST7890 American History </h5>
              <p className="wd-dashboard-course-title">
                Colonial period through modern era
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/8901" className="wd-dashboard-course-link">
            <Image
              src="/images/statistics.jpg"
              width={200}
              height={150}
              alt={""}
            />
            <div>
              <h5> MATH8901 Statistics </h5>
              <p className="wd-dashboard-course-title">
                Probability and statistical analysis
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
