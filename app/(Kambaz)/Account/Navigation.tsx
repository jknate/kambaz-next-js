"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccountNavigation() {
  const pathname = usePathname();
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <Link
        href="/Account/Signin"
        id="wd-account-signin-link"
        className={`list-group-item border-0 ${
          pathname.endsWith("/Signin") ? "active" : "text-danger"
        }`}
      >
        Signin
      </Link>
      <br />
      <Link
        href="/Account/Signup"
        id="wd-account-signup-link"
        className={`list-group-item border-0 ${
          pathname.endsWith("/Signup") ? "active" : "text-danger"
        }`}
      >
        Signup
      </Link>
      <br />
      <Link
        href="/Account/Profile"
        id="wd-account-profile-link"
        className={`list-group-item border-0 ${
          pathname.endsWith("/Profile") ? "active" : "text-danger"
        }`}
      >
        Profile
      </Link>
      <br />
    </div>
  );
}
