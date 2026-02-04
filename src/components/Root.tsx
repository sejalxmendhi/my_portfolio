import { Outlet } from 'react-router';
import { ThemeProvider } from '../context/ThemeContext';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

export function Root() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}