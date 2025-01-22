//your JS code here. If required.
document.querySelector('input[type="button"]').addEventListener('click', function () {
    // Get the dropdown list
    const colorSelect = document.getElementById('colorSelect');
    // Get the selected option
    const selectedOption = colorSelect.selectedIndex;
    if (selectedOption !== -1) {
        colorSelect.options[selectedOption].remove();
    }
});
