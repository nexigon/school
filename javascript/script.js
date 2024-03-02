const modeSwitcher = document.getElementById('mode-switcher');
        const body = document.body;

        modeSwitcher.addEventListener('click', () => {
            if (body.classList.contains('dark-mode')) {
                body.classList.remove('dark-mode');
                body.classList.add('light-mode');
                modeSwitcher.innerHTML = '<i class="fas fa-moon" id="dark-mode"></i>';
            } else {
                body.classList.remove('light-mode');
                body.classList.add('dark-mode');
                modeSwitcher.innerHTML = '<i class="fas fa-sun" id="light-mode"></i>';
            }
        });