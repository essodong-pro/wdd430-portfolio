'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

interface PaginationProps {
    totalPages: number;
}

export default function Pagination({
    totalPages,
}: PaginationProps) {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const currentPage = Number(searchParams.get('page')) || 1;

    function createPageURL(pageNumber: number) {
        const params = new URLSearchParams(searchParams);

        params.set('page', pageNumber.toString());

        return `${pathname}?${params.toString()}`;
    }

    if (totalPages <= 1) {
        return null;
    }

    return (
        <div className="flex items-center justify-center gap-4 pt-4">
            {currentPage > 1 ? (
                <Link
                    href={createPageURL(currentPage - 1)}
                    className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                    Previous
                </Link>
            ) : (
                <span className="rounded-lg border px-4 py-2 text-sm text-gray-400">
                    Previous
                </span>
            )}

            <span className="text-sm text-gray-600 dark:text-gray-300">
                Page {currentPage} of {totalPages}
            </span>

            {currentPage < totalPages ? (
                <Link
                    href={createPageURL(currentPage + 1)}
                    className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                    Next
                </Link>
            ) : (
                <span className="rounded-lg border px-4 py-2 text-sm text-gray-400">
                    Next
                </span>
            )}
        </div>
    );
}