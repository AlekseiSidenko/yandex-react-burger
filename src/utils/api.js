export const config = {
    baseUrl: 'https://norma.nomoreparties.space/api',
    headers: {
        'Content-Type': 'application/json',
        Accept: "application/json"
    }
}

export default function checkResponse(res) {
    if (res.ok) {
        return res.json()
    }

    return res.json().then((res) => Promise.reject(res));
} 