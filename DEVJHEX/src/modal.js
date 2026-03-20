let lastFocusedElement = null;

const focusableSelectors = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

const content = {
    privacy: {
        title: 'Privacy Policy',
        body: `
            <p>Last updated: 2025</p>
            <h3>Information I Collect</h3>
            <p>When you use the contact form on this site, I collect your name, email address and message. This information is only used to respond to your enquiry.</p>
            <h3>How I Use Your Information</h3>
            <p>Your information is never sold, shared or distributed to any third party. It is used solely to respond to your message.</p>
            <h3>Cookies</h3>
            <p>This site does not use tracking cookies or any third party analytics.</p>
            <h3>Contact</h3>
            <p>If you have any questions about this privacy policy, contact me at <a href="mailto:devjhex@gmail.com">devjhex@gmail.com</a>.</p>
        `
    },
    terms: {
        title: 'Terms & Conditions',
        body: `
            <p>Last updated: 2025</p>
            <h3>Ownership</h3>
            <p>All work, designs and content displayed on this portfolio are the intellectual property of Jonah (DevJhex). You may not copy, reproduce or use any work without written permission.</p>
            <h3>Use of This Site</h3>
            <p>This site is provided for informational purposes. You agree not to misuse or attempt to harm this website in any way.</p>
            <h3>Disclaimer</h3>
            <p>This site is provided as is without any warranties. I am not liable for any damages arising from the use of this site.</p>
            <h3>Contact</h3>
            <p>For any questions regarding these terms, contact me at <a href="mailto:devjhex@gmail.com">devjhex@gmail.com</a>.</p>
        `
    }
};


export function initModal() {
    const modal = document.getElementById('legal-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.getElementById('modal-close');

    function trapFocus(e) {
        const focusable = [...modal.querySelectorAll(focusableSelectors)];
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
    function openModal(type) {
        lastFocusedElement = document.activeElement;
        modalTitle.textContent = content[type].title;
        modalBody.innerHTML = content[type].body;
        modal.removeAttribute('hidden');
        modal.setAttribute('aria-hidden', 'false');
        document.body.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = 'hidden';
        closeBtn.focus();
        modal.addEventListener('keydown', trapFocus);
    }
    function closeModal() {
        modal.setAttribute('hidden', '');
        modal.setAttribute('aria-hidden', 'true');
        document.body.removeAttribute('aria-hidden');
        document.body.style.overflow = '';
        modal.removeEventListener('keydown', trapFocus);
        lastFocusedElement?.focus();
    }
    document.getElementById('privacy-btn').addEventListener('click', (event) => {
        event.preventDefault();
        openModal('privacy');
    }
    );
    document.getElementById('terms-btn').addEventListener('click', (event) => {
        event.preventDefault();
        openModal('terms');

    }
    );
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.hasAttribute('hidden')) closeModal();
    });
}
