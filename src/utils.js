const trimFilename = (filename, maxLength = 15) => {
  if (filename.length <= maxLength) {
    return filename;
  }

  const extension = filename.split(".").pop();
  const basename = filename.slice(0, filename.lastIndexOf("."));
  const prefixLength = Math.ceil((maxLength - 3) / 2);
  const suffixLength = maxLength - 3 - prefixLength;

  return `${basename.slice(0, prefixLength)}...${basename.slice(
    -suffixLength
  )}.${extension}`;
};

const formatBytes = (bytes, decimals = 2) => {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};

export { trimFilename, formatBytes };
