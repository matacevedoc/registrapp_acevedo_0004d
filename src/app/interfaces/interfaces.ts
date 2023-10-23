export interface RespuestaTopHeadlines{
    status: string;
    data: FechasFeriadas[] ;
}

export interface FechasFeriadas {
    title: string;
    date: string;
    extra: string;
    inalienable: string;
    type: string;
}

export interface Users{
    id: number,
    username: String;
    password:String;
}