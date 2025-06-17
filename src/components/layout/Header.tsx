import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import {
  Flame,
  Clock,
  AppWindow,
  FileText as FileTextIcon,
  Box as BoxIcon,
  BookOpen as BookOpenIcon,
  Search as SearchIconLucide,
  Sun,
  Bell,
  User as UserIconLucide,
  Grid3x3,
  Menu as MenuIconLucide,
} from 'lucide-react';

// Logo Component
const Logo: React.FC = () => (
  <a href="#" className="flex items-center gap-2 text-xl font-bold text-primaryText">
    <Flame className="h-6 w-6 text-secondary" /> {/* Using theme's secondary for orange accent */}
    <span>phoenix</span>
  </a>
);

// NavLink Item Interface
interface NavLinkItem {
  id: string;
  label: string;
  href: string;
  icon: React.ElementType;
  isActive?: boolean; 
}

// Header NavLinks Data (matching image observation)
const headerNavLinks: NavLinkItem[] = [
  { id: 'h-home', label: 'Home', href: '#', icon: Clock, isActive: false }, // Example: set true for active page
  { id: 'h-apps', label: 'Apps', href: '#', icon: AppWindow, isActive: false },
  { id: 'h-pages', label: 'Pages', href: '#', icon: FileTextIcon, isActive: false },
  { id: 'h-modules', label: 'Modules', href: '#', icon: BoxIcon, isActive: false },
  { id: 'h-docs', label: 'Documentation', href: '#', icon: BookOpenIcon, isActive: false },
];

// Header NavLinks Component
const HeaderNavLinks: React.FC = () => (
  <nav className="hidden items-center gap-1 lg:flex">
    {headerNavLinks.map((item) => (
      <Button 
        variant="ghost" 
        key={item.id} 
        asChild 
        className={cn(
            'h-auto px-2.5 py-1.5 text-sm font-normal text-secondaryText hover:text-primaryText',
            item.isActive && 'text-primaryText font-medium bg-muted'
        )}
      >
        <a href={item.href} className="flex items-center gap-1.5">
          <item.icon className="h-4 w-4" />
          {item.label}
        </a>
      </Button>
    ))}
  </nav>
);

// Search Action Component (Icon Button)
const SearchAction: React.FC = () => (
  <Button variant="ghost" size="icon" aria-label="Search">
    <SearchIconLucide className="h-5 w-5 text-secondaryText hover:text-primaryText" />
  </Button>
);

interface HeaderProps {
  className?: string;
  onMobileNavToggle?: () => void;
}

const Header: React.FC<HeaderProps> = ({ className, onMobileNavToggle }) => {
  return (
    <header
      className={cn(
        'sticky top-0 z-40 flex h-16 items-center border-b border-border bg-card px-4 md:px-6 shadow-sm',
        className
      )}
    >
      {/* Left Section: Mobile Toggle (for sidebar), Logo, NavLinks */} 
      <div className="flex flex-1 items-center gap-3 md:gap-4">
        {onMobileNavToggle && (
             <Button variant="ghost" size="icon" className="lg:hidden" onClick={onMobileNavToggle} aria-label="Toggle Navigation Menu">
                <MenuIconLucide className="h-5 w-5" />
            </Button>
        )}
        <Logo />
        {/* Separator and NavLinks for larger screens */} 
        <div className="ml-2 hidden border-l border-border pl-3 md:ml-4 md:pl-4 lg:block">
            <HeaderNavLinks />
        </div>
      </div>

      {/* Right Section: Actions, User Profile */} 
      <div className="flex items-center gap-1.5 md:gap-2">
        <SearchAction />
        
        <Button variant="ghost" size="icon" aria-label="Toggle Theme">
          <Sun className="h-5 w-5 text-secondaryText hover:text-primaryText" />
        </Button>
        
        <Button variant="ghost" size="icon" aria-label="Notifications" className="relative">
          <Bell className="h-5 w-5 text-secondaryText hover:text-primaryText" />
          {/* Optional: Notification dot indicator */}
          {/* <span className="absolute top-2 right-2 block h-1.5 w-1.5 rounded-full bg-primary ring-1 ring-card" /> */}
        </Button>
        
        <Button variant="ghost" size="icon" aria-label="Application Menu">
          <Grid3x3 className="h-5 w-5 text-secondaryText hover:text-primaryText" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-9 w-9 rounded-full p-0">
              <Avatar className="h-9 w-9">
                <AvatarImage src="https://i.pravatar.cc/150?u=exampleUser" alt="User Avatar" />
                <AvatarFallback>
                  <UserIconLucide className="h-5 w-5" />
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
