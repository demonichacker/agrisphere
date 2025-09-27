"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { SettingsOverview } from "@/components/settings/settings-overview"

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <SettingsOverview />
    </DashboardLayout>
  )
}
