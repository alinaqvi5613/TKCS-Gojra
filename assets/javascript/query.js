document.addEventListener('DOMContentLoaded', () => {
    const elements = {
        'about': '.aboutusDrop',
        'admission': '.admissionsDrop',
        'sservices': '.stuServicesDrop',
        'life': '.lifeDrop',
        'policies': '.policiesDrop'
    };

    function updateDropdownPosition() {
        for (const [id, className] of Object.entries(elements)) {
            const element = document.getElementById(id);
            const dropdown = document.querySelector(className);
            
            if (element && dropdown) {
                const rect = element.getBoundingClientRect();
                dropdown.style.left = `${rect.left}px`;
            }
        }
    }

    updateDropdownPosition();

    function setupHoverEffect() {
        Object.entries(elements).forEach(([id, className]) => {
            const element = document.getElementById(id);
            const dropdown = document.querySelector(className);
            
            if (element && dropdown) {
                element.addEventListener('mouseenter', () => {
                    updateDropdownPosition();
                    dropdown.classList.add('animate'); // Add the animate class
                    Object.values(elements).forEach(selector => {
                        if (selector !== className) {
                            const otherDropdown = document.querySelector(selector);
                            if (otherDropdown) {
                                otherDropdown.classList.remove('animate'); // Remove the animate class from other dropdowns
                            }
                        }
                    });
                });

                element.addEventListener('mouseleave', () => {
                    setTimeout(() => {
                        if (!dropdown.matches(':hover')) {
                            dropdown.classList.remove('animate'); // Remove the animate class
                        }
                    }, 100);
                });

                dropdown.addEventListener('mouseenter', () => {
                    dropdown.classList.add('animate'); // Add the animate class
                });

                dropdown.addEventListener('mouseleave', () => {
                    dropdown.classList.remove('animate'); // Remove the animate class
                });
            }
        });
    }

    setupHoverEffect();
});

