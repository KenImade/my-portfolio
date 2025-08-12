import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useDashboardStore = create(
    persist(
        (set, get) => ({
            isDarkMode: null,

            toggleTheme: () => {
                set((state) => ({ isDarkMode: !state.isDarkMode }));
            },

            setTheme: (isDark) => {
                set({ isDarkMode: isDark });
            },

            initializeTheme: () => {
                if (get().isDarkMode !== null) return;

                const hour = new Date().getHours();
                const shouldBeDark = hour >= 18 || hour < 6;
                set({ isDarkMode: shouldBeDark })
            }
        }),
        {
            name: 'dashboard-storage',
            partialize: (state) => ({ isDarkMode: state.isDarkMode })
        }
    )
);

export default useDashboardStore;