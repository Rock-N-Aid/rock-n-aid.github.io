export class LinkGetManager {
    static getParameter(name) {
        try {
            let url = window.location.toString();
            console.log("DEBUG 1 " + url)
            console.log("DEBUG 1.2 " + name)
            let regex = new RegExp(`\\?${name}=([^?#&]+)`)
            // let regex = new RegExp("\?releaseID=.+?(?=\?)").toString();
            console.log("DEBUG 2")
            let match = regex.exec(url);
            console.log("DEBUG 2.5")
            if (match) {
                console.log("DEBUG 2a: " + match[0])
                return match[0].split("=")[1]
            }
            console.log("DEBUG 2b")
            return undefined;
        } catch(error) {
            console.error(error.message)
        }


    }
}

export class Cookie {
    static Set(name, value, seconds) {
        const date = new Date();
        date.setTime(date.getTime() + (seconds * 1000)); // Convert minutes to milliseconds
        const expires = "expires=" + date.toUTCString();
        document.cookie = `${name}=${value}; ${expires}; path=/`;
    }
    
    // Function to get the value of a cookie by its name
    static Get(name) {
        const cookieName = name + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookieArray = decodedCookie.split(';');
        for (let i = 0; i < cookieArray.length; i++) {
            let cookie = cookieArray[i].trim();
            if (cookie.indexOf(cookieName) === 0) {
                return cookie.substring(cookieName.length, cookie.length);
            }
        }
        return null; // Return null if the cookie is not found
    }
    
    // Function to check if the cookie exists (if the cooldown is in progress)
    static Exists(name) {
        return this.Get(name) !== null;
    }
}