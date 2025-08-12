import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface DashboardState {
    isDarkMode: boolean;
    toggleTheme: () => void;
    setTheme: (isDark: boolean) => void;
    initializeTheme: () => void;
}

const useDashboardStore = create<DashboardState>()(
    persist<DashboardState>(
        (set) => ({
            isDarkMode: false,
            toggleTheme: () => set((state: DashboardState) => ({ isDarkMode: !state.isDarkMode })),
            setTheme: (isDark: boolean) => set({ isDarkMode: isDark }),
            initializeTheme: () => {
                const stored = localStorage.getItem('dashboard-storage');
                if (stored) {
                    const parsed = JSON.parse(stored);
                    if (parsed.state?.isDarkMode !== undefined) {
                        set({ isDarkMode: parsed.state.isDarkMode });
                        return;
                    }
                }
                
                const hour = new Date().getHours();
                const shouldBeDark = hour >= 18 || hour < 6;
                set({ isDarkMode: shouldBeDark});
            },
        }),
        { name: 'dashboard-storage'}
    )
);

export default useDashboardStore;