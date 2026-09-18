export default function Loading() {
    return (
        <div className="space-y-6 animate-pulse">
            <div>
                <div className="h-10 w-72 rounded bg-gray-200 dark:bg-gray-700"></div>

                <div className="h-4 w-full max-w-2xl rounded bg-gray-200 dark:bg-gray-700 mt-3"></div>

                <div className="h-4 w-5/6 max-w-2xl rounded bg-gray-200 dark:bg-gray-700 mt-2"></div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <div className="h-40 rounded-lg bg-gray-200 dark:bg-gray-700"></div>
                <div className="h-40 rounded-lg bg-gray-200 dark:bg-gray-700"></div>
            </div>
        </div>
    );
}