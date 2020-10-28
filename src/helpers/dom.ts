export function createElement(tag: string) {
    return document.createElement(tag);
}

export function appendChild(child: HTMLElement, parent: HTMLElement) {
    parent.appendChild(child);
}
