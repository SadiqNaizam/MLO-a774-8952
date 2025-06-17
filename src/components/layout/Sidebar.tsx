import React from 'react';
import { cn } from '@/lib/utils';
import SidebarNav from '../Dashboard/SidebarNav';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <aside
      className={cn(
        'hidden h-full w-64 flex-col border-r border-border bg-sidebar text-sidebar-foreground lg:flex',
        className
      )}
    >
      {/* Logo could be placed here if design requires it in sidebar top */}
      {/* e.g., <div className="p-4 border-b border-border flex items-center justify-center h-16">
        <h1 className="text-xl font-bold">Logo</h1>
      </div> */}
      <div className="flex-grow overflow-y-auto">
        <SidebarNav />
      </div>
      {/* Optional: Sidebar Footer for settings, user profile quick access etc. */}
      {/* <div className="p-4 border-t border-border">
        <p className="text-xs text-center">© 2024 Phoenix Corp</p>
      </div> */}
    </aside>
  );
};

export default Sidebar;
