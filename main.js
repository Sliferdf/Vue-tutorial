const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola mundo con Vue',
        arrays: [
            { nombre: 'primero', cantidad: 10 },
            { nombre: 'segundo', cantidad: 0 },
            {nombre: 'tercero', cantidad: 7}
        ],
        nuevoArray: '',
        total: 0,
        fondo: 'bg-warning',
        color: false
    },

    methods: {
        agregarALista() {
            this.arrays.push({
                nombre: this.nuevoArray, cantidad: 0
            });
            this.nuevoArray = '';
        }
    },

    computed: {
        sumarArrays(){
            this.total= 0;
            for(array of this.arrays){
                this.total = this.total + array.cantidad;
            }
            return this.total;
        }
    },
});