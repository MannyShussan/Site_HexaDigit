export interface Pag {
    header: {
        logo_alt: string;
    };
    banner1: {
        title: string;
        text: string;
    };
    main: {
        title: string;
        text: string;
    };
    banner2: {
        img_alt: string;
    };
    cards: {
        title: string;
        text: string;
    }[];
    faq: {
        question: string;
        answer: string;
    }[];
    contact_us: {
        title: string;
        text: string;
        button_text: string;
    };
}