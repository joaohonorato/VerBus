export class Onibus {
    id:number;
    datahora:Date;
    ordem:string;
    linha:number;
    latitude:number;
    longitude:number;
    velocidade:number;

    constructor(id,datahora,ordem,linha,latitude,longitude,velocidade){
        this.id = id;
        this.datahora = datahora;
        this.ordem = ordem;
        this.linha = linha;
        this.latitude = latitude;
        this.longitude = longitude;
        this.velocidade = velocidade;
        return this;
    }
}