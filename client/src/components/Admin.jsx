import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { MessageSquare, Eye, RefreshCw, LogOut, ChevronRight, User, Mail, Calendar } from 'lucide-react';

const Admin = () => {
    const [messages, setMessages] = useState([]);
    const [views, setViews] = useState(0);
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const API_URL = 'http://localhost:5000/api'; // Update this if your production URL is different

    useEffect(() => {
        // Check if session exists in local storage
        const authStatus = localStorage.getItem('adminAuth');
        if (authStatus === 'true') {
            setIsAuthenticated(true);
            fetchData();
        }
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        // Simple password check for now - in production use a proper auth system
        if (password === 'admin123') { // The user can change this
            setIsAuthenticated(true);
            localStorage.setItem('adminAuth', 'true');
            fetchData();
        } else {
            setError('Invalid password');
        }
    };

    const fetchData = async () => {
        setLoading(true);
        try {
            const [messagesRes, viewsRes] = await Promise.all([
                axios.get(`${API_URL}/admin/messages`),
                axios.get(`${API_URL}/admin/views`)
            ]);
            setMessages(messagesRes.data);
            setViews(viewsRes.data.count || 0);
        } catch (err) {
            console.error('Error fetching data:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('adminAuth');
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-md p-8 rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] backdrop-blur-xl shadow-2xl"
                >
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">Admin Portal</h2>
                        <p className="text-[var(--text-secondary)]">Enter your credentials to continue</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border border-[var(--border-color)] bg-transparent text-[var(--text-primary)] focus:ring-2 focus:ring-[var(--text-accent)] focus:border-transparent outline-none transition-all"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <button
                            type="submit"
                            className="w-full py-3 px-4 bg-[var(--text-accent)] text-white font-bold rounded-xl hover:opacity-90 transition-opacity active:scale-[0.98]"
                        >
                            Login
                        </button>
                    </form>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen p-4 md:p-8 max-w-7xl mx-auto pt-24">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
                <div>
                    <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-2">Dashboard</h1>
                    <p className="text-[var(--text-secondary)]">Overview of your portfolio's performance</p>
                </div>
                <div className="flex gap-4">
                    <button
                        onClick={fetchData}
                        className="p-3 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] text-[var(--text-primary)] hover:bg-[var(--border-color)] transition-colors"
                    >
                        <RefreshCw size={20} className={loading ? 'animate-spin' : ''} />
                    </button>
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-colors"
                    >
                        <LogOut size={18} />
                        Logout
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)] backdrop-blur-md relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                        <MessageSquare size={120} />
                    </div>
                    <div className="relative z-10 text-center md:text-left">
                        <p className="text-[var(--text-secondary)] font-medium mb-2 uppercase tracking-wider text-sm">Total Messages</p>
                        <h3 className="text-6xl font-bold text-[var(--text-accent)]">{messages.length}</h3>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="p-8 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)] backdrop-blur-md relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                        <Eye size={120} />
                    </div>
                    <div className="relative z-10 text-center md:text-left">
                        <p className="text-[var(--text-secondary)] font-medium mb-2 uppercase tracking-wider text-sm">Total Views</p>
                        <h3 className="text-6xl font-bold text-[#b486ff]">{views}</h3>
                    </div>
                </motion.div>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-3">
                    <MessageSquare className="text-[var(--text-accent)]" />
                    Recent Messages
                </h2>

                {loading ? (
                    <div className="flex justify-center p-12">
                        <RefreshCw className="animate-spin text-[var(--text-accent)]" size={40} />
                    </div>
                ) : (
                    <div className="space-y-4">
                        {messages.length === 0 ? (
                            <div className="p-12 text-center border border-dashed border-[var(--border-color)] rounded-2xl">
                                <p className="text-[var(--text-secondary)]">No messages received yet.</p>
                            </div>
                        ) : (
                            messages.map((item, index) => (
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    key={item.id}
                                    className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] hover:bg-[var(--border-color)] transition-all duration-300 group"
                                >
                                    <div className="flex flex-col md:flex-row justify-between mb-4 gap-4">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 rounded-full bg-[var(--text-accent)]/10 text-[var(--text-accent)]">
                                                <User size={20} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[var(--text-primary)]">{item.Name || item.name}</h4>
                                                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                                                    <Mail size={14} />
                                                    {item.email}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)] bg-[var(--bg-secondary)] px-3 py-1 rounded-full w-fit">
                                            <Calendar size={14} />
                                            {new Date(item.created_at).toLocaleDateString()}
                                        </div>
                                    </div>
                                    <div className="p-4 rounded-xl bg-[var(--bg-secondary)] text-[var(--text-primary)] leading-relaxed relative">
                                        <div className="absolute -top-2 left-4 w-4 h-4 bg-[var(--bg-secondary)] rotate-45"></div>
                                        {item.Message || item.message}
                                    </div>
                                </motion.div>
                            ))
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Admin;
