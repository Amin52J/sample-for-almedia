const removeHTMLTags = (mdText: string) => mdText?.replace(/(<([^>]+)>)/gi, "") || "";

export default removeHTMLTags;
