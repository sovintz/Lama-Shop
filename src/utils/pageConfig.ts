type PageDictionary = {
    [host: string]: {
        productId: string;
        theme:string;
        metadata: {
            title: string;
            description: string;
        }
    };
};

const pageDict:PageDictionary = {
    'test.localhost:3000': {
        productId: 'gid://shopify/Product/8621599228232',
        theme: 'themeOrange',
        metadata: {
            title: 'LamaShop - test',
            description: 'LamaShop - test',
        }
    },
    'test2.localhost:3000': {
        productId: 'gid://shopify/Product/8621599228232',
        theme: 'themeRed',
        metadata: {
            title: 'LamaShop - test',
            description: 'LamaShop - test',
        }
    },
    'test.lamashop.eu': {
        productId: 'gid://shopify/Product/8621599228232',
        theme: 'themeBlue',
        metadata: {
            title: 'LamaShop - test',
            description: 'LamaShop - test',
        }
    },
    'test2.lamashop.eu': {
        productId: 'gid://shopify/Product/8621599228232',
        theme: 'themeRed',
        metadata: {
            title: 'LamaShop - test',
            description: 'LamaShop - test',
        }
    },
    'lumikitty.lamashop.eu': {
        productId: 'gid://shopify/Product/8621599228232',
        theme: 'themeOrange',
        metadata: {
            title: 'LumiKitty',
            description: 'Predstavljamo LumiKitty, vašo novo najljubšo svetilko, ki odlično združuje obliko in funkcijo. Predstavljajte si svetilko, ki prostora ne le osvetli, temveč mu vdahne tudi osebnost in toplino. LumiKitty je prav to! Njena prikupna mačja oblika bo spodbudila pogovor in očarala tako otroke kot odrasle. Vsaka krivulja, vsak sij in vsak odtenek, ki ga oddaja, govori o skrbnem oblikovanju, katerega namen ni le osvetlitev, temveč tudi prijetno druženje.',
        }
    },
}

//export const fallbackDomain = 'https://test.lamashop.eu'
export const fallbackDomain = 'http://test.localhost:3000'

export default pageDict