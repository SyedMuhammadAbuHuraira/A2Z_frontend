// app/pillars/layout.tsx
import { ReactNode } from 'react';

export default function PillarsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      {children}
    </div>
  );
}