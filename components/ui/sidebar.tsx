"use client"

import { useState } from "react"
import { Card } from "./card"
import { Checkbox } from "./checkbox"
import { Input } from "./input"
import { Label } from "./label"
import { Search } from "lucide-react"

type ViewMode = "grid" | "list"

interface SidebarProps {
  onViewModeChange: (mode: ViewMode) => void
}

export function Sidebar({ onViewModeChange }: SidebarProps) {
  const [ownerSearch, setOwnerSearch] = useState("")
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([])
  const [selectedOwners, setSelectedOwners] = useState<string[]>([])
  const [viewMode, setViewMode] = useState<ViewMode>("list")

  const handleStatusChange = (status: string) => {
    setSelectedStatuses(prev => 
      prev.includes(status) 
        ? prev.filter(s => s !== status)
        : [...prev, status]
    )
  }

  const handleOwnerChange = (owner: string) => {
    setSelectedOwners(prev => 
      prev.includes(owner) 
        ? prev.filter(o => o !== owner)
        : [...prev, owner]
    )
  }

  return (
    <div className="w-[280px] flex-shrink-0 space-y-4">
      <Card className="p-6">
        <h3 className="font-medium text-lg mb-4">Status</h3>
        <div className="flex flex-wrap gap-2">
          <button
            className={`px-3 py-1.5 rounded-full text-sm flex items-center gap-1.5 border ${
              selectedStatuses.length === 0 ? 'bg-blue-50 border-blue-200 text-blue-700' : 'bg-white hover:bg-gray-50'
            }`}
          >
            All
          </button>
          <button
            className={`px-3 py-1.5 rounded-full text-sm flex items-center gap-1.5 border ${
              selectedStatuses.includes('registered') ? 'bg-green-50 border-green-200 text-green-700' : 'bg-white hover:bg-gray-50'
            }`}
            onClick={() => handleStatusChange('registered')}
          >
            <div className="w-2 h-2 rounded-full bg-green-500" />
            Registered
          </button>
          <button
            className={`px-3 py-1.5 rounded-full text-sm flex items-center gap-1.5 border ${
              selectedStatuses.includes('pending') ? 'bg-yellow-50 border-yellow-200 text-yellow-700' : 'bg-white hover:bg-gray-50'
            }`}
            onClick={() => handleStatusChange('pending')}
          >
            <div className="w-2 h-2 rounded-full bg-yellow-500" />
            Pending
          </button>
          <button
            className={`px-3 py-1.5 rounded-full text-sm flex items-center gap-1.5 border ${
              selectedStatuses.includes('abandoned') ? 'bg-red-50 border-red-200 text-red-700' : 'bg-white hover:bg-gray-50'
            }`}
            onClick={() => handleStatusChange('abandoned')}
          >
            <div className="w-2 h-2 rounded-full bg-red-500" />
            Abandoned
          </button>
          <button
            className={`px-3 py-1.5 rounded-full text-sm flex items-center gap-1.5 border ${
              selectedStatuses.includes('others') ? 'bg-gray-100 border-gray-200 text-gray-700' : 'bg-white hover:bg-gray-50'
            }`}
            onClick={() => handleStatusChange('others')}
          >
            <div className="w-2 h-2 rounded-full bg-gray-500" />
            Others
          </button>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <h3 className="font-medium text-lg">Owners</h3>
          <div className="flex text-sm text-gray-500">
            <button className="hover:text-gray-900">Law Firms</button>
            <span className="mx-2">·</span>
            <button className="hover:text-gray-900">Attorneys</button>
          </div>
        </div>
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input 
            type="search"
            placeholder="Search Owners"
            className="pl-10"
            value={ownerSearch}
            onChange={(e) => setOwnerSearch(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Checkbox 
              id="tesla"
              checked={selectedOwners.includes("tesla")}
              onCheckedChange={() => handleOwnerChange("tesla")}
            />
            <label htmlFor="tesla" className="text-sm">Tesla, Inc.</label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox 
              id="legalforce"
              checked={selectedOwners.includes("legalforce")}
              onCheckedChange={() => handleOwnerChange("legalforce")}
            />
            <label htmlFor="legalforce" className="text-sm">LEGALFORCE RAPC</label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox 
              id="spacex"
              checked={selectedOwners.includes("spacex")}
              onCheckedChange={() => handleOwnerChange("spacex")}
            />
            <label htmlFor="spacex" className="text-sm">SpaceX Inc.</label>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="font-medium text-lg mb-4">Display</h3>
        <div className="grid grid-cols-2 gap-2">
          <button
            className={`px-4 py-2 text-sm rounded-md border ${
              viewMode === 'grid' ? 'bg-gray-100 border-gray-300' : 'bg-white hover:bg-gray-50'
            }`}
            onClick={() => {
              setViewMode('grid')
              onViewModeChange('grid')
            }}
          >
            Grid View
          </button>
          <button
            className={`px-4 py-2 text-sm rounded-md border ${
              viewMode === 'list' ? 'bg-gray-100 border-gray-300' : 'bg-white hover:bg-gray-50'
            }`}
            onClick={() => {
              setViewMode('list')
              onViewModeChange('list')
            }}
          >
            List View
          </button>
        </div>
      </Card>
    </div>
  )
} 