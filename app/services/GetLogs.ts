interface LogEntry {
    id: number;
    message: string;
    request_type: string;
    createdAt: string; // Assuming createdAt is a string representing a date
  }
  const apiUrl = 'https://api.durmusgulbahar.dev'
export const getLogs = async (): Promise<LogEntry[]> => {
  console.log("APIII",apiUrl);
  try {
    const response = await fetch(`${apiUrl}/api/log`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    // Assuming data is an array of LogEntry objects
    if (!Array.isArray(data)) {
      throw new Error('Data is not an array of LogEntry objects');
    }

    return data as LogEntry[];
  } catch (error) {
    console.error('Error fetching logs:', error);
    throw error; // Re-throw the error for handling in the calling component
  }
};
