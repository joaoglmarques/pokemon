document.getElementById('botao')
.addEventListener('click', function(){
    fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then(function(response){
        return response.json()
    }).then(function(response){

        let html_habilidades =''
        for (const hab of response.abilities) {
            html_habilidades+= '<li>'+ hab.ability.name+
        console.log(response.abilities)}

        let url = response.sprites.front_default
        document.getElementById('img-card').setAttribute('src', url)

    })
})
