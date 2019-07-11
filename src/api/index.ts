import { Alert, Image } from "react-native";

const constructImageFetchUrl = (keyword: string): string => (
    "https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=images&prop=imageinfo&gimlimit=1&redirects=1&iiprop=timestamp|user|userid|comment|canonicaltitle|url|size|dimensions|sha1|mime|thumbmime|mediatype|bitdepth&titles="
    + keyword);


function* imageUrls(imagesJson: any): IterableIterator<string> {
    if (typeof imagesJson.query === "undefined")
        return;
    
    const pages = imagesJson.query.pages;
    const imageInfosArrays = Object.keys(pages)
        .map(pageId => pages[pageId])
        .map(page => page.imageinfo);
    
    for (const imageInfos of imageInfosArrays)
        for (const imageInfo of imageInfos)
            yield imageInfo.url;
}

class Api {

    async findPlaceImageUrl(placeName: string): Promise<string> {
        const url = constructImageFetchUrl(placeName);
        console.log("Calling WC API: " + url);
        const imagesResponse = await fetch(url);
        console.log("Got WC response");
        const imagesJson: any = await imagesResponse.json();
        console.log("Got WC response body");
        console.table(imagesJson);
        const imageUrl = imageUrls(imagesJson).next();

        if (imageUrl.done)
            return Promise.reject("Could not find image for " + placeName);

        console.log("Using " + imageUrl.value);
        return imageUrl.value;
    }
}

const API = new Api();

export default API;