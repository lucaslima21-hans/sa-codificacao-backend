const series =[
    {id: 1, nome: "Chigago fire", alt:"Hérois contra o fogo", quem: lucas },
    {id: 2, nome: "Chicago med", alt:"Atendimento de emergencia", quem: lucas}
]

class seriesservice {
    getall() {
        return series;
    }
}

export const seriesService = new Seriesservice();

//DB > services > routes > server.js