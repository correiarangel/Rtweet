import axios from 'axios'

const api = axios.create({
    
    //aqui o ip de sua maquina onde 
    //radara o servidor
    baseURL:'http://192.168.1.25:3030'
})

export default api