"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import jwt from "jsonwebtoken";
import { JwtPayload } from "jsonwebtoken";

interface AuthContextType {
  user: any;
  profile: any;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => void;
  fetchUserProfile: (id: string) => void;
  updateProfile: (
    id: string,
    formData: { name: string; bio: string; city: string; birthdate: string }
  ) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwt.decode(token) as JwtPayload | null;
      if (decoded && typeof decoded !== "string") {
        setUser(decoded);
      }
      fetchUserProfile(decoded?.userId);
    }
  }, []);

  const fetchUserProfile = async (id: string) => {
    try {
      const response = await fetch(`/api/auth/profile/${id}`);
      const data = await response.json();
      setProfile(data);
    } catch (error) {
      console.error("Error while getting profile:", error);
    }
  };

  const updateProfile = async (
    id: string,
    formData: { name: string; bio: string; city: string; birthdate: string }
  ) => {
    try {
      const response = await fetch(`/api/auth/profile/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to update profile");
      }
      const data = await response.json();
      setProfile(data);
    } catch (error) {
      console.error("Error while updating profile:", error);
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to sign in");
      }
      const data = await response.json();
      const token = data.token;
      localStorage.setItem("token", token);
      const decoded = jwt.decode(token);
      setUser(decoded);
      router.push("/homepage");
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to sign up");
      }
      const userSignedUp = await response.json();
      if (userSignedUp) {
        router.push("/?signin=true");
      }
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  const signOut = () => {
    localStorage.removeItem("token");
    setUser(null);
    router.push("/");
  };

  return (
    <AuthContext.Provider
      value={{
        profile,
        user,
        signIn,
        signUp,
        signOut,
        fetchUserProfile,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
