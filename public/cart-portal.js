document.addEventListener('DOMContentLoaded', () => {
    let panel = document.querySelector('.customer-portal-panel');
    
    // Get the panel's current top position relative to the viewport
    let topOffset = panel.getBoundingClientRect().top;
    
    // Set the panel's height to fill the remaining space
    panel.style.height = (window.innerHeight - topOffset + 17) + 'px';

    attachMobileMenu();
});

window.addEventListener("resize", function() {
    let panel = document.querySelector('.customer-portal-panel');
    let topOffset = panel.getBoundingClientRect().top;
    panel.style.height = (window.innerHeight - topOffset + 17) + 'px';
});



const attachMobileMenu = () => {
    let mobileMenuButton = document.querySelector('.mobile-menu-button');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenuButton.nextElementSibling.style.display = mobileMenuButton.nextElementSibling.style.display === 'flex' ? 'none' : 'flex';

        mobileMenuButton.style.borderRadius = mobileMenuButton.nextElementSibling.style.display === 'flex' ? '0px' : '5px';

        mobileMenuButton.querySelector('.chevron').style.transform = mobileMenuButton.nextElementSibling.style.display === 'flex' ? 'rotate(0deg)' : 'rotate(180deg)';
    });
}