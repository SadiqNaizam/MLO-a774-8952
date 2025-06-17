import React from 'react';
import { cn } from '@/lib/utils';
import {
  Home as HomeIcon,
  LayoutGrid as AppsIcon,
  FileText as PagesIcon,
  Box as ModulesIcon,
  BookOpen as DocumentationIcon,
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: React.ElementType;
  isActive?: boolean;
}

const navItemsData: NavItem[] = [
  { id: 'home', label: 'Home', href: '#', icon: HomeIcon, isActive: true },
  { id: 'apps', label: 'Apps', href: '#', icon: AppsIcon },
  { id: 'pages', label: 'Pages', href: '#', icon: PagesIcon },
  { id: 'modules', label: 'Modules', href: '#', icon: ModulesIcon },
  { id: 'documentation', label: 'Documentation', href: '#', icon: DocumentationIcon },
];

interface SidebarNavProps {
  className?: string;
}

const SidebarNav: React.FC<SidebarNavProps> = ({ className }) => {
  return (
    <nav className={cn('space-y-1 p-4', className)}>
      {navItemsData.map((item) => (
        <a
          key={item.id}
          href={item.href}
          className={cn(
            'group flex items-center rounded-md px-3 py-2 text-sm font-medium',
            item.isActive
              ? 'bg-primary/10 text-primary'
              : 'text-sidebar-foreground hover:bg-muted hover:text-primaryText',
            'transition-colors duration-150 ease-in-out'
          )}
        >
          <item.icon className={cn('mr-3 h-5 w-5 flex-shrink-0', item.isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-primaryText')} />
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default SidebarNav;
