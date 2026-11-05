import Link from "next/link"

interface PropertyListProps {
    properties?: any[]; // Replace 'any' with the actual type of your property objects
}

export const PropertyList = ({ properties }: PropertyListProps) => {
    return (
        <div className="grid grid-cols-4 gap-4 mt-4">
            {properties?.map((property) => (
                <Link href={`/properties/${property.id}`} key={property.id} className="border border-gray-300 rounded-md p-4 mb-4">
                    <h3 className="text-xl font-bold text-gray-800 h-20">{property.title}</h3>
                    <p className="text-gray-600 h-12">{property.address}</p>
                    
                    <img src={property.image_url} alt={property.title} className="mt-2 w-full h-48 object-cover rounded-md" />
                </Link>
            ))}
        </div>
    )
}