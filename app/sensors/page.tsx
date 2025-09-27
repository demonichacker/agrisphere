import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { SensorsGrid } from "@/components/sensors/sensors-grid"
import { AddSensorDialog } from "@/components/sensors/add-sensor-dialog"
import { SensorFilters } from "@/components/sensors/sensor-filters"

export default function SensorsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Sensors</h1>
            <p className="text-muted-foreground">Manage your IoT sensors and monitoring devices</p>
          </div>
          <AddSensorDialog />
        </div>

        <SensorFilters />
        <SensorsGrid />
      </div>
    </DashboardLayout>
  )
}
