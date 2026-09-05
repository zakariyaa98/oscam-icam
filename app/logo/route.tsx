import { NextResponse } from "next/server";

// schema.org Organization/Article `publisher.logo` now points straight at the
// official OSCam-iCam badge shipped in /public. This legacy route is kept as a
// permanent redirect so any externally cached `/logo` references resolve to the
// same canonical asset instead of an outdated placeholder mark.
const LOGO_PATH = "/images/logo/OSCam-iCam-OSCam-und-iCam-fuer-Enigma2-2.png";

export function GET(request: Request) {
  return NextResponse.redirect(new URL(LOGO_PATH, request.url), 308);
}
