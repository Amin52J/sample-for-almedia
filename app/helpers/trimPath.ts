const trimPath = (path: string): string =>
  encodeURI(decodeURI(path.toLowerCase()));
export default trimPath;
