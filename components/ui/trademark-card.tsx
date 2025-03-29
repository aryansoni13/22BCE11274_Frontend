"use client"

import { Badge } from "./badge"
import { Card } from "./card"
import Image from "next/image"
import { FileText, Network, Users } from "lucide-react"

interface TrademarkCardProps {
  name: string
  company: string
  serialNumber: string
  status: "Live/Registered" | "Pending" | "Abandoned"
  filingDate: string
  description: string
  classes: string[]
  viewMode: "grid" | "list"
}

export function TrademarkCard({
  name,
  company,
  serialNumber,
  status,
  filingDate,
  description,
  classes,
  viewMode
}: TrademarkCardProps) {
  const getClassIcon = (cls: string) => {
    switch (cls) {
      case "45":
        return <Users className="h-3 w-3" />
      case "42":
        return <FileText className="h-3 w-3" />
      case "38":
        return <Network className="h-3 w-3" />
      default:
        return <FileText className="h-3 w-3" />
    }
  }

  return (
    <Card className={`p-4 hover:bg-gray-50 transition-colors ${viewMode === "grid" ? "h-full" : ""}`}>
      <div className={`flex ${viewMode === "grid" ? "flex-col" : "gap-6"}`}>
        <div className={`
          bg-gray-100 rounded-sm flex items-center justify-center border
          ${viewMode === "grid" ? "w-full aspect-video mb-4" : "w-20 h-20"}
          transition-all duration-200
        `}>
          <span className="text-gray-400 text-sm">Logo</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h3 className="text-blue-600 font-medium hover:underline cursor-pointer truncate">
                {name}
              </h3>
              <p className="text-sm text-gray-600 mt-1 truncate">{company}</p>
              <p className="text-sm text-gray-500 mt-1">#{serialNumber}</p>
              <p className="text-sm text-gray-500">{filingDate}</p>
            </div>
            <Badge 
              variant="outline" 
              className={`
                whitespace-nowrap flex-shrink-0
                ${status === "Live/Registered" 
                  ? "bg-green-50 text-green-600 border-green-200"
                  : status === "Pending"
                  ? "bg-yellow-50 text-yellow-600 border-yellow-200"
                  : "bg-red-50 text-red-600 border-red-200"
                }
              `}
            >
              {status}
            </Badge>
          </div>
          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
              {classes.map((cls, i) => (
                <div key={i} className="flex items-center gap-1">
                  <div className="flex items-center gap-1.5 text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded border">
                    {getClassIcon(cls)}
                    <span>Class {cls}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-2 line-clamp-2">{description}</p>
          </div>
        </div>
      </div>
    </Card>
  )
} 