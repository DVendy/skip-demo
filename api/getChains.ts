import { useQuery } from "@tanstack/react-query"

export default function getChains() {
    return useQuery({
        queryKey: ['repoData'],
        queryFn: async () => {
            const response = await fetch(
                'https://api.skip.build/v2/info/chains?include_evm=true&include_svm=true',
            )
            const data = await response.json();
            return (data.chains as Chain[]).sort((a, b) => a.pretty_name.localeCompare(b.pretty_name));
        },
    });
}