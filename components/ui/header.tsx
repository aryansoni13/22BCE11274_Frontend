"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "./input"
import { Button } from "./button"

export function Header() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = () => {
    console.log("Searching for:", searchQuery)
  }

  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-8">
          <h1 className="text-xl font-bold text-blue-600">Trademarkia</h1>
          <div className="flex-1 max-w-2xl">
            <div className="flex">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search Trademark here e.g. Mickey Mouse"
                  className="pl-10 pr-4 py-2 w-full border rounded-l"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
              </div>
              <Button 
                className="rounded-l-none bg-blue-500 hover:bg-blue-600 text-white"
                onClick={handleSearch}
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
} 