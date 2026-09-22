// Google Apps Script for Real Time Web contact messages.
// Paste over the old script, Save, then Deploy > Manage deployments > Edit > New version.
// Or run setupHeaders() once from the editor (Run).

var HEADERS = ["Time", "Name", "Email", "Message"];

function ensureHeaders(sheet) {
  const first = sheet.getRange(1, 1, 1, HEADERS.length).getValues()[0];
  const hasHeader = String(first[0]).toLowerCase() === "time";
  if (hasHeader) return;
  const rowEmpty = first.every(function (cell) {
    return cell === "";
  });
  if (!rowEmpty) sheet.insertRowBefore(1);
  sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
  sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
}

function setupHeaders() {
  ensureHeaders(SpreadsheetApp.getActiveSpreadsheet().getSheets()[0]);
}

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    ensureHeaders(sheet);
    const data = e.postData && e.postData.contents ? JSON.parse(e.postData.contents) : {};
    sheet.appendRow([
      new Date(),
      String(data.name || ""),
      String(data.email || ""),
      String(data.message || ""),
    ]);
    return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(
      ContentService.MimeType.JSON,
    );
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: String(err) }),
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput("Contact endpoint is live.");
}
