import React from 'react';
import { Home, User, Briefcase, GraduationCap, Code, Mail, Award, Clock } from 'lucide-react';
import './Sidebar.css';

const navItems = [
    { id: 'hero', label: 'Introduction', icon: Home },
    { id: 'about', label: 'About Me', icon: User },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'skills', label: 'Skills & Tools', icon: Code },
    { id: 'experience', label: 'Experience', icon: Award },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'contact', label: 'Contact', icon: Mail },
];

const Sidebar = ({ activeSection, setActiveSection }) => {
    return (
        <aside className="sidebar">
            <div className="sidebar-logo">
                <div className="logo-dot"></div>
                <span>Karthik.</span>
            </div>
            <nav className="sidebar-nav">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                        onClick={() => {
                            setActiveSection(item.id);
                            document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        <item.icon size={20} />
                        <span>{item.label}</span>
                    </button>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;
