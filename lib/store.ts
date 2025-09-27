import { create } from "zustand"
import { persist } from "zustand/middleware"

interface User {
  id: string
  email: string
  name: string
  avatar?: string
}

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<boolean>
  signup: (email: string, password: string, name: string) => Promise<boolean>
  logout: () => void
}

interface SensorData {
  id: string
  name: string
  type: "soil" | "weather" | "crop"
  location: { lat: number; lng: number }
  status: "active" | "inactive" | "warning"
  lastReading: Date
  data: {
    temperature?: number
    humidity?: number
    soilMoisture?: number
    ph?: number
    nutrients?: { n: number; p: number; k: number }
  }
}

interface AppState {
  sensors: SensorData[]
  selectedSensor: string | null
  alerts: Array<{
    id: string
    type: "warning" | "error" | "info"
    message: string
    timestamp: Date
    read: boolean
  }>
  addSensor: (sensor: Omit<SensorData, "id">) => void
  removeSensor: (id: string) => void
  updateSensorData: (id: string, data: Partial<SensorData["data"]>) => void
  setSelectedSensor: (id: string | null) => void
  addAlert: (alert: Omit<AppState["alerts"][0], "id" | "timestamp">) => void
  markAlertRead: (id: string) => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: async (email: string, password: string) => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))

        if (email && password) {
          const user = {
            id: "1",
            email,
            name: email.split("@")[0],
            avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
          }
          set({ user, isAuthenticated: true })
          return true
        }
        return false
      },
      signup: async (email: string, password: string, name: string) => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))

        if (email && password && name) {
          const user = {
            id: "1",
            email,
            name,
            avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
          }
          set({ user, isAuthenticated: true })
          return true
        }
        return false
      },
      logout: () => set({ user: null, isAuthenticated: false }),
    }),
    {
      name: "auth-storage",
    },
  ),
)

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      sensors: [
        {
          id: "1",
          name: "Cassava Field - Ogun",
          type: "soil",
          location: { lat: 6.5244, lng: 3.3792 },
          status: "active",
          lastReading: new Date(),
          data: {
            temperature: 28,
            humidity: 75,
            soilMoisture: 55,
            ph: 6.2,
            nutrients: { n: 140, p: 90, k: 160 },
          },
        },
        {
          id: "2",
          name: "Rice Paddy - Kebbi",
          type: "soil",
          location: { lat: 12.3874, lng: 4.1987 },
          status: "active",
          lastReading: new Date(),
          data: {
            temperature: 32,
            humidity: 65,
            soilMoisture: 80,
            ph: 7.1,
            nutrients: { n: 110, p: 70, k: 130 },
          },
        },
        {
          id: "3",
          name: "Weather Station - Lagos",
          type: "weather",
          location: { lat: 6.5244, lng: 3.3792 },
          status: "active",
          lastReading: new Date(),
          data: {
            temperature: 29,
            humidity: 78,
          },
        },
      ],
      selectedSensor: null,
      alerts: [
        {
          id: "1",
          type: "warning",
          message: "Low soil moisture detected in Field A",
          timestamp: new Date(),
          read: false,
        },
      ],
      addSensor: (sensor) => {
        const newSensor = {
          ...sensor,
          id: Math.random().toString(36).substr(2, 9),
        }
        set((state) => ({ sensors: [...state.sensors, newSensor] }))
      },
      removeSensor: (id) => {
        set((state) => ({
          sensors: state.sensors.filter((s) => s.id !== id),
          selectedSensor: state.selectedSensor === id ? null : state.selectedSensor,
        }))
      },
      updateSensorData: (id, data) => {
        set((state) => ({
          sensors: state.sensors.map((s) =>
            s.id === id ? { ...s, data: { ...s.data, ...data }, lastReading: new Date() } : s,
          ),
        }))
      },
      setSelectedSensor: (id) => set({ selectedSensor: id }),
      addAlert: (alert) => {
        const newAlert = {
          ...alert,
          id: Math.random().toString(36).substr(2, 9),
          timestamp: new Date(),
        }
        set((state) => ({ alerts: [newAlert, ...state.alerts] }))
      },
      markAlertRead: (id) => {
        set((state) => ({
          alerts: state.alerts.map((a) => (a.id === id ? { ...a, read: true } : a)),
        }))
      },
    }),
    {
      name: "app-storage",
    },
  ),
)
