import TravelCard from "./travel-card"

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <TravelCard
        title="Travel recap"
        description="A webapp to create a travel recap video"
        tools={["Nextjs", "figma", "v0"]}
        previewUrl="/placeholder.svg?height=200&width=400"
        href="#"
      />
    </div>
  )
}

