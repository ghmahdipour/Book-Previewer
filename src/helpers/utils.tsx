
export const getCookieLanguages = () => {
    var value = "; " + document.cookie;
    var parts: any[] = value.split("; i18next=");
    if (parts.length === 2) return parts.pop().split(";").shift();
    return "fa";
};

export const ShowPartialText = (text: string, maxLength: number) => {
    if(text === undefined) return;
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
}