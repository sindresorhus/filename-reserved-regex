/* eslint-disable no-control-regex */

export default function filenameReservedRegex() {
	return /[<>:"/\\|?*\u0000-\u001F]|[. ]$/g;
}

export function windowsReservedNameRegex() {
	return /^(?:con|prn|aux|nul|conin\$|conout\$|com[\d¹²³]|lpt[\d¹²³]) *(?:\..*)?$/i;
}
