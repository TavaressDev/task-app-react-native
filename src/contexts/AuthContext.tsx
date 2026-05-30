import React, { createContext, useContext, useEffect, useState } from 'react';
import { getToken, removeToken, saveToken } from '../services/token-storage';

type AuthContextValue = {
  sessionToken: string | null;
  isLoading: boolean;
  signIn: (token: string) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [sessionToken, setSessionToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadSession() {
      const storedToken = await getToken();
      setSessionToken(storedToken);
      setIsLoading(false);
    }

    loadSession();
  }, []);

  async function signIn(token: string) {
    await saveToken(token);
    setSessionToken(token);
  }

  async function signOut() {
    await removeToken();
    setSessionToken(null);
  }

  return (
    <AuthContext.Provider value={{ sessionToken, isLoading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth deve ser usado dentro de AuthProvider');
  }

  return context;
}