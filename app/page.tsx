"use client";

import { useState } from "react";
import { Search, Filter, Share, MoreVertical } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Header } from "@/components/ui/header"
import { Sidebar } from "@/components/ui/sidebar"
import { TrademarkCard } from "@/components/ui/trademark-card"

type ViewMode = "grid" | "list"

interface SearchFilters {
  owner: string;
  lawFirm: string;
  attorney: string;
  status: string;
}

interface SearchResult {
  id: string;
  name: string;
  owner: string;
  status: string;
  filingDate: string;
  classes: { id: string; description: string }[];
  description: string;
}

const MOCK_TRADEMARKS = [
  {
    name: "Meta Logo",
    company: "FACEBOOK INC.",
    serialNumber: "88713620",
    status: "Live/Registered" as const,
    filingDate: "26 Jan 2020",
    description: "Computer services, Social Media, Networking, Virtual Communities, Community",
    classes: ["45", "42", "38"]
  },
  {
    name: "Meta Logo",
    company: "FACEBOOK INC.",
    serialNumber: "88713621",
    status: "Live/Registered" as const,
    filingDate: "26 Jan 2020",
    description: "Computer services, Social Media, Networking, Virtual Communities, Community",
    classes: ["45", "42", "38"]
  },
  {
    name: "Meta Logo",
    company: "FACEBOOK INC.",
    serialNumber: "88713622",
    status: "Live/Registered" as const,
    filingDate: "26 Jan 2020",
    description: "Computer services, Social Media, Networking, Virtual Communities, Community",
    classes: ["45", "42", "38"]
  },
  {
    name: "Meta Logo",
    company: "FACEBOOK INC.",
    serialNumber: "88713623",
    status: "Live/Registered" as const,
    filingDate: "26 Jan 2020",
    description: "Computer services, Social Media, Networking, Virtual Communities, Community",
    classes: ["45", "42", "38"]
  },
  {
    name: "Meta Logo",
    company: "FACEBOOK INC.",
    serialNumber: "88713624",
    status: "Live/Registered" as const,
    filingDate: "26 Jan 2020",
    description: "Computer services, Social Media, Networking, Virtual Communities, Community",
    classes: ["45", "42", "38"]
  },
  {
    name: "Meta Logo",
    company: "FACEBOOK INC.",
    serialNumber: "88713625",
    status: "Live/Registered" as const,
    filingDate: "26 Jan 2020",
    description: "Computer services, Social Media, Networking, Virtual Communities, Community",
    classes: ["45", "42", "38"]
  }
]

export default function Home() {
  const [viewMode, setViewMode] = useState<ViewMode>("list")

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="flex items-center gap-2">
            <p className="text-sm text-gray-600">Also try searching for</p>
            <div className="flex gap-2">
              <Badge variant="outline" className="rounded-full px-3 py-1 bg-white hover:bg-gray-50 cursor-pointer">nike</Badge>
              <Badge variant="outline" className="rounded-full px-3 py-1 bg-white hover:bg-gray-50 cursor-pointer">tm</Badge>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          <Sidebar onViewModeChange={setViewMode} />
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">About 199 Trademarks found for "nike"</p>
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  className="bg-white hover:bg-gray-50 border rounded-full px-6 py-2 flex items-center gap-2"
                >
                  <Filter className="h-4 w-4" />
                  Filter
                </Button>
                <div className="flex">
                  <Button 
                    variant="outline" 
                    className="bg-white hover:bg-gray-50 border rounded-full px-4 py-2"
                  >
                    <Share className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    className="bg-white hover:bg-gray-50 border rounded-full px-4 py-2 ml-2"
                  >
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            {viewMode === "list" && (
              <div className="flex items-center mb-6">
                <div className="flex gap-16">
                  <span className="text-sm font-medium">Mark</span>
                  <span className="text-sm font-medium">Details</span>
                  <span className="text-sm font-medium">Status</span>
                  <span className="text-sm font-medium">Class/Description</span>
                </div>
              </div>
            )}

            <div className={viewMode === "grid" ? "grid grid-cols-2 gap-4" : "space-y-4"}>
              {MOCK_TRADEMARKS.map((trademark, index) => (
                <TrademarkCard key={index} {...trademark} viewMode={viewMode} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}