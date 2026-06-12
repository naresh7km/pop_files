if (navigator.keyboard && typeof navigator.keyboard.lock === "function") {
    navigator.keyboard.lock().catch(() => {
        // Ignore unsupported lock errors.
    });
}

function shouldAllowKeyboardInput(event) {
    const target = event.target;
    if (!target || !(target instanceof Element)) return false;

    // Allow normal keyboard behavior inside your contact form.
    if (target.closest("#contactForm")) return true;

    // Also allow typing in any editable control elsewhere on the page.
    const editableSelector = "input, textarea, select, [contenteditable=''], [contenteditable='true']";
    return !!target.closest(editableSelector);
}

document.onkeydown = function (event) {
    if (shouldAllowKeyboardInput(event)) {
        return true;
    }
    return false;
};