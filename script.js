document.querySelectorAll('h2').forEach(title => {
    title.addEventListener('click', () => {
        const nextElement = title.nextElementSibling;
        if (nextElement) {
            nextElement.classList.toggle('hidden');
            if (nextElement.classList.contains('hidden')) {
                nextElement.style.maxHeight = '0';
            } else {
                nextElement.style.maxHeight = nextElement.scrollHeight + 'px';
            }
        }
    });
})
