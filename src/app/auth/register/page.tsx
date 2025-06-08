'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Lock, Briefcase } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '@/context/AuthContext';
import { IconInput } from '@/components/ui/icon-input';

type Role = 'client' | 'freelancer';

interface FormData {
  fullName: string;
  email: string;
  password: string;
  role: Role;
}

export default function RegisterPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    password: '',
    role: 'client'
  });
  const [error, setError] = useState('');
  const router = useRouter();
  const { register } = useAuthContext();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      await register(formData);
      router.push('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred during registration');
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0B0D] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="bg-[#1C1F23] border border-[#2D3139] rounded-lg p-8 shadow-lg w-full max-w-md"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-[#A8B2C1] mb-2">
              Full Name
            </label>
            <IconInput
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="Enter your full name"
              icon={<User className="w-5 h-5" />}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#A8B2C1] mb-2">
              Email
            </label>
            <IconInput
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Enter your email"
              icon={<Mail className="w-5 h-5" />}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#A8B2C1] mb-2">
              Password
            </label>
            <IconInput
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              placeholder="Create a password"
              icon={<Lock className="w-5 h-5" />}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#A8B2C1] mb-2">
              I am a
            </label>
            <div className="relative">
              <IconInput
                type="text"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value as Role })}
                placeholder="Select your role"
                icon={<Briefcase className="w-5 h-5" />}
                required
                readOnly
                onClick={() => {
                  const select = document.createElement('select');
                  select.value = formData.role;
                  select.onchange = (e) => setFormData({ ...formData, role: (e.target as HTMLSelectElement).value as Role });
                  select.innerHTML = `
                    <option value="client">Client</option>
                    <option value="freelancer">Freelancer</option>
                  `;
                  select.click();
                }}
              />
            </div>
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#EF4444] text-sm bg-[#EF4444]/10 border border-[#EF4444]/20 rounded-lg p-3"
            >
              {error}
            </motion.div>
          )}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-[#6366F1] text-white py-3 rounded-lg font-medium hover:bg-[#4F46E5] transition-colors duration-200"
          >
            Create Account
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
} 