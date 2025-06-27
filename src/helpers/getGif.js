
export const getGift = async (category) => {
    const api_key = 'api_key=6M0CfWc9haB22NV87JOiz5kKbGUHdJr0';
    const totalImages = 10
    const url = `https://api.giphy.com/v1/gifs/search?${api_key}&q=${category}&limit=${totalImages}`
    const resp = await fetch(url);
    const { data } = await resp.json()

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,

    }))

    return gifs;
}
