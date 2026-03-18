import Card from "../../../components/card";

export default function ProjectListLoading() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-pulse">
            {[...Array(6)].map((_, i) => (
                <Card key={i} className="h-40">
                    <div className="flex justify-between items-center mb-4">
                        <div className="h-6 bg-gray-100 dark:bg-gray-800 rounded w-1/2"></div>
                        <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded w-1/4"></div>
                    </div>
                    <div className="space-y-2">
                        <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded w-full"></div>
                        <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded w-5/6"></div>
                    </div>
                </Card>
            ))}
        </div>
    );
}

