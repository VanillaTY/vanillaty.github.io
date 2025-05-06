// Configuration for image paths
const REPO_PREFIX = process.env.NEXT_PUBLIC_REPO_PREFIX || "";

export const getImagePath = (path: string): string => {
  // If path is empty, return empty string
  if (!path) return "";

  // If path already starts with http or https, return as is
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  // Add repository prefix if it exists
  return REPO_PREFIX ? `${REPO_PREFIX}${path}` : path;
};
