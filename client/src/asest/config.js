const config = {
    url: process.env.REACT_APP_URL_BACK ?? "http://localhost:3001",
    coreRoute: process.env.REACT_APP_URL_CORE ?? "http://localhost:3001/nucleo?",
}

export default config;