export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />
      <label htmlFor="wd-description">Description</label>
      <br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" defaultValue={100} />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select name="Assignment Group" id="wd-group">
              <option value="assignments">ASSIGNMENTS</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select name="Display Grade as" id="wd-display-grade-as">
              <option value="percentage">Percentage</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select name="Submission Type" id="wd-submission-type">
              <option value="online">ONLINE</option>
            </select>
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <form>
              <p>Online Entry Options</p>
              <input
                type="checkbox"
                id="wd-text-entry"
                name="text-entry"
                value="text-entry"
              />
              <label htmlFor="wd-text-entry">Text Entry</label>
              <br />
              <input
                type="checkbox"
                id="wd-website-url"
                name="website-url"
                value="website-url"
              />
              <label htmlFor="wd-website-url">Website URL</label>
              <br />
              <input
                type="checkbox"
                id="wd-media-recordings"
                name="media-recordings"
                value="media-recordings"
              />
              <label htmlFor="wd-media-recordings">Media Recordings</label>
              <br />
              <input
                type="checkbox"
                id="wd-student-annotation"
                name="student-annotation"
                value="student-annotation"
              />
              <label htmlFor="wd-student-annotation">Student Annotation</label>
              <br />
              <input
                type="checkbox"
                id="wd-file-upload"
                name="file-upload"
                value="file-upload"
              />
              <label htmlFor="wd-file-upload">File Uploads</label>
              <br />
            </form>
          </td>
        </tr>
        <tr>
          <td>
            <form>
              <label htmlFor="wd-assign-to">Assign to</label>
              <br />
              <input
                id="wd-assign-to"
                name="assignee"
                type="text"
                value="Everyone"
              />
              <br />
              <br />
              <label htmlFor="wd-due-date">Due</label>
              <br />
              <input
                id="wd-due-date"
                name="due"
                type="date"
                value="2024-05-13"
              />
              <br />
              <br />
              <label htmlFor="wd-available-from">Available from</label>
              <br />
              <input
                id="wd-available-from"
                name="available_from"
                type="date"
                value="2024-05-06"
              />
              <br />
              <br />
              <label htmlFor="wd-available-until">Until</label>
              <br />
              <input
                id="wd-available-until"
                name="until"
                type="date"
                value="2024-05-20"
              />
              <br />
              <button>Cancel</button> <button>Save</button>
            </form>
          </td>
        </tr>
        {/* Complete on your own */}
      </table>
    </div>
  );
}
