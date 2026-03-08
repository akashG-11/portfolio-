import React, { useState, useEffect } from 'react';
import { Search, Command, X, Home, User, Briefcase, Code, Award, GraduationCap, Mail } from 'lucide-react';
import './CommandPalette.css';

const items = [
    { id: 'hero', label: 'Introduction', icon: Home },
    { id: 'about', label: 'About Me', icon: User },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'skills', label: 'Skills & Tools', icon: Code },
    { id: 'experience', label: 'Experience', icon: Award },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'contact', label: 'Contact', icon: Mail },
];

const CommandPalette = ({ isOpen, setIsOpen }) => {
    const [query, setQuery] = useState('');

    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen(prev => !prev);
            }
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    if (!isOpen) return null;

    const filteredItems = items.filter(item =>
        item.label.toLowerCase().includes(query.toLowerCase())
    );

    const handleSelect = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
        setQuery('');
    };

    return (
        <div className="command-palette-overlay" onClick={() => setIsOpen(false)}>
            <div className="command-palette" onClick={e => e.stopPropagation()}>
                <div className="command-palette-header">
                    <Search size={20} className="search-icon" />
                    <input
                        type="text"
                        placeholder="Type a command or search..."
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        autoFocus
                    />
                    <div className="close-btn" onClick={() => setIsOpen(false)}>
                        <X size={18} />
                    </div>
                </div>
                <div className="command-palette-results">
                    {filteredItems.length > 0 ? (
                        filteredItems.map(item => (
                            <div key={item.id} className="result-item" onClick={() => handleSelect(item.id)}>
                                <item.icon size={18} />
                                <span>{item.label}</span>
                                <div className="result-hint">Go to</div>
                            </div>
                        ))
                    ) : (
                        <div className="no-results">No results found for "{query}"</div>
                    )}
                </div>
                <div className="command-palette-footer">
                    <div className="footer-tip">
                        <span className="key-hint">Enter</span> to select
                    </div>
                    <div className="footer-tip">
                        <span className="key-hint">Esc</span> to close
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommandPalette;
