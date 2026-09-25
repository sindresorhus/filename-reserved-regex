/* eslint-disable no-control-regex, regexp/no-control-character -- These regexes exist to match control characters, so they cannot avoid them. */

export default function filenameReservedRegex() {
	return /[\u{0}-\u{1F}"*\/:<>?\\\|]|[ .]$/gv;
}

export function windowsReservedNameRegex() {
	return /^(?:con|prn|aux|nul|conin\$|conout\$|com[\d²³¹]|lpt[\d²³¹]) *(?:\..*)?$/iv;
}
