export interface IMovie {
    id: number
    title: string
    name: string
    poster_path: string
    release_date: number
    backdrop_path: string
}

export interface IDetail {
    id: number
    poster_path: string
    backdrop_path: string
    title: string
    overview: string
    vote_overage: string
    profile_path: string,
}
export interface IActors {
    id: number
    profile_path: string,
    name: string
}


export interface IActorDetail{
    name: string
    id: number
    profile_path: string
    biography: string
    place_of_birth: string
}

