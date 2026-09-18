'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function ProjectSearch() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams);

        params.set('page', '1');

        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }

        replace(`${pathname}?${params.toString()}`);
    }, 300);

    return (
        <div className="mb-6">
            <label
                htmlFor="project-search"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
                Search projects
            </label>

            <input
                id="project-search"
                type="search"
                placeholder="Search by title, description, or technology..."
                defaultValue={searchParams.get('query') ?? ''}
                onChange={(event) => handleSearch(event.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            />
        </div>
    );
}