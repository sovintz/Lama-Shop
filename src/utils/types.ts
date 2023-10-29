export interface SelectedOptions {
    name: string,
    value: string
}

export interface Variant {
    id: string,
    imgSrc: string,
    price: string,
    selectedOptions: SelectedOptions
}

export interface GuaranteeObject {
    text: string;
}

export interface FaqObject {
    question: string;
    answer: string;
}

export interface DescriptionsType {
    mainTitle: string;
    callToActionButtonText: string;
    marketingTitle1: string;
    marketingTitle2: string;
    marketingDescription1: string;
    marketingDescription2: string;
    productDescription: string;
    amountText: string;
    buyButtonText: string;
    specificationsTitle: string;
    productSpecifications: string;
    guarantees: GuaranteeObject[];
    faqTitle: string;
    faqs: FaqObject[];
    errorMessages: {
        noCheckout: string;
    }
}

export interface ProductType {
    title: string;
    description: string;
    updatedAt: string;
    priceRange: {
        minVariantPrice: {
            amount: string;
        };
    };
    variants: {
        edges: {
            node: {
                id: string;
                image: {
                    url: string;
                    altText: string;
                };
                price: {
                    amount: string;
                };
                compareAtPrice: {
                    amount: string;
                };
                selectedOptions: {
                    name: string;
                    value: string;
                }[];
            };
        }[];
    };
    images: {
        edges: {
            node: {
                url: string;
                altText: string;
            };
        }[];
    };

}