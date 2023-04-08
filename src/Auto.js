class Auto{
    constructor(){
        this.orientacion = "N";
    }
    girar(cadena){ 
        for(let i = 0; i < cadena.length; i++){
            if(cadena[i] == "I"){
                if(this.orientacion == "N"){
                    this.orientacion = "O";
                }
                else if(this.orientacion == "O"){
                    this.orientacion = "S";
                }
                else if(this.orientacion == "S"){
                    this.orientacion = "E";
                }
                else if(this.orientacion == "E"){
                    this.orientacion = "N";
                }
            }
        }
    }

    getPosicionFinal(){
        return "0,0"+this.orientacion;
    }


}
export default Auto;