import html2canvas from 'https://cdn.jsdelivr.net/npm/html2canvas@1.4/+esm';

export function download(elem, name) {
    html2canvas(elem, { allowTaint: true }).then(
		function _canvas_dwld(canvas) {
			const link = document.createElement("a");
			document.body.appendChild(link);
			link.download = `${name}.png`;
			link.href = canvas.toDataURL();
			link.target = '_blank';
			link.click();
			link.remove();
		}
	);
}