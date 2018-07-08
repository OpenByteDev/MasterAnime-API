const { MasterAnimeAPI: api, Filter } = require('../dist/index');

(async () => {

    const tests = {
        'anime': () => api.getAnime(1),
        'anime_detailed': () => api.getAnimeDetailed(1),
        'episode': () => api.getEpisode(1, 1),
        'episode_url': () => api.getEpisodeUrl(1, 1),
        'trending': () => api.getTrending(),
        'releases': () => api.getReleases(),
        'filtering': () => api.getFiltering(new Filter({order: 'score'}))
    };

    let completeSuccess = true;

    for (let [name, supplier] of Object.entries(tests)) {
        let success = false;
        try {
            const data = await supplier();
            success = typeof data !== 'undefined';
        } catch (e) {
            console.error(e);
        }

        if (success)
            console.log(name + " " + true);
        if (!success) {
            console.error(name + " " + false);
            completeSuccess = false;
        }
    }

    if (!completeSuccess)
        process.exit(1);

})();