type PageDictionary = {
    [host: string]: {
        productId: string;
        theme:string;
    };
};

const pageDict:PageDictionary = {
    'test.localhost:3000': {
        productId: 'gid://shopify/Product/8621599228232',
        theme: 'themeBlue'
    },
    'test2.localhost:3000': {
        productId: 'gid://shopify/Product/8621599228232',
        theme: 'themeRed'
    },
    'test.lamashop.eu': {
        productId: 'gid://shopify/Product/8621599228232',
        theme: 'themeBlue'
    },
    'test2.lamashop.eu': {
        productId: 'gid://shopify/Product/8621599228232',
        theme: 'themeRed'
    }
}

//export const fallbackDomain = 'https://test.lamashop.eu'
export const fallbackDomain = 'http://test.localhost:3000'

export default pageDict