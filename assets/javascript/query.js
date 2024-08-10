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
document.addEventListener('DOMContentLoaded', function () {
    const dropDownMenus = document.querySelectorAll('.dropDownMenu');

    dropDownMenus.forEach(dropDownMenu => {
        const subHead = dropDownMenu.querySelector('.subHead');

        subHead.addEventListener('click', function (event) {
            event.stopPropagation(); // Prevents the event from bubbling up to the document

            const isExpanded = dropDownMenu.style.height === '22rem';

            // Reset all other menus
            dropDownMenus.forEach(menu => {
                if (menu !== dropDownMenu) {
                    menu.style.height = '3.1rem';
                    menu.style.backgroundColor = 'white';
                    menu.classList.remove('expanded');
                }
            });

            if (isExpanded) {
                dropDownMenu.style.height = '3.1rem';
                dropDownMenu.style.backgroundColor = 'white';
                dropDownMenu.classList.remove('expanded');
            } else {
                dropDownMenu.style.height = '22rem';
                dropDownMenu.style.backgroundColor = '#006a4e13';
                dropDownMenu.classList.add('expanded');
            }
        });

        document.addEventListener('click', function () {
            dropDownMenus.forEach(menu => {
                menu.style.height = '3.1rem';
                menu.style.backgroundColor = 'white';
                menu.classList.remove('expanded');
            });
        });

        dropDownMenu.addEventListener('click', function (event) {
            event.stopPropagation(); // Prevents the event from bubbling up to the document
        });
    });
});
document.getElementById('phoneShowMenu').addEventListener('click', function() {
    const phoneHeader = document.querySelector('.phoneHeader');
    phoneHeader.classList.remove('hide');
    phoneHeader.classList.add('show');
});
document.getElementById('close').addEventListener('click', function() {
    const phoneHeader = document.querySelector('.phoneHeader');
    phoneHeader.classList.remove('show');
    phoneHeader.classList.add('hide');
});
