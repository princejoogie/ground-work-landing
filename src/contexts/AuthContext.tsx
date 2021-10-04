import React, { useContext, createContext, useState, useEffect } from "react";

import { auth, db, firebase } from "@/utils/database";

interface AuthContextProps {
  user: firebase.User | null;
  data: firebase.firestore.DocumentData | null;
  loading: boolean;
  error: string;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  data: null,
  loading: true,
  error: "",
});

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<firebase.User | null>(null);
  const [userLoading, setUserLoading] = useState(true);
  const [data, setData] = useState<firebase.firestore.DocumentData | null>(
    null
  );
  const [dataLoading, setDataLoading] = useState(true);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setUserLoading(() => true);
    const listener = auth.onAuthStateChanged((_user) => {
      setUser(_user);
      setUserLoading(() => false);
    });

    return listener;
  }, []);

  useEffect(() => {
    setDataLoading(() => true);
    (async () => {
      try {
        if (user) {
          const res = await db.collection("users").doc(user.uid).get();
          setData(res.data() ?? null);
        } else {
          setData(null);
        }
      } catch (err: any) {
        setError(err.message);
      }

      setDataLoading(() => false);
    })();
  }, [user]);

  useEffect(() => {
    if (userLoading || dataLoading) {
      setLoading(() => true);
    } else {
      setTimeout(() => setLoading(() => false), 1500);
    }
  }, [userLoading, dataLoading]);

  return (
    <AuthContext.Provider value={{ user, data, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const data = useContext(AuthContext);
  return { ...data };
};
