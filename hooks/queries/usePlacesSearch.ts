// hooks/queries/usePlacesSearch.ts
import { useDebounce } from "@/hooks/useDebounce";
import { getPlacesBySearch } from "@/services/mypage/getPlaceBySearch";
import { useQuery } from "@tanstack/react-query";

export function usePlacesSearch(searchTerm: string) {
  const debouncedSearch = useDebounce(searchTerm, 300);

  return useQuery({
    queryKey: ["facilityPlaces", debouncedSearch],
    queryFn: () => getPlacesBySearch(debouncedSearch),
    enabled: !!debouncedSearch,
    initialData: [],
  });
}
