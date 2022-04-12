import { promises } from "fs";

const getLinks = (text) => {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const links = [];

  let tmp;
  while ((tmp = regex.exec(text)) !== null) {
    links.push({
      [tmp[1]]: tmp[2]
    })
  }

  return links.length === 0 ? 'Não existem links' : links;
}


export default async function fileCatcher(path) {
  const encoding = 'utf-8';

  try {
    const text = await promises.readFile(path, encoding);
    return getLinks(text);
  } catch(error) {
    throw new Error(error);
  }
}
