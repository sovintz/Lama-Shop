
export interface Variant{
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
}

export interface MarketingText {
    title: string;
    description: string;
}
export interface SpecificationEntry {
    title: string;
    value: string;
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
    subtitle: string;
    callToActionButtonText: string;
    marketingTexts: MarketingText[];
    productDescription: string;
    amountText: string;
    buyButtonText: string;
    specificationsTitle: string;
    productSpecifications: SpecificationEntry[];
    guarantees: GuaranteeObject[];
    faqTitle: string;
    faqs: FaqObject[];
    errorMessages: {
        noCheckout: string;
    }
}

export interface ProductType {
    title: string;
    descriptionHtml: string;
    updatedAt: string;
    priceRange: {
        minVariantPrice: {
            amount: string;
        };
    };
    variants: {
        edges: {
            node: Variant
        }[];
    };
    media: {
        edges: {
            node: ImageContent | VideoContent;
        }[];
    };
}

export type ImageContent = {
    mediaContentType: "IMAGE";
    image: {
        url: string;
        altText: string;
    };
    sources?: never;
};

export type VideoContent = {
    mediaContentType: "VIDEO";
    image?: never;
    previewImage: {
     url: string;
    }
    sources: {
        url: string;
        mimeType: string;
        height: number;
    }[];
};