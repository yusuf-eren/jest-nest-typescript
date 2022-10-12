import { UrlWithParsedQuery, parse } from "url"

export class Utils {
    public static parseUrl(url: string): UrlWithParsedQuery {
        return parse(url, true)
    }

    public static toUpperCase(arg: string) {
        return arg.toUpperCase()
    }
}
