'use client';

import { useSearchParams } from 'next/navigation';

const SearchParamsHandler = ({ children }: { children: (searchParams: any) => React.ReactNode }) => {
    const searchParams = useSearchParams();
    return children(searchParams);
};

export default SearchParamsHandler;