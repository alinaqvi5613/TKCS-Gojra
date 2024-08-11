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
let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;
function handleGesture() {
    const phoneHeader = document.querySelector('.phoneHeader');
    const deltaX = touchendX - touchstartX;
    const deltaY = touchendY - touchstartY;

    console.log('deltaX:', deltaX, 'deltaY:', deltaY); // Debugging output

    // Check if the swipe is more horizontal than vertical
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX < 0) { 
            phoneHeader.classList.remove('hide');
            phoneHeader.classList.add('show');
        } else if (deltaX > 0 && phoneHeader.classList.contains('show')) { 
            phoneHeader.classList.remove('show');
            phoneHeader.classList.add('hide');
        }
    }
}
document.addEventListener('touchstart', function(e) {
    if (window.innerWidth <= 860) {
        touchstartX = e.changedTouches[0].screenX;
        touchstartY = e.changedTouches[0].screenY;
    }
});
document.addEventListener('touchend', function(e) {
    if (window.innerWidth <= 860) {
        touchendX = e.changedTouches[0].screenX;
        touchendY = e.changedTouches[0].screenY;
        handleGesture();
    }
});
document.addEventListener('click', function(event) {
    const phoneHeader = document.querySelector('.phoneHeader');
    const innerPH = document.querySelector('.innerPH');

    // If the menu is visible and the click is outside of .innerPH
    if (phoneHeader.classList.contains('show') &&
        !innerPH.contains(event.target) &&
        !document.getElementById('phoneShowMenu').contains(event.target) &&
        !document.getElementById('close').contains(event.target)) {
        phoneHeader.classList.remove('show');
        phoneHeader.classList.add('hide');
    }
});
window.addEventListener('popstate', function(event) {
    const phoneHeader = document.querySelector('.phoneHeader');

    // Check the state to see if the menu should be hidden
    if (event.state && event.state.menuVisible) {
        phoneHeader.classList.remove('show');
        phoneHeader.classList.add('hide');
    }
});
window.addEventListener('load', function() {
    const imageGallery = document.querySelector('.imageGallery');
    const images = document.querySelectorAll('.imges');

    function setGalleryHeight() {
        let maxHeight = 0;

        images.forEach((img) => {
            if (img.clientHeight > maxHeight) {
                maxHeight = img.clientHeight;
            }
        });

        imageGallery.style.height = maxHeight + 'px';
    }

    // Initial height set
    setGalleryHeight();

    // If images change size (e.g., window resize, etc.), update the gallery height
    window.addEventListener('resize', setGalleryHeight);
});
const slides = document.querySelectorAll(".slide");
let counter = 0;
const totalSlides = slides.length;
let autoSlideInterval;
slides.forEach((slide, index) => {
slide.style.left = `${index * 100}%`;
});

// Function to slide the images
const slideImage = () => {
slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
});
}
const goPrev = () => {
counter--;
if (counter < 0) {
    counter = totalSlides - 1; // Go to the last slide if we are at the first slide
}
resetAutoSlide();  // Reset the auto-slide interval
slideImage();
}
const goNext = () => {
counter++;
if (counter >= totalSlides) {
    counter = 0; // Go to the first slide if we are at the last slide
}
resetAutoSlide();  // Reset the auto-slide interval
slideImage();
}
const autoSlide = () => {
autoSlideInterval = setInterval(goNext, 8000); // Start the auto-slide
}
const resetAutoSlide = () => {
clearInterval(autoSlideInterval); // Clear the current interval
autoSlide();  // Restart the auto-slide
}
autoSlide();

