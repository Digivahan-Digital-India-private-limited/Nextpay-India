import React, { createContext, useContext, useState } from "react";

const ApplicationsContext = createContext(null);

export function ApplicationsProvider({ children }) {
  const [applications, setApplications] = useState([]);

  const addApplication = (data) => {
    setApplications((prev) => [
      ...prev,
      { ...data, id: Date.now(), submittedAt: new Date().toLocaleString() },
    ]);
  };

  const removeApplications = (ids) => {
    const idSet = new Set(ids);
    setApplications((prev) => prev.filter((app) => !idSet.has(app.id)));
  };

  return (
    <ApplicationsContext.Provider value={{ applications, addApplication, removeApplications }}>
      {children}
    </ApplicationsContext.Provider>
  );
}

export function useApplications() {
  return useContext(ApplicationsContext);
}
