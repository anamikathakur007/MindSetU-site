
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  
  const navItems = [
    { href: '/', icon: 'ri-home-5-fill', iconOutline: 'ri-home-5-line', label: 'Home' },
    { href: '/chat', icon: 'ri-chat-3-fill', iconOutline: 'ri-chat-3-line', label: 'Chat' },
    { href: '/assessment', icon: 'ri-heart-pulse-fill', iconOutline: 'ri-heart-pulse-line', label: 'Test' },
    { href: '/conditions', icon: 'ri-file-list-3-fill', iconOutline: 'ri-file-list-3-line', label: 'Guide' },
    { href: '/profile', icon: 'ri-user-3-fill', iconOutline: 'ri-user-3-line', label: 'Profile' }
  ];

  return (
    <div className="fixed bottom-0 w-full bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-2xl z-20">
      <div className="grid grid-cols-5 h-20 px-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href}>
              <div className={`h-full flex flex-col items-center justify-center space-y-1 relative transition-all duration-300 ${
                isActive ? 'text-indigo-600 transform scale-110' : 'text-gray-400 hover:text-gray-600'
              }`}>
                {isActive && (
                  <div className="absolute -top-1 w-8 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"></div>
                )}
                <div className={`w-6 h-6 flex items-center justify-center ${
                  isActive ? 'text-indigo-600' : 'text-gray-400'
                }`}>
                  <i className={`${isActive ? item.icon : item.iconOutline} text-xl`}></i>
                </div>
                <span className={`text-xs font-medium ${
                  isActive ? 'text-indigo-600' : 'text-gray-400'
                }`}>{item.label}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
