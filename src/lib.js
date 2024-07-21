export function match(domain, path, callback) {
  if (typeof path === "function") {
    callback = path;
    path = null;
  }

  const currentDomain = window.location.hostname;
  const currentPath = window.location.pathname;

  if (currentDomain.includes(domain) && (!path || currentPath.includes(path))) {
    callback();
  }
}
