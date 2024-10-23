import React from 'react';

function WhatsappPopup() {
    return (
        <div className="whatsapp-popup">
            <a
                href="https://wa.me/918309439956"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-link"
            >
                {/* Use the image directly from the public folder */}
                <img
                    src="/icons/whatsapp-icon.png" // Correct path from public folder
                    alt="WhatsApp"
                    style={{ width: '48px', height: '48px' }}
                />
            </a>
        </div>
    );
}

export default WhatsappPopup;
