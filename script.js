async function vicc_lekerdezes(){
    let promise = await fetch('https://www.freetogame.com/api')
    let cucc = await promise.json();
    return cucc;
}
async function vicc_frissitese(e){
    let vicc = await vicc_lekerdezes();
    felvezetes.innerHTML = vicc.setup;
    poen.innerHTML = vicc.delivery
}

function main(){
    kerek.addEventlistener('click', vicc_frissitese);
}
/*

/games: Retrieve a list of all free-to-play games.
/game?id={game_id}: Retrieve details of a specific game by its ID.
/games?category={category_name}: Retrieve a list of all available games from a specific genre.
/games?platform={platform_name}: Retrieve a list of all available games from a specific platform.
/games?sort-by={sort_name}: Sort games by release date, alphabetical or relevance.

*/ 
/*

Endpoints & Examples

Live games list
    GET https://www.freetogame.com/api/games

Games by platform
    GET https://www.freetogame.com/api/games?platform=pc

Insert platform, eg: pc, browser or all
Games by category or tag
    GET https://www.freetogame.com/api/games?category=shooter

Insert game category or tag, eg: mmorpg, shooter, pvp, mmofps and more.
Sort games by release date, alphabetical or relevance
    GET https://www.freetogame.com/api/games?sort-by=alphabetical

Insert sort by, eg: release-date, popularity, alphabetical or relevance
Games by platform & category & sorted
    GET https://www.freetogame.com/api/games?platform=browser&category=mmorpg&sort-by=release-date

Filter Games by multiple tags for personalized results
    GET https://www.freetogame.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc

Insert tag, eg: mmorpg, shooter, pvp, mmofps and more. Optionally you can also use the "platform" and "sort" parameters
Return details from a specific game
    GET https://www.freetogame.com/api/game?id=452

*/