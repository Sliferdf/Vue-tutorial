const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola mundo con Vue',
        arrays: [
            { nombre: 'primero', cantidad: 10 },
            { nombre: 'segundo', cantidad: 0 },
            {nombre: 'tercero', cantidad: 7}
        ],
        nuevoArray: ''
    },

    methods: {
        agregarALista() {
            this.arrays.push({
                nombre: this.nuevoArray, cantidad: 0
            })
        }
    },
});