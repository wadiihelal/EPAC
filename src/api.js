function getZone() {
        return fetch('http://localhost:8089/zones').then(res => res.json()).then(d => d.data);
}
export {getZone}