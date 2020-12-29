export interface ApiResponse<K> {
    info: {
        count: number;
        pages: number;
        next: string | null;
        prev: string | null;
    },
    results: K[];
}

export interface Info {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
}

export interface Location {
    id:string; 
    name:string; 
    dimension:string;
    type: string;
    residents: string[];
    url: string;
    created: string;
}

type CharacterLocation = Pick<Location, "name">;

export interface Character {
    id:string; 
    name:string; 
    location:CharacterLocation;
    image:string; 
    created: Date;
}
