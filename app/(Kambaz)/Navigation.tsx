"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";

export default function KambazNavigation() {
  const pathname = usePathname();
  return (
    <ListGroup
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
      style={{ width: 120 }}
      id="wd-kambaz-navigation"
    >
      <ListGroupItem
        className="bg-black border-0 text-center"
        as="a"
        target="_blank"
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
      >
        <img src="/images/NEU.png" width="75px" alt="Northeastern University" />
      </ListGroupItem>
      <ListGroupItem
        className={`border-0 text-center ${
          pathname.startsWith("/Account") ? "bg-white" : "bg-black"
        }`}
      >
        <Link
          href="/Account"
          id="wd-account-link"
          className={`text-decoration-none ${
            pathname.startsWith("/Account") ? "text-danger" : "text-white"
          }`}
        >
          <FaRegCircleUser
            className={`fs-1 ${
              pathname.startsWith("/Account") ? "text-danger" : "text-white"
            }`}
          />
          <br />
          Account
        </Link>
      </ListGroupItem>
      <ListGroupItem
        className={`border-0 text-center ${
          pathname.startsWith("/Dashboard") || pathname.startsWith("/Courses")
            ? "bg-white"
            : "bg-black"
        }`}
      >
        <Link
          href="/Dashboard"
          id="wd-dashboard-link"
          className={`text-decoration-none ${
            pathname.startsWith("/Dashboard") || pathname.startsWith("/Courses")
              ? "text-danger"
              : "text-white"
          }`}
        >
          <AiOutlineDashboard
            className={`fs-1 ${
              pathname.startsWith("/Dashboard") ||
              pathname.startsWith("/Courses")
                ? "text-danger"
                : "text-white"
            }`}
          />
          <br />
          Dashboard
        </Link>
      </ListGroupItem>
      <ListGroupItem
        className={`border-0 text-center ${
          pathname.startsWith("/Calendar") ? "bg-white" : "bg-black"
        }`}
      >
        <Link
          href="/Calendar"
          id="wd-calendar-link"
          className={`text-decoration-none ${
            pathname.startsWith("/Calendar") ? "text-danger" : "text-white"
          }`}
        >
          <IoCalendarOutline
            className={`fs-1 ${
              pathname.startsWith("/Calendar") ? "text-danger" : "text-white"
            }`}
          />
          <br />
          Calendar
        </Link>
      </ListGroupItem>
      <ListGroupItem
        className={`border-0 text-center ${
          pathname.startsWith("/Inbox") ? "bg-white" : "bg-black"
        }`}
      >
        <Link
          href="/Inbox"
          id="wd-inbox-link"
          className={`text-decoration-none ${
            pathname.startsWith("/Inbox") ? "text-danger" : "text-white"
          }`}
        >
          <FaInbox
            className={`fs-1 ${
              pathname.startsWith("/Inbox") ? "text-danger" : "text-white"
            }`}
          />
          <br />
          Inbox
        </Link>
      </ListGroupItem>
      <ListGroupItem
        className={`border-0 text-center ${
          pathname.startsWith("/Labs") ? "bg-white" : "bg-black"
        }`}
      >
        <Link
          href="/Labs"
          id="wd-labs-link"
          className={`text-decoration-none ${
            pathname.startsWith("/Labs") ? "text-danger" : "text-white"
          }`}
        >
          <LiaBookSolid
            className={`fs-1 ${
              pathname.startsWith("/Labs") ? "text-danger" : "text-white"
            }`}
          />
          <br />
          Labs
        </Link>
      </ListGroupItem>
    </ListGroup>
  );
}
