// when running in tests subdir use relative path
export const pathPrefix = process.env.GITHUB_ACTIONS === "true" ? "" : "/..";
