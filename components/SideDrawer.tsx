/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useEffect, useRef } from 'react';

interface SideDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children?: React.ReactNode;
}

const SideDrawer = ({ isOpen, onClose, title, children }: SideDrawerProps) => {
    const closeButtonRef = useRef<HTMLButtonElement>(null);
    const previousFocusRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (isOpen) {
            // Only capture if we don't already have one, in case of re-renders while open
            if (!previousFocusRef.current) {
                previousFocusRef.current = document.activeElement as HTMLElement;
            }
            // Focus the close button, giving the DOM a tick to render it
            setTimeout(() => {
                closeButtonRef.current?.focus();
            }, 0);
        } else {
            // Restore focus when closing
            if (previousFocusRef.current) {
                previousFocusRef.current.focus();
                previousFocusRef.current = null;
            }
        }
    }, [isOpen]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="drawer-overlay" onClick={onClose}>
            <div
                className="drawer-content"
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="drawer-title"
            >
                <div className="drawer-header">
                    <h2 id="drawer-title">{title}</h2>
                    <button ref={closeButtonRef} onClick={onClose} className="close-button" aria-label="Close drawer" title="Close drawer">&times;</button>
                </div>
                <div className="drawer-body">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default SideDrawer;
