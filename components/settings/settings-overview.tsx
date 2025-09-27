"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { User, Bell, Shield, Palette, Globe, Database, Wifi, Save, RefreshCw } from "lucide-react"

export function SettingsOverview() {
  const [profile, setProfile] = useState({
    name: "Adebayo Okafor",
    email: "adebayo@agrisphere.com",
    phone: "+234 803 123 4567",
    location: "Ogun State, Nigeria",
    farmSize: "50 hectares",
    cropTypes: "Cassava, Maize, Yam",
  })

  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    smsAlerts: false,
    pushNotifications: true,
    weeklyReports: true,
    criticalOnly: false,
  })

  const [preferences, setPreferences] = useState({
    theme: "system",
    language: "en",
    timezone: "Africa/Lagos",
    units: "metric",
    currency: "NGN",
  })

  const { toast } = useToast()

  const handleSaveProfile = () => {
    toast({
      title: "Profile updated",
      description: "Your profile information has been saved successfully.",
    })
  }

  const handleSaveNotifications = () => {
    toast({
      title: "Notification settings updated",
      description: "Your notification preferences have been saved.",
    })
  }

  const handleSavePreferences = () => {
    toast({
      title: "Preferences updated",
      description: "Your system preferences have been saved.",
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-balance">Settings</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="glass-card p-1 grid w-full grid-cols-2 lg:flex lg:w-auto">
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User className="w-4 h-4" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="w-4 h-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="preferences" className="flex items-center gap-2">
            <Palette className="w-4 h-4" />
            Preferences
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            Security
          </TabsTrigger>
          <TabsTrigger value="integrations" className="flex items-center gap-2">
            <Wifi className="w-4 h-4" />
            Integrations
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card className="glass-card border-0">
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your personal information and farm details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    className="glass-input"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    className="glass-input"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={profile.phone}
                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                    className="glass-input"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={profile.location}
                    onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                    className="glass-input"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="farmSize">Farm Size</Label>
                  <Input
                    id="farmSize"
                    value={profile.farmSize}
                    onChange={(e) => setProfile({ ...profile, farmSize: e.target.value })}
                    className="glass-input"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cropTypes">Crop Types</Label>
                  <Input
                    id="cropTypes"
                    value={profile.cropTypes}
                    onChange={(e) => setProfile({ ...profile, cropTypes: e.target.value })}
                    className="glass-input"
                  />
                </div>
              </div>

              <Button onClick={handleSaveProfile} className="bg-green-500 hover:bg-green-600 text-white">
                <Save className="w-4 h-4 mr-2" />
                Save Profile
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card className="glass-card border-0">
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Configure how you want to receive alerts and updates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="emailAlerts">Email Alerts</Label>
                    <p className="text-sm text-muted-foreground">Receive alerts via email</p>
                  </div>
                  <Switch
                    id="emailAlerts"
                    checked={notifications.emailAlerts}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, emailAlerts: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="smsAlerts">SMS Alerts</Label>
                    <p className="text-sm text-muted-foreground">Receive critical alerts via SMS</p>
                  </div>
                  <Switch
                    id="smsAlerts"
                    checked={notifications.smsAlerts}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, smsAlerts: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="pushNotifications">Push Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications in the app</p>
                  </div>
                  <Switch
                    id="pushNotifications"
                    checked={notifications.pushNotifications}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, pushNotifications: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="weeklyReports">Weekly Reports</Label>
                    <p className="text-sm text-muted-foreground">Receive weekly summary reports</p>
                  </div>
                  <Switch
                    id="weeklyReports"
                    checked={notifications.weeklyReports}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, weeklyReports: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="criticalOnly">Critical Alerts Only</Label>
                    <p className="text-sm text-muted-foreground">Only receive high-priority alerts</p>
                  </div>
                  <Switch
                    id="criticalOnly"
                    checked={notifications.criticalOnly}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, criticalOnly: checked })}
                  />
                </div>
              </div>

              <Button onClick={handleSaveNotifications} className="bg-green-500 hover:bg-green-600 text-white">
                <Save className="w-4 h-4 mr-2" />
                Save Notification Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preferences">
          <Card className="glass-card border-0">
            <CardHeader>
              <CardTitle>System Preferences</CardTitle>
              <CardDescription>Customize your app experience and display settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="theme">Theme</Label>
                  <Select
                    value={preferences.theme}
                    onValueChange={(value) => setPreferences({ ...preferences, theme: value })}
                  >
                    <SelectTrigger className="glass-input">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="language">Language</Label>
                  <Select
                    value={preferences.language}
                    onValueChange={(value) => setPreferences({ ...preferences, language: value })}
                  >
                    <SelectTrigger className="glass-input">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select
                    value={preferences.timezone}
                    onValueChange={(value) => setPreferences({ ...preferences, timezone: value })}
                  >
                    <SelectTrigger className="glass-input">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Africa/Lagos">West Africa Time (WAT)</SelectItem>
                      <SelectItem value="Africa/Khartoum">East Africa Time (EAT)</SelectItem>
                      <SelectItem value="Africa/Johannesburg">South Africa Time (SAST)</SelectItem>
                      <SelectItem value="Africa/Cairo">Egypt Time (EET)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="units">Units</Label>
                  <Select
                    value={preferences.units}
                    onValueChange={(value) => setPreferences({ ...preferences, units: value })}
                  >
                    <SelectTrigger className="glass-input">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="imperial">Imperial (°F, inches)</SelectItem>
                      <SelectItem value="metric">Metric (°C, mm)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button onClick={handleSavePreferences} className="bg-green-500 hover:bg-green-600 text-white">
                <Save className="w-4 h-4 mr-2" />
                Save Preferences
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card className="glass-card border-0">
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Manage your account security and privacy settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label>Change Password</Label>
                  <p className="text-sm text-muted-foreground mb-2">Update your password to keep your account secure</p>
                  <Button variant="outline" className="glass-button bg-transparent">
                    Change Password
                  </Button>
                </div>

                <div>
                  <Label>Two-Factor Authentication</Label>
                  <p className="text-sm text-muted-foreground mb-2">Add an extra layer of security to your account</p>
                  <Button variant="outline" className="glass-button bg-transparent">
                    Enable 2FA
                  </Button>
                </div>

                <div>
                  <Label>Active Sessions</Label>
                  <p className="text-sm text-muted-foreground mb-2">Manage devices that are currently signed in</p>
                  <Button variant="outline" className="glass-button bg-transparent">
                    View Sessions
                  </Button>
                </div>

                <div>
                  <Label>Data Export</Label>
                  <p className="text-sm text-muted-foreground mb-2">Download a copy of your data</p>
                  <Button variant="outline" className="glass-button bg-transparent">
                    Export Data
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations">
          <Card className="glass-card border-0">
            <CardHeader>
              <CardTitle>Integrations</CardTitle>
              <CardDescription>Connect with third-party services and IoT devices</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg glass-card">
                  <div className="flex items-center space-x-3">
                    <Database className="w-8 h-8 text-blue-500" />
                    <div>
                      <h3 className="font-medium">Weather API</h3>
                      <p className="text-sm text-muted-foreground">Connected to OpenWeatherMap</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-green-500">Connected</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg glass-card">
                  <div className="flex items-center space-x-3">
                    <Wifi className="w-8 h-8 text-green-500" />
                    <div>
                      <h3 className="font-medium">IoT Sensors</h3>
                      <p className="text-sm text-muted-foreground">12 sensors connected via LoRaWAN</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-green-500">Connected</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg glass-card">
                  <div className="flex items-center space-x-3">
                    <Globe className="w-8 h-8 text-orange-500" />
                    <div>
                      <h3 className="font-medium">Satellite Imagery</h3>
                      <p className="text-sm text-muted-foreground">Not connected</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="glass-button bg-transparent">
                    Connect
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg glass-card">
                  <div className="flex items-center space-x-3">
                    <RefreshCw className="w-8 h-8 text-purple-500" />
                    <div>
                      <h3 className="font-medium">Irrigation System</h3>
                      <p className="text-sm text-muted-foreground">Not connected</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="glass-button bg-transparent">
                    Connect
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
