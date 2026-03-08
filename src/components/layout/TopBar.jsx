import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Sun, Moon, Search, Command } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import './TopBar.css';

const TopBar = ({ onOpenCommandPalette }) => {
    const { theme, toggleTheme } = useTheme();
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <header className="topbar">
            <div className="search-trigger" onClick={onOpenCommandPalette}>
                <Search size={18} />
                <span>Search...</span>
                <div className="kbd">
                    <Command size={12} />
                    <span>K</span>
                </div>
            </div>

            <div className="topbar-actions">
                <div className="live-clock">
                    {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>

                <div className="social-links">
                    <a href="https://github.com/akashG-11" target="_blank" rel="noreferrer" aria-label="GitHub">
                        <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/karthiksg11" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                        <Linkedin size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/karthiksg11" target="_blank" rel="noreferrer" aria-label="Twitter">
                        <Twitter size={20} />
                    </a>
                </div>

                <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
                    {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                </button>
            </div>
        </header>
    );
};

export default TopBar;
