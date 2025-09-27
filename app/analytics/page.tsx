import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { AnalyticsOverview } from "@/components/analytics/analytics-overview"
import { YieldPrediction } from "@/components/analytics/yield-prediction"
import { SoilAnalysis } from "@/components/analytics/soil-analysis"
import { WeatherTrends } from "@/components/analytics/weather-trends"
import { CropHealthMetrics } from "@/components/analytics/crop-health-metrics"
import { AnalyticsFilters } from "@/components/analytics/analytics-filters"

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
            <p className="text-muted-foreground">
              Advanced insights and predictive modeling for your agricultural data
            </p>
          </div>
        </div>

        <AnalyticsFilters />
        <AnalyticsOverview />

        <div className="grid lg:grid-cols-2 gap-6">
          <YieldPrediction />
          <SoilAnalysis />
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <WeatherTrends />
          <CropHealthMetrics />
        </div>
      </div>
    </DashboardLayout>
  )
}
