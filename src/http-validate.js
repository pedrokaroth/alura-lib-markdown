import fetch from "node-fetch";

async function checkStatus(arrayUrls) {
    const arrayStatus = await Promise.all(arrayUrls.map(async url => {
        const response = await fetch(url);

        return response.status;
    }))

    return arrayStatus;
}

function getArrayUrls(arrayLinks) {
    return arrayLinks.map(objectLink => Object.values(objectLink).join());
}

export default async function validateUrls(arrayLinks) {
    const links = getArrayUrls(arrayLinks);
    const statusLinks = await checkStatus(links);

    const result = arrayLinks.map((object, index) => ({
         ...object, status: statusLinks[index]
        }));


    return result;
}