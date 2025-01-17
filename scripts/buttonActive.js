function buttonActive (activeButton) {
    const container = activeButton.parentElement;
    const buttons = container.querySelectorAll('button');

    buttons.forEach(button => button.classList.remove('active'));
    activeButton.classList.add('active');
}