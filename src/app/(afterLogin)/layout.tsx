import React, { ReactNode } from 'react';

export default function AfterLoginLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            AfterLoginLayout
            {children}
        </div>
    );
}