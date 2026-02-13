import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        // Check localStorage for saved theme preference
        const savedTheme = localStorage.getItem('portfolio-theme');
        return savedTheme || 'dark';
    });

    useEffect(() => {
        // Update localStorage when theme changes
        localStorage.setItem('portfolio-theme', theme);

        // Update document class for CSS
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
        } else {
            document.documentElement.classList.add('light');
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const toggleTheme = (event) => {
        // Get click coordinates for the circular animation
        const x = event?.clientX ?? window.innerWidth - 100;
        const y = event?.clientY ?? window.innerHeight - 100;

        // Use View Transition API with circular clip-path animation
        if (document.startViewTransition) {
            const transition = document.startViewTransition(() => {
                setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
            });

            // Calculate the maximum radius needed to cover the entire screen
            const endRadius = Math.hypot(
                Math.max(x, window.innerWidth - x),
                Math.max(y, window.innerHeight - y)
            );

            // Animate the clip-path with optimized settings
            transition.ready.then(() => {
                document.documentElement.animate(
                    {
                        clipPath: [
                            `circle(0px at ${x}px ${y}px)`,
                            `circle(${endRadius}px at ${x}px ${y}px)`
                        ]
                    },
                    {
                        duration: 500, // Reduced from 800ms for snappier feel
                        easing: 'cubic-bezier(0.4, 0, 0.2, 1)', // Smoother easing
                        pseudoElement: '::view-transition-new(root)'
                    }
                );
            });
        } else {
            // Fallback for browsers that don't support View Transition API
            setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
