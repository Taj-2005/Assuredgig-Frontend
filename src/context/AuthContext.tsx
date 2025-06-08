'use client';

import React, { createContext, useContext, useState } from 'react';

type Role = 'client' | 'freelancer';

interface User {
  id: string;
  fullName: string;
  email: string;
  role: Role;
}

interface AuthContextType {
  user: User | null;
  register: (data: { fullName: string; email: string; password: string; role: Role }) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const register = async (data: { fullName: string; email: string; password: string; role: Role }) => {
    // Create a mock user
    const mockUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      fullName: data.fullName,
      email: data.email,
      role: data.role
    };
    setUser(mockUser);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
} 