function getSession(key:string) {
    const res = sessionStorage.getItem(key);
    return res
}
function setSession(key:string, value:any) {
    const res = sessionStorage.setItem(key, value);
    return res
}
function removeSession(key:string) {
    sessionStorage.removeItem(key)
}
function getLocal(key:string) {
    const prefix = 'tools_'
    const res = localStorage.getItem(prefix + key);
    return res
}
function setLocal(key:string, value:any) {
    const prefix = 'tools_'
    const res = localStorage.setItem(prefix + key, value);
    return res
}
function removeLocal(key:string) {
    const prefix = 'tools_';
    localStorage.removeItem(prefix + key)
}

export let storage = {
    getSession,
    setSession,
    removeSession,
    getLocal,
    setLocal,
    removeLocal
}