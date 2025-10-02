"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { ListGroup, ListGroupItem, Collapse } from "react-bootstrap";
import { BsGripVertical, BsChevronDown, BsChevronUp } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import AssignmentControls from "./AssignmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";

export default function Assignments() {
  const { cid } = useParams();
  const [isAssignmentsOpen, setIsAssignmentsOpen] = useState(true);

  return (
    <div id="wd-assignments">
      <AssignmentControls />
      <br />

      <ListGroup className="rounded-0" id="wd-assignment-list">
        <ListGroupItem className="wd-assignment-group p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div
              className="d-flex align-items-center cursor-pointer"
              onClick={() => setIsAssignmentsOpen(!isAssignmentsOpen)}
              style={{ cursor: "pointer" }}
            >
              <BsGripVertical className="me-2 fs-3" />
              {isAssignmentsOpen ? (
                <BsChevronDown className="me-2" />
              ) : (
                <BsChevronUp className="me-2" />
              )}
              ASSIGNMENTS
            </div>
            <div className="d-flex align-items-center">
              <span className="badge bg-secondary text-dark border border-dark me-2 px-3 py-2 rounded-pill">
                40% of Total
              </span>
              <AssignmentControlButtons />
            </div>
          </div>
          <Collapse in={isAssignmentsOpen}>
            <div>
              <ListGroup className="wd-assignment-items rounded-0">
                <ListGroupItem className="wd-assignment-item p-3 ps-1">
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="d-flex align-items-center">
                      <BsGripVertical className="me-2 fs-3" />
                      <FaEdit className="me-3 fs-5 text-success" />
                      <div>
                        <Link
                          href={`/Courses/${cid}/Assignments/A1`}
                          className="wd-assignment-link text-decoration-none text-dark fw-bold"
                        >
                          A1 - ENV + HTML
                        </Link>
                        <div className="text-muted small mt-1">
                          <span className="text-danger">Multiple Modules</span>{" "}
                          | <strong>Not Available until</strong> May 6 at
                          12:00am |<strong> Due</strong> May 13 at 11:59pm |
                          100pts
                        </div>
                      </div>
                    </div>
                    <AssignmentControlButtons />
                  </div>
                </ListGroupItem>
                <ListGroupItem className="wd-assignment-item p-3 ps-1">
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="d-flex align-items-center">
                      <BsGripVertical className="me-2 fs-3" />
                      <FaEdit className="me-3 fs-5 text-success" />
                      <div>
                        <Link
                          href={`/Courses/${cid}/Assignments/A2`}
                          className="wd-assignment-link text-decoration-none text-dark fw-bold"
                        >
                          A2 - CSS + BOOTSTRAP
                        </Link>
                        <div className="text-muted small mt-1">
                          <span className="text-danger">Multiple Modules</span>{" "}
                          | <strong>Not Available until</strong> May 13 at
                          12:00am |<strong> Due</strong> May 20 at 11:59pm |
                          100pts
                        </div>
                      </div>
                    </div>
                    <AssignmentControlButtons />
                  </div>
                </ListGroupItem>
                <ListGroupItem className="wd-assignment-item p-3 ps-1">
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="d-flex align-items-center">
                      <BsGripVertical className="me-2 fs-3" />
                      <FaEdit className="me-3 fs-5 text-success" />
                      <div>
                        <Link
                          href={`/Courses/${cid}/Assignments/A3`}
                          className="wd-assignment-link text-decoration-none text-dark fw-bold"
                        >
                          A3 - JAVASCRIPT + REACT
                        </Link>
                        <div className="text-muted small mt-1">
                          <span className="text-danger">Multiple Modules</span>{" "}
                          | <strong>Not Available until</strong> May 20 at
                          12:00am |<strong> Due</strong> May 27 at 11:59pm |
                          100pts
                        </div>
                      </div>
                    </div>
                    <AssignmentControlButtons />
                  </div>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Collapse>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
