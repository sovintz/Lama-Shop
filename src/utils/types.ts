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
    mainTitle?: string;
    callToActionButtonText?: string;
    marketingTitle?: string;
    marketingDescription1?: string;
    marketingDescription2?: string;
    productDescription?: string;
    amountText?: string;
    buyButtonText?: string;
    specificationsTitle?: string;
    productSpecifications?: string;
    guarantees?: GuaranteeObject[];
    faqTitle?: string;
    faqs?: FaqObject[];
    errorMessages?: {
        noCheckout: string;
    }
}

const test = {
    "mainTitle": "The Best Product",
    "callToActionButtonText": "Discover More",
    "marketingTitle": "Marketing",
    "marketingDescription1": "marketing description1",
    "marketingDescription2": "marketing description2",
    "productDescription": "product description",
    "amountText": "Amount",
    "buyButtonText": "Buy",
    "specificationsTitle": "Specifications",
    "productSpecifications": "This are the product specifications",
    "guarantees": [
        {"text": "No Compromises in Quality"},
        {"text": "100% Satisfaction Guarantee"},
        {"text": "Free Worldwide Shipping"}
    ],
    "faqTitle": "Frequently Asked Questions",
    "faqs": [
        {"question": "How long does shipping take", "answer": "3 weeks"},
        {"question": "Q2", "answer": "A2"}
    ]
}