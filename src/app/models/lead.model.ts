export class Lead{

    constructor(
        public nombre:string,
        public apellido:string,
        public email:string,
        public phone:string,
        public empresa?:string,
        public leadsource?:string,
        public anuncio?:string,
        public description?:string

    ){

    }

}