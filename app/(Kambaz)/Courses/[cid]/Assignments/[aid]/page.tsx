import { Form, Row, Col, Card, Button } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <div className="mb-3">
        <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
        <Form.Control type="text" id="wd-name" defaultValue="A1 - ENV + HTML" />
      </div>

      <div className="mb-3">
        <Form.Control
          as="textarea"
          rows={9}
          id="wd-description"
          defaultValue="The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kambas application should include a link to navigate back to the landing page."
        />
      </div>

      <table>
        <tbody>
          <tr>
            <td align="right" valign="top" style={{ paddingRight: "10px" }}>
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <Form.Control type="number" id="wd-points" defaultValue={100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top" style={{ paddingRight: "10px" }}>
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <Form.Select id="wd-group" defaultValue="ASSIGNMENTS">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="EXAMS">EXAMS</option>
                <option value="PROJECT">PROJECT</option>
              </Form.Select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top" style={{ paddingRight: "10px" }}>
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <Form.Select id="wd-display-grade-as" defaultValue="Percentage">
                <option value="Percentage">Percentage</option>
                <option value="Points">Points</option>
                <option value="Letter">Letter</option>
              </Form.Select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top" style={{ paddingRight: "10px" }}>
              <label>Submission Type</label>
            </td>
            <td>
              <Card className="mb-3" style={{ padding: "15px", margin: "0" }}>
                <div className="mb-3">
                  <Form.Select id="wd-submission-type" defaultValue="Online">
                    <option value="Online">Online</option>
                    <option value="Paper">Paper</option>
                    <option value="External Tool">External Tool</option>
                  </Form.Select>
                </div>

                <strong>Online Entry Options</strong>
                <div className="mt-2">
                  <Form.Check
                    type="radio"
                    name="online-entry-options"
                    id="wd-text-entry"
                    label="Text Entry"
                    className="mb-2"
                  />
                  <Form.Check
                    type="radio"
                    name="online-entry-options"
                    id="wd-website-url"
                    label="Website URL"
                    className="mb-2"
                  />
                  <Form.Check
                    type="radio"
                    name="online-entry-options"
                    id="wd-media-recordings"
                    label="Media Recordings"
                    className="mb-2"
                  />
                  <Form.Check
                    type="radio"
                    name="online-entry-options"
                    id="wd-student-annotation"
                    label="Student Annotation"
                    className="mb-2"
                  />
                  <Form.Check
                    type="radio"
                    name="online-entry-options"
                    id="wd-file-upload"
                    label="File Uploads"
                    defaultChecked
                  />
                </div>
              </Card>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top" style={{ paddingRight: "10px" }}>
              <label>Assign</label>
            </td>
            <td>
              <Card className="mb-3" style={{ padding: "15px", margin: "0" }}>
                <div className="mb-3">
                  <strong>Assign to</strong>
                  <Form.Control
                    type="text"
                    id="wd-assign-to"
                    defaultValue="Everyone"
                    className="mt-1"
                  />
                </div>

                <div className="mb-3">
                  <strong>Due</strong>
                  <Form.Control
                    type="date"
                    id="wd-due-date"
                    defaultValue="2024-05-13"
                    className="mt-1"
                  />
                </div>

                <div className="mb-3">
                  <strong>Available from</strong>
                  <Form.Control
                    type="date"
                    id="wd-available-from"
                    defaultValue="2024-05-06"
                    className="mt-1"
                  />
                </div>

                <div className="mb-0">
                  <strong>Until</strong>
                  <Form.Control
                    type="date"
                    id="wd-available-until"
                    defaultValue="2024-05-20"
                    className="mt-1"
                  />
                </div>
              </Card>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="d-flex justify-content-end gap-2 mt-3">
        <Button variant="secondary" size="lg">
          Cancel
        </Button>
        <Button variant="danger" size="lg">
          Save
        </Button>
      </div>
    </div>
  );
}
