export const apiClient = async <T>(url: string, options?: RequestInit): Promise<T> => {
    try {
        const res = await fetch(url, options);

        if (!res.ok) {
            const message = `API error: ${res.status} ${res.statusText}`;
            throw new Error(message);
        }
        const data = (await res.json()) as T;
        return data;
    } catch (error) {
        console.error("API client error:", error);
        throw error;
    }
};